// https://github.com/felixge/node-mysql/

module.exports = function(mysql){

	return mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	  database: 'kurbiapi',
	  password : 'root',
	  port: 8889,
	  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
	});

};