module.exports = function(router,connection,crypto,async){

router.route('/login')

	.post(
		function(req,res){
		async.waterfall([

			// check that params are not empty & that user doesn't already
			// exist (email is in users table)
			function(callback){
				email = req.body.email;
				password = req.body.password;
				if(email == '' || password == ''){
					res.status(500).send('credentials not received');
				}

				var user = {};
				queryString = 'SELECT * FROM users WHERE email=\'' + email + '\' AND password=\'' + password + '\'';
				connection.query(queryString, function(err,rows){
					if(err){
						console.log(err);
						callback(err,null);
					}else{
						console.log(rows);
						if(rows.length > 1){
		            		callback('multiple users found',null);
		            	}else{
		            		callback(null,rows[0]);
						}
					}
				});
			},

			// create token, check to see it's unique
			function(user,callback){
				var token = '';
				buf = crypto.randomBytes(48);
				token = buf.toString('hex');
				queryString = 'SELECT * FROM users WHERE auth_token=\'' + token + '\'';
				connection.query(queryString, function(err,rows){
					if(err){
						callback(err,null);
					}else{
						if(rows.length > 0){
							// means there was a duplicate token already in the db, despite the odds against that
							callback('problem with token try again',err);
						}
						callback(null,token,user);
					}
				});
			},

			// insert token into database & return data to client
			function(token,user,callback){
				currTimestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
				id = user.id;
				queryString = 'UPDATE users SET auth_token=\'' + token + '\',auth_token_created=\'' + currTimestamp + '\' WHERE id=' + id;
				connection.query(queryString, function(err, rows) {
					if(err){
						callback(err,null);
					}else{
						user.auth_token = token; // update the token
						user.auth_token_created = currTimestamp;
						var data = {
							user: user, 
							token: token
						};
						callback(null,data);
					}
				});
			}
		], 

		// handle communication with client
		function (err, result){
			if(err){
				res.status(500).send(err);
			}else{
				res.status(200).send(result);
			}
		});
	});


router.route('/signup')

	.post(
		function(req,res){
		async.waterfall([

			// check params, and check to see if account already exists
			function(callback){
				email = req.body.email;
				password = req.body.password;
				post = req.body;
				if(email == '' || password == ''){
					res.status(500).send('credentials not received');
				}

				queryString = 'SELECT * FROM users WHERE email=\'' + email + '\'';
				connection.query(queryString, function(err, rows) {
					if(err){
						callback(err,null);
					}else{
						if(rows.length > 0){
							callback('userExists',null);
						}else{
							callback(null,post);
						}
					}
				});
			},

			// create new account
			function(post,callback){
				email = post.email;
				password = post.password;
				firstname = post.firstname;
				lastname = post.lastname;

				queryString = 'INSERT INTO users (email,password,first_name,last_name) VALUES (\''+email+'\',\''+password+'\',\''+firstname+'\',\''+lastname+'\')';
				connection.query(queryString,function(err,result){
					if(err){
						callback(err,null);
					}else{
						id = result.insertId;
						callback(null,id);
					}
				});
			},

			// create token, insert into database
			function(id,callback){
				var token = '';
				buf = crypto.randomBytes(48);
				token = buf.toString('hex');
				queryString = 'SELECT * FROM users WHERE auth_token=\'' + token + '\'';
				connection.query(queryString, function(err,rows){
					if(err){
						callback(err,null);
					}else{
						if(rows.length > 0){
							// means there was a duplicate token already in the db, despite the odds against that
							callback('problem with token try again',null);
						}else{
							callback(null,token,id);
						}
					}
				});
			},

			// insert token into database
			function(token,id,callback){
				currTimestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
				queryString = 'UPDATE users SET auth_token=\'' + token + '\',auth_token_created=\'' + currTimestamp + '\' WHERE id=' + id;
				connection.query(queryString, function(err, result) {
					if(err){
						callback(err,null);
					}else{
						callback(null,id);
					}
				});
			},

			// return token & user record (get user record first)
			function(id,callback){
				queryString = 'SELECT * FROM users WHERE id=' + id;
				connection.query(queryString, function(err, rows) {
					if(err){
						callback(err,null);
					}
					if(rows.length == 1){
						var data = {
							user: rows, 
							token: rows.auth_token
						};
						callback(null,data);
					}else{
						callback('multipleUsersFound',null);
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