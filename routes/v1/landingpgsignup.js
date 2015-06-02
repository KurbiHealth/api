module.exports = function(router,connection,crypto,async){

router.route('/landingpgsignup')

	.post(
		function(req,res){
		async.waterfall([

			// check params, and check to see if account already exists
			function(callback){
				email = req.body.email;
				firstname = req.body.firstname;
				lastname = req.body.lastname;
				field = req.body.field;
				if(email == ''){
					res.status(500).send('credentials not received');
				}

				queryString = 'INSERT INTO signups (firstname,lastname,email,field) VALUES (\''+firstname+'\',\''+lastname+'\',\''+email+'\',\''+field+'\')';
				connection.query(queryString,function(err,result){
					if(err){
						callback(err,null);
					}else{
						id = result.insertId;
						callback(null,true);
					}
				});
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