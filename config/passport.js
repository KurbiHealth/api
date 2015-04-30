/* This will call the code in the strategy, where one of three conditions can 
happen:

1) An internal error occurred trying to fetch the users' information (say the 
database connection is gone); this error would be passed on: next(err); this 
will be handled by Express and generate an HTTP 500 response;

2) The provided credentials are invalid (there is no user with the supplied e-mail 
address, or the password is a mismatch); in that case, you don't generate an 
error, but you pass a false as the user object: next(null, false); this will 
trigger the failureRedirect (if you don't define one, a HTTP 401 Unauthorized 
response will be generated);

3) Everything checks out, you have a valid user object, so you pass it along: 
next(null, user); this will trigger the successRedirect;
*/

module.exports = function(passport,TokenStrategy,connection){

	passport.use(new TokenStrategy(
	{
		usernameHeader: 'x-custom-username',
		tokenHeader:    'x-custom-token',        
		usernameField:  'custom-username',
		tokenField:     'custom-token'
	},
    function (username, token, done) {
			if(username == 'kurbidev'){
				if(token == '71892c62b9d4e70e31146f092c38a039456369b1fb10ff157f8d755'){
					user = {id: 1,first_name: 'Kurbi',last_name:'Dev'};
					return done(null,user);
				}else{
					return done(null,false);
				}
			}else{
				// use username (email) and token to pull from users table
				connection.query(
					'SELECT * FROM users WHERE email=\'' + username + '\' AND auth_token=\'' + token + '\'', 
					function(err, rows, fields) {
						if (err){
							console.log(err);
	                        return done(err,false);
						}

						// return done([error(obj or null)],[user(false or object)],[message])
				    	// return values are sent to kurbiAuthenticate()
						if(rows.length == 0){
							return done(null,false);
						}else{
							user = rows[0];
							return done(null,user);
						}
					}
				);
			}
	    }
	));

};