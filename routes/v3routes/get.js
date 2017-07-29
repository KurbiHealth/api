module.exports = function(router,connection,passport,async,Q){ // ,schema

    router.route('/:model/:id?')

        .get(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req,res){

console.log(req.params);
console.log(req.query); 
console.log(req.body);

                // SET UP INITIAL QUERY
                var modelName = req.params.model;
                var queryString = 'SELECT * FROM ' + modelName;
                var whereCounter = 0;
//var modelCamelCased = modelName.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase(); });
//var currModel = schema.models[modelCamelCased.toUpperCase()];


                // ADD OPTIONS '_filters'
                if(typeof req.query._filters != 'undefined'){
console.log(typeof req.query._filters);
                    var filters = JSON.parse(req.query._filters);
console.log(filters);
                    for(var key in filters){
                        if(whereCounter == 0)
                            queryString += ' WHERE ';
                        else
                            queryString += ' AND ';
                        if(typeof filters[key] == 'number')
                            queryString += key + ' LIKE ' + filters[key];
                        else
                            queryString += key + ' LIKE \'' + filters[key] + '%\'';
                        whereCounter++;
                    }
                }



                // ADD "ID" IF INCLUDED
                if(typeof req.params.id != 'undefined' && req.params.id != ''){
                    if(whereCounter == 0)
                        queryString += ' WHERE ';
                    else
                        queryString += ' AND ';
                    queryString += 'id=' + req.params.id;
                }



                // ADD OPTIONS 'sortDir' & '_sortField'
                if(typeof req.query._sortField != 'undefined' && req.query._sortField != ''){
                    queryString += ' ORDER BY `' + req.query._sortField + '`';
                }
                if(typeof req.query._sortDir != 'undefined' && req.query._sortDir != ''){
                    queryString += ' ' + req.query._sortDir;
                }



                // ADD OPTIONS '_page' & '_perPage'
                if(typeof req.query._perPage != 'undefined' && req.query._perPage != ''){
                    // 1. get total # of entries
                    connection.query({sql: 'SELECT * FROM ' + modelName}, function(err,rows) {
                        if(err){
                            next({query: queryString, err: err, line: 28});
                        }else{
                            res.set('X-Total-Count', rows.length);
                            res.set('Access-Control-Expose-Headers','x-total-count');
                        }
                    });
                    // 2. get the requested rows
                    queryString += ' LIMIT ' + req.query._perPage;
                }
                if(typeof req.query._page != 'undefined' && req.query._page != ''){
                    queryString += ' OFFSET ' + ((req.query._page - 1) * req.query._perPage);
                }

//console.log(queryString);

                // DO DATABASE QUERY
                var options = {sql: queryString, nestTables: false};
                connection.query(options, function(err,rows) {
                    if(err){
                        console.log({query: queryString, err: err, line: '72'});
                        next({query: queryString, err: err, line: '72'});
                    }else{
                        if(rows.length == 1)
                            rows = rows[0];
                        res.status(200).send(JSON.stringify(rows));
                    }
                });
            } // end function(req,res)
        ) // end get()

}; // end modules.exports