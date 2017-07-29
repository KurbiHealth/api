module.exports = function(router,connection,crypto,passport,async,emlTransporter,Q,ENV,Schema){ // multer

	// SETUP VARIABLES
	// ===============
	//var schema = new Schema('mysql',{port: '3306',host: 'localhost'});
	//var Symptoms = require('./models/Symptoms.js')(schema);

	// MIDDLEWARE - ALL REQUESTS
	// =========================
	router.use(function(req,res,next){

		if(ENV == 'dev'){
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

	// OPERATIONS ON MODEL
	// ===================
	router.param('model',function(req,res,next,model){
		// here would be where you run validation/sanitation on the model (named parameter)
        next();
    });

	// ROUTES 
	// ======
	require('./get.js')(router,connection,passport,async,Q); // ,schema
	require('./post.js')(router,connection,passport,async,Q);
	require('./put.js')(router,connection,passport,async,Q);
	require('./delete.js')(router,connection,passport,async,Q);

	// a test route to make it easy to see if api is running
	router.get('/', 
		function(req, res) {
	    	res.json({ message: 'welcome to the Kurbi API! (v2 for Restangular)' });   
		}
	);

};