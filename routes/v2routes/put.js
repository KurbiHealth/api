module.exports = function(router,connection,passport,async,Q){

    router.route('/:model/:id')

        .put(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req,res){

                // SET UP INITIAL QUERY
                var modelName = req.params.model;
                var id = req.params.id;
                var queryString = 'UPDATE ' + modelName + ' SET ? WHERE id=' + id;

                // PROCESS INPUT FIELDS (SANITIZATION DONE BY THE MYSQL LIBRARY)
                if(typeof req.body.created != 'undefined')
                    delete req.body['created'];
                if(typeof req.body.id != 'undefined')
                    delete req.body['id'];

                connection.query(queryString, req.body, function(err, rows) {
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