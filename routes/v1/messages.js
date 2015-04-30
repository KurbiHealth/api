module.exports = function(router,connection,passport,validModels,async,joins,sendMessage){

	/*
	var mailOptions = {
	    from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
	    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
	    subject: 'Hello ✔', // Subject line
	    text: 'Hello world ✔', // plaintext body
	    html: '<b>Hello world ✔</b>' // html body
	}; */

    router.route('/messages/:action')

    	.post(
            passport.authenticate(
                'token',
                {session: false}
            ),
            function(req,res){
            async.waterfall([

                // GET MESSAGE DATA FROM PARAMS
                function(callback){
                    // set up vars
                    action = req.params.action;
                    data = {
                        from: req.body.from,
                        to: req.body.to,
                        subject: req.body.subject,
                        text: req.body.text,
                        html: req.body.html
                    };
                    callback(null,data);
                },

                // SEND MESSAGE
                function(data,callback){
                    result = sendMessage(data);
                    callback(null,result);
                }
            ],

            // SEND DATA TO CLIENT
            function(err,result){
                if(err){
                    res.status(500).send(err);
                }else{
                    res.status(200).send(result);
                }
            });
        });

};