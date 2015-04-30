module.exports = function(router,connection,passport){

	var validModels = 	require('./v1/config/validModels.js');
	
	// middleware to use for all requests
	router.use(function(req,res,next){
		console.log('---new dev request');
		// put passport.authenticate() here?????????
		next();
	});

	// ROUTES DEFINED
	// ====================

	require('./dev/coreroutes.js')(router,connection,passport,validModels);

	// test route to make sure everything is working
	router.get('/', 
		function(req, res) {
	    	res.json({ message: 'welcome to the Kurbi API for you, the developer!' });   
		}
	);

};