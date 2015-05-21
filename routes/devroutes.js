module.exports = function(router,connection,passport,async){

	var validModels = 	require('./v1/config/validModels.js');
	var joins = 	require('./v1/config/joins.js');
	
	// middleware to use for all requests
	router.use(function(req,res,next){
		console.log('---new dev request');
		// put passport.authenticate() here?????????
		next();
	});

	// ROUTES DEFINED
	// ====================

	require('./dev/coreroutes.js')(router,connection,passport,async,validModels,joins);

	// test route to make sure everything is working
	router.get('/', 
		function(req, res) {
	    	res.json({ message: 'welcome to the Kurbi API for you, the developer!' });   
		}
	);

};