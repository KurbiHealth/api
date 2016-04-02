module.exports = function(router,connection,passport,async,Q){

    router.route('/:model/:id')

        .delete(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req,res){
console.log('++++');
console.log(req.params);
console.log(req.query);
console.log(req.body);
console.log('----');
                var modelName = req.params.model;
                var limit = req.query._perPage;
                //queryString = 'SELECT * FROM ' + modelName + ' JOIN ' + joinTable + ' ON (' + joinString + ') WHERE ' + joinTable + '.user_id=' + userId;
                var queryString = 'SELECT * FROM ' + modelName;// + ' LIMIT ' + limit;

                if(typeof req.params.id != 'undefined' && req.params.id != ''){
                    queryString += ' WHERE id=' + req.params.id;
                }
console.log(queryString);
                options = {sql: queryString, nestTables: false};
                connection.query(options, function(err, rows) {
                    if(err){
                        console.log({query: queryString, err: err, line: 79});
                        res.status(500).send({query: queryString, err: err, line: 79});
                    }else{
                        if(rows.length == 1)
                            console.log(rows);
                        res.status(200).send(rows);
                    }
                });
            } // end function(req,res)
        ) // end get()

}; // end modules.exports