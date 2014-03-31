var readline = require("readline");

var fb = require("./fizzbuzz");
var em = require("./emailer");

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Where would you like the results emailed?", function (answer){

console.log ("Running FizzBuzz");
var results = fb.Results();

console.log(results);

console.log ("Emailing results to ", answer);
em.SendIt(answer, results);


rl.close();
});

