module.exports = function(router,connection,passport,validModels,async,joins,sendMessage){

    router.route('/test/*')

    	.get(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req,res){
            async.waterfall([

            ],
            function(err,result){

            });
        	}
        );

};