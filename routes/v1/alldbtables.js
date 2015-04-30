module.exports = function(router,connection,passport,validModels,async,joins){

    router.route('/db/:model/*')

        .get(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req,res){
            finalCallback = function(err, result){
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(200).send(result);
                }
            }
            async.waterfall([

                // CHECK IF MODEL IS PRIVATE OR PUBLIC; BUILD FILTER IF PRIVATE
                function(callback){
                    // get params
                    modelName = '';
                    id = '';
                    userFilter = '';
                    userId = '';
                    joinTable = '';
                    joinString = '';

                    modelName = req.params.model;
                    if(!req.params[0]){
                        id='all';
                    }else{
                        if(isNaN(req.params[0])){
                            // validate that ID is a number
                            finalCallback('id is not a number',null);
                        }else{
                            id = req.params[0];
                        }
                    }
                    userId = req.user.id;

                    // validate whether table is private or public
                    if(validModels[modelName] == 'public'){
                        // if table is public show all records requested
                        userFilter = false;
                    }else if(validModels[modelName] !== null && typeof validModels[modelName] === 'object'){
                        // table is private but doesn't have user_id so needs to be joined
                        joinTable = validModels[modelName].join;
                        temp = joins[modelName];
                        joinString = temp[joinTable];
                        if(!validModels[joinTable] == 'private'){
                            finalCallback('the table requested is more then one relationship away from a table with user id, you will need to set up a custom query to access this data',null);
                        }
                        userFilter = true;
                    }else{
                        // table is private to user
                        userFilter = true;
                    }
                    
                    callback(null,modelName,id,userFilter,userId,joinTable,joinString);
                },

                // GET RECORDS FROM DATABASE
                function(modelName,id,userFilter,userId,joinTable,joinString,callback){
                    // GET ALL RECORDS IN TABLE
                    if(id=='all'){
                        if(joinTable != ''){
                            // if the table requested is linked to the users table
                            // through another table, then 1) get the record(s) from
                            // the join table with user id, then use that join table
                            // record id to pull all linked records from the actual 
                            // table requested

                            queryString = 'SELECT * FROM ' + modelName + ' JOIN ' + joinTable + ' ON (' + joinString + ') WHERE ' + joinTable + '.user_id=' + userId;
                            options = {sql: queryString, nestTables: true};
                            connection.query(options, function(err, rows) {
                                if(err){
                                    finalCallback(err,null);
                                }else{
                                    finalCallback(null,rows);
                                }
                            });
                        }else{
                            if(!userFilter){
                                queryString = 'SELECT * FROM ' + modelName;
                            }else{
                                // if the requested table has a user_id field, then it's 
                                // easy to filter for private user records
                                queryString = 'SELECT * FROM ' + modelName + ' WHERE ' + modelName + '.user_id=' + userId;
                            }
                            connection.query(queryString, function(err, rows) {
                                if(err){
                                    finalCallback(err,null);
                                }else{
                                    if(rows.length == 1){
                                        returnObj = rows[0];
                                    }else{
                                        returnObj = rows;
                                    }
                                    finalCallback(null,returnObj);
                                }
                            });
                        }
                    }else{
                        // jump to next function, pass it all
                        callback(null,modelName,id,userFilter,userId,joinTable,joinString);
                    }
                },

                function(modelName,id,userFilter,userId,joinTable,joinString,callback){
                    // GET ONE RECORD FROM TABLE
                    queryString = 'SELECT * FROM ' + modelName;
                    if(joinTable){
                        // need to check that the requested record belongs to the 
                        // authenticated (current) user, by checking that the join
                        // table has the right value in join_table.user_id
                        queryString += ' JOIN ' + joinTable + ' ON (' + joinStrong + ') WHERE ' + joinTable + '.user_id=' + userId + ' AND';
                    }
                    queryString += ' WHERE ' + modelName + '.id=' + id;
                    options = {sql: queryString, nestTables: true};
                    connection.query(options, function(err, rows) {
                        if(err){
                            finalCallback(err,null);
                        }else{
                            if(rows.length == 1){
                                returnObj = rows[0];
                            }else{
                                returnObj = rows;
                            }
                            // check that returnObj has a valid user_id value (if it's not a "privateJoin"); if not, return an error
                            if(returnObj.user_id==userId || userFilter === false){
                                finalCallback(null,returnObj);
                            }else{
                                finalCallback('private data requested illegally',null);
                            }
                        }
                    });
                }

            ],

                // SEND DATA TO CLIENT
                finalCallback
            ); // end async.waterfall()
            
        } // end function(req,res)
        ) // end get()

        .post(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req,res){

                // get variables
                tableName = req.params.model;
                userId = req.user.id;

                // do not allow users via app to add to tables (with data used for lookups and dropdowns)
                if(validModels[tableName] == 'public'){
                    res.status(500).send('cannot insert into this table');
                }

                // get form fields with: req.body.name ("name" is what the field is named)
                fieldArr = new Object;
                for(i in req.body){
                    // don't allow passing data to protected fields: id, created
                    if(i != 'id' && i != 'created' && i != 'parentTable' && i != 'parentId'){
                        fieldArr[i] = req.body[i];
                    }
                }

                // PRIVATE vs PRIVATEJOIN
                if(validModels[tableName] == 'private'){
                    // check to make sure that inserted field has 'user_id' and user_id value is current
                    if(!('user_id' in req.body)){
                        res.status(500).send('user id not set');
                    }else{
                        req.body.user_id = userId;
                    }
                }else{ // validModel should == 'privateJoin'

                    // if it's a privateJoin, then I should look up the chain to see if there's a user_id
                    // UNLESS, the parentTable is defined in the post form, in which case there should be 
                    // a user_id in that parentTable,
                    tableChild = tableName;
                    if('parentTable' in req.body){
                        tableParent = req.body.parentTable;
                    }else{
                        tableParent = validModels[tableName].join;
                    }

                    // the point is to check that the record in the parentTable is linked to a user rcd, or 
                    // to a table with user_id with a connected record (that already exists)
                    joinStr = '';
                    stop = false;

                    while(stop == false){
                        if(validModels[tableParent] == 'private'){
                            // check whether there is a record with the right user_id value in it
                            queryString = 'SELECT * FROM ' + tableChild + joinStr + ' WHERE ' + tableParent + '.user_id=' + userId;
                            connection.query(queryString,function(err,rows){
                                if(err){
                                    res.status(500).send({query:queryString,error:err});
                                }else if(rows.length == 0){
                                    res.status(500).send('relationship to a table with a user id not found');
                                }else{
                                    // add a new record
                                    connection.query('INSERT INTO ' + tableName + ' SET ?', fieldArr, function(err, result) {
                                        if(err){
                                            returnObj = {query: queryString, dberr: err}
                                            res.status(500).send(returnObj);
                                        }else{
                                            // return id of inserted record (or return full record?)
                                            res.status(200).send({insertId: result.insertId});
                                        }
                                    });
                                }
                            });
                            stop = true;
                        }else{
                            tableChild = tableParent;
                            tableParent = validModels[tableParent].join;
                            joinStr += ' JOIN ' + tableParent  + ' ON (' + joins[tableChild][tableParent] + ') ';
                        }
                    }
                }                
            }
        )
    
        // can the app (i.e. the user) update public tables? someone malicious could vandalize lookup lists by inserting crass symptom names, for example
        .put(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req, res) {
                // get variables
                tableName = req.params.model;
                userId = req.user.id;
                updateId = req.body.updateId;

                // do not allow users via app to add to tables (with data used for lookups and dropdowns)
                if(validModels[tableName] == 'public'){
                    res.status(500).send('cannot update in this table');
                }

                // get form fields with: req.body.name ("name" is what the field is named)
                fieldArr = new Object;
                for(i in req.body){
                    // don't allow passing data to protected fields: id, created
                    if(i != 'id' && i != 'created' && i != 'parentTable' && i != 'parentId' && i != 'updateId'){
                        fieldArr[i] = req.body[i];
                    }
                }

                // PRIVATE vs PRIVATEJOIN
                if(validModels[tableName] == 'private'){
                    // check to make sure that inserted field has 'user_id' and user_id value is current
                    if(!('user_id' in req.body)){
                        res.status(500).send('user id not set');
                    }else{
                        req.body.user_id = userId;
                    }
                }else{ // validModel should == 'privateJoin'

                    // if it's a privateJoin, then I should look up the chain to see if there's a user_id
                    // UNLESS, the parentTable is defined in the post form, in which case there should be 
                    // a user_id in that parentTable,
                    tableChild = tableName;
                    if('parentTable' in req.body){
                        tableParent = req.body.parentTable;
                    }else{
                        tableParent = validModels[tableName].join;
                    }

                    // the point is to check that the record in the parentTable is linked to a user rcd, or 
                    // to a table with user_id with a connected record (that already exists)
                    joinStr = '';
                    stop = false;

                    while(stop == false){
                        if(validModels[tableParent] == 'private'){
                            // check whether there is a record with the right user_id value in it
                            queryString = 'SELECT * FROM ' + tableChild + joinStr + ' WHERE ' + tableParent + '.user_id=' + userId;
                            connection.query(queryString,function(err,rows){
                                if(err){
                                    res.status(500).send({query:queryString,error:err});
                                }else if(rows.length == 0){
                                    res.status(500).send('relationship to a table with a user id not found');
                                }else{
                                    // add a new record
                                    connection.query('UPDATE ' + tableName + ' SET ? WHERE ' + tableName + '.id=' + updateId, fieldArr, function(err, result) {
                                        if(err){
                                            returnObj = {query: queryString, dberr: err}
                                            res.status(500).send(returnObj);
                                        }else{
                                            // return id of inserted record (or return full record?)
                                            res.status(200).send('changed rows: ' + result.changedRows);
                                        }
                                    });
                                }
                            });
                            stop = true;
                        }else{
                            tableChild = tableParent;
                            tableParent = validModels[tableParent].join;
                            joinStr += ' JOIN ' + tableParent  + ' ON (' + joins[tableChild][tableParent] + ') ';
                        }
                    }
                } 
            }
        )

        // WHAT INFO CAN A USER DELETE? nothing from a public table. their connection to an exercise, medication, care_team, etc, but not their core user record
        .delete(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req, res) {
console.log(req.body);
                // get variables
                tableName = req.params.model;
                userId = req.user.id;
                deleteId = req.body.deleteId;

                // do not allow users via app to add to tables (with data used for lookups and dropdowns)
                if(validModels[tableName] == 'public'){
                    res.status(500).send('cannot delete from this table');
                }

                // PRIVATE vs PRIVATEJOIN
                if(validModels[tableName] == 'private'){
                    // check to make sure that inserted field has 'user_id' and user_id value is current
                    if(!('user_id' in req.body)){
                        res.status(500).send('user id not set');
                    }else{
                        req.body.user_id = userId;
                    }
                }else{ // validModel should == 'privateJoin'

                    // if it's a privateJoin, then I should look up the chain to see if there's a user_id
                    // UNLESS, the parentTable is defined in the post form, in which case there should be 
                    // a user_id in that parentTable,
                    tableChild = tableName;
                    if('parentTable' in req.body){
                        tableParent = req.body.parentTable;
                    }else{
                        tableParent = validModels[tableName].join;
                    }

                    // the point is to check that the record in the parentTable is linked to a user rcd, or 
                    // to a table with user_id with a connected record (that already exists)
                    joinStr = '';
                    stop = false;

                    while(stop == false){
                        if(validModels[tableParent] == 'private'){
                            // check whether there is a record with the right user_id value in it
                            queryString = 'SELECT * FROM ' + tableChild + joinStr + ' WHERE ' + tableParent + '.user_id=' + userId;
                            connection.query(queryString,function(err,rows){
                                if(err){
                                    res.status(500).send({query:queryString,error:err});
                                }else if(rows.length == 0){
                                    res.status(500).send('relationship to a table with a user id not found');
                                }else{
                                    // add a new record
                                    queryString = 'DELETE FROM ' + tableName + ' WHERE ' + tableName + '.id=' + deleteId;
                                    connection.query(queryString, function(err, result) {
                                        if(err){
                                            returnObj = {query: queryString, dberr: err}
                                            res.status(500).send(returnObj);
                                        }else{
                                            // return id of inserted record (or return full record?)
                                            res.status(200).send('affected rows: ' + result.affectedRows);
                                        }
                                    });
                                }
                            });
                            stop = true;
                        }else{
                            tableChild = tableParent;
                            tableParent = validModels[tableParent].join;
                            joinStr += ' JOIN ' + tableParent  + ' ON (' + joins[tableChild][tableParent] + ') ';
                        }
                    }
                }
            }
        );

}; // end modules.exports