module.exports = function(nodemailer,smtpTransport){

	// https://github.com/andris9/Nodemailer
	// https://github.com/andris9/nodemailer-smtp-transport#usage
	// https://github.com/andris9/nodemailer-smtp-pool
	// https://github.com/andris9/nodemailer-dkim

	return nodemailer.createTransport(smtpTransport({
	    host: 'smtp.mandrillapp.com',
	    port: 25, // or 587
	    auth: {
	        user: 'matteckman@gmail.com',
	        pass: 'xp5Yuhfe1AhoM3XbYR7qiQ'
	    }
	}));

};