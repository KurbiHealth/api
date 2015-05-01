
// BASE SETUP
// ====================
var express			= require('express'); 
var bodyParser 		= require('body-parser');
var mysql			= require('mysql');
var passport 		= require('passport'),
	TokenStrategy 	= require('passport-token').Strategy;
var crypto 			= require('crypto');
var async 			= require('async');
var nodemailer 		= require('nodemailer'),
	smtpTransport 	= require('nodemailer-smtp-transport');


// MAIN API VARIABLE
// ====================
var kurbiapi	= express();


// ERROR HANDLING
// ====================
kurbiapi.on('uncaughtException', function (req, res, route, err) {
    console.log('uncaughtException', err.stack);
});


// CONFIGURATION
// ====================
var connection 	= require('./config/mysql.js')(mysql);
require('./config/passport.js')(passport,TokenStrategy,connection);
var emlTransporter = require('./config/nodemailer.js')(nodemailer,smtpTransport);
var port = process.env.PORT || 8080;        // set our port

// bodyParser() will let us get the data from a POST
kurbiapi.use(bodyParser.urlencoded({ extended: true }));
kurbiapi.use(bodyParser.json());
// passport initializing, can pass values if needed
kurbiapi.use(passport.initialize());


// ROUTES SETUP
// Doing basic roles-based content filtering here, as well as doing basic versioning; api_v1 is technically a user's access to data, not an app's access to data
// ====================
var api_v1 = express.Router();
require('./routes/v1routes.js')(api_v1,connection,crypto,passport,async,emlTransporter);

var devapi = express.Router();
require('./routes/devroutes.js')(devapi,connection,passport,async);


// ROUTES REGISTERED
// ====================
// all of the v1 routes will be prefixed with /api (add another registration for each version)
kurbiapi.use('/v1', api_v1);
// for using dev functionality
kurbiapi.use('/dev/',devapi);


// START THE SERVER
// ====================
var http = require('http');
http.createServer(kurbiapi).listen(8080, '10.132.28.149');
//kurbiapi.listen(port);
console.log('Magic now happens on port ' + port);