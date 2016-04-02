module.exports = function(router,connection,passport,async,Q){

    router.route('/:model/:id?')

        .get(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req,res){
console.log('++++');
console.log(req.params);
console.log(req.query); // { _page: '1', _perPage: '30', _sortDir: 'DESC', _sortField: 'id' }
console.log(req.body);
console.log('----');
                // SET UP INITIAL QUERY
                var modelName = req.params.model;
                var queryString = 'SELECT * FROM ' + modelName;

                // ADD ID IF INCLUDED
                if(typeof req.params.id != 'undefined' && req.params.id != '')
                    queryString += ' WHERE id=' + req.params.id;

                // ADD OPTIONS
                if(typeof req.query._page != 'undefined' && req.query._page != '')
                    var pageNum = req.query._page;
                if(typeof req.query._perPage != 'undefined' && req.query._perPage != '')
                    var limit = req.query._perPage;
                
                

                
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