var nodemailer = require("nodemailer");

// We're going to use a Pickup directory, if you really want emails sent, change this transport
var smtpTransport = nodemailer.createTransport("PICKUP", {
	directory: "."
	});

var mailOptions = {
	from: "sgd@thinksafely.org",
	subject: "FizzBuzz sent to you"

}

exports.SendIt = function (to, message){
	mailOptions.to = to;
	mailOptions.text = message;

	smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent");
    }

    smtpTransport.close(); // shut down the connection pool, no more messages
	});
}