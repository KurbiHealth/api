// https://github.com/felixge/node-mysql/

module.exports = function(mysql){

	return mysql.createConnection({
	  host: '10.132.28.129',
	  user: 'api1user',
	  database: 'kurbiapi',
	  password : 'XItU39tWhl8D',
	//  port: 8889
	//  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
	});

};