module.exports = function(router,connection,passport,async,Q){

    router.route('/:model')

        .post(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req,res){

                // SET UP INITIAL QUERY
                var modelName = req.params.model;
                var queryString = 'INSERT INTO ' + modelName + ' SET ?';

                // PROCESS INPUT FIELDS (SANITIZATION DONE BY THE MYSQL LIBRARY)
                if(typeof req.body.created != 'undefined')
                    delete req.body['created'];
                if(typeof req.body.id != 'undefined')
                    delete req.body['id'];

                connection.query(queryString,req.body, function(err, rows) {
                    if(err){
                        console.log({query: queryString, err: err, line: 79});
                        next({query: queryString, err: err, line: 79});
                    }else{
                        res.status(200).send(rows);
                    }
                });
            } // end function(req,res)
        ) // end get()

}; // end modules.exports