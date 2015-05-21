module.exports = function(router,connection,passport,async,validModels,joins){

/* EXAMPLES
    router.param('model',function(req,res,next,model){
        // CHECK MODEL IS VALID
        // (validModels is a 1-dimensional array from /config/validModels.js)
        modelStatus = validModels.indexOf(model);
        // a value of -1 means the model passed by request was not in the list
        // of valid model names, so stop and return an error flag
        if(modelStatus == -1){
            res.status(500).send('modelNameInvalid');
        }
        next();
    });

    router.route('/:model/*')

        .get(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req,res){

            }
        );
*/
    router.get(
        '/validmodels',
        passport.authenticate(
            'token',
            {session: false}
        ),
        function(req,res){
            res.json(validModels);
        }
    );

    router.get(
        '/joins',
        passport.authenticate(
            'token',
            {session: false}
        ),
        function(req,res){
            res.json(joins);
        }
    );

    router.get(
        '/fieldsfor/:table',
        passport.authenticate(
            'token',
            {session: false}
        ),
        function(req,res){
            tableName = req.params.table;
            queryString = 'SELECT * FROM ' + tableName + ' LIMIT 1';
            connection.query(queryString, function(err, rows, fields) {
                if(err){
                    res.status(500).send({query: queryString, err: err, line: 61});
                }else{
                    fieldList = [];
                    for(i in fields){
                        fieldList.push(fields[i].name)
                    }
                    res.status(200).send({list: fieldList, details: fields});
                }
            });
        }
    );

};