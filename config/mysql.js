module.exports = function(mysql,ENV){
// https://github.com/felixge/node-mysql/

	if(ENV == 'prod'){

		return mysql.createConnection({
		  host: 			'',
		  user: 			'',
		  password : 		'',
		  database: 		''
		});

	}else if(ENV == 'dev'){

		return mysql.createConnection({
		  host: 		'localhost',
		  user: 		'',
		  password : 	'',
		  database: 	'',
		  port: 		8889,
		  socketPath: 	''
		});

	}else if(ENV == 'test'){

		return mysql.createConnection({
		  host: 			'',
		  user: 			'',
		  password : 		'',
		  database: 		''
		});

	}else if(ENV == 'remotetest'){

		return mysql.createConnection({
		  host: 			'',
		  user: 			'',
		  password : 		'',
		  database: 		''
		});

	}else{

		// default to returning PROD values if nothing else is defined
		return mysql.createConnection({
		  host: 			'',
		  user: 			'',
		  password : 		'',
		  database: 		''
		});

	}

};