module.exports = function(router,connection,crypto,passport,async,emlTransporter,Q,ENV){ // multer

	// setup variables
	var validModels = 	require('./v1/config/validModels.js');
	var joins = 		require('./v1/config/joins.js');
	var security = 		require('./v1/security/security.js')(router,connection,validModels,joins,Q);

	// middleware to use for all requests
	router.use(function(req,res,next){

		// production is using Nginx which is adding the appropriate headers. Developers are 
		// using MAMP, and need headers added here. -Matt Eckman (4/7/2016)
		if(ENV == 'dev' || ENV=='remotetest'){
			// Website you wish to allow to connect
			res.setHeader('Access-Control-Allow-Origin', '*');
			// Request methods you wish to allow
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
			// Request headers you wish to allow
			res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-custom-username,x-custom-token');
			// Set to true if you need the website to include cookies in the requests sent
			// to the API (e.g. in case you use sessions)
			res.setHeader('Access-Control-Allow-Credentials', true);
			if (req.method === 'OPTIONS') {
				res.send(200);
			}else{
				next();
			}
		}else{
			next();
		}

	});

	router.param('model',function(req,res,next,model){
        // CHECK MODEL IS VALID
        // (validModels is a 1-dimensional array from /config/validModels.js)
        modelStatus = model in validModels;

// if this is a PUT to "users", then need to allow adding new data to user record
// also need POST for a new user if it's a care_team invitation
// allow DELETE on users? only if they delete themselves? or archive the rcd

		// model name not found in keys of "validModels" object
        if(modelStatus == false){
            res.status(500).send('modelNameInvalid');
        }else{
        	next();
        }
    });

    // HELPER FUNCTIONS
    // ====================
    function sendMessage(options){
    	/*
		var mailOptions = {
		    from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
		    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
		    subject: 'Hello ✔', // Subject line
		    text: 'Hello world ✔', // plaintext body
		    html: '<b>Hello world ✔</b>' // html body
		}; */
		mailOptions = options;

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        return(error);
		    }else{
		        return(info.response);
		    }
		});
    }

	// ROUTES DEFINED
	// ====================

	require('./v1/loginsignup.js')(router,connection,crypto,async);
	require('./v1/query.js')(router,connection,passport,validModels,async,joins);
	require('./v1/alldbtables.js')(router,connection,passport,validModels,async,joins,security,Q);
	require('./v1/customroutes.js')(router,connection,passport,validModels,async,joins,sendMessage);
	require('./v1/messages.js')(router,connection,passport,validModels,async,joins,sendMessage);
	require('./v1/checktoken.js')(router,passport);
	require('./v1/landingpgsignup.js')(router,connection,crypto,async);

	// test route to make sure everything is working
	router.get('/', 
		function(req, res) {
	    	res.json({ message: 'welcome to the Kurbi API!' });   
		}
	);

};