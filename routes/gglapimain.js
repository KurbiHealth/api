module.exports = function(router,connection,crypto,passport,async){

	// setup variables
	

	// MIDDLEWARE 
    // ====================


    // HELPER FUNCTIONS
    // ====================


	// ROUTES DEFINED
	// ====================

	
	// test route to make sure everything is working
	router.get('/', 
		function(req, res) {
	    	res.json({ message: 'welcome to the Kurbi Google API!' });   
		}
	);

};