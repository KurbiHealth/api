module.exports = function(router,connection,crypto,async){

router.route('/uploadimage')

	.post(
		function(req,res){
		async.waterfall([

			// check params, and check to see if account already exists
			function(callback){

// CODE HERE

			}
		],
		// handle sending result to client
		function(err,result){
			if(err){
				res.status(500).send(err);
			}else{
				res.status(200).send(result);
			}
		}); // end async
	}); // end .post

};