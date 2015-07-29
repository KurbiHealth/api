module.exports = function(mysql,ENV){
// https://github.com/felixge/node-mysql/

	if(ENV == 'prod'){

		return mysql.createConnection({
		  host: 			'10.132.28.129',
		  user: 			'api1user',
		  password : 		'XItU39tWhl8D',
		  database: 		'kurbiapi',
		  timezone: 		'-600'
		});

	}else if(ENV == 'dev'){

		return mysql.createConnection({
		  host: 		'localhost',
		  user: 		'root',
		  password : 	'root',
		  database: 	'kurbitestapi',
		  port: 		8889,
		  socketPath: 	'/Applications/MAMP/tmp/mysql/mysql.sock',
		  datestring: 	true,
		  timezone: 	'cst'
		});

	}else if(ENV == 'test'){

		return mysql.createConnection({
		  host: 			'10.132.28.129',
		  user: 			'api1user',
		  password : 		'XItU39tWhl8D',
		  database: 		'kurbitestapi',
		  timezone: 		'600'
		});

	}else{

		// default to returning PROD values if nothing else is defined
		return mysql.createConnection({
		  host: 			'10.132.28.129',
		  user: 			'api1user',
		  password : 		'XItU39tWhl8D',
		  database: 		'kurbiapi',
		  timezone: 		'-600'
		});

	}

};