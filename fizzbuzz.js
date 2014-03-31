
exports.Results = function(){

var output = "", mod3, mod5
for (var i=0;i<=100; i++){

	mod3 = (i%3)==0;
	mod5 = (i%5)==0;

	if (mod3){
		output+="Fizz";
	}

	if(mod5){
		output+="Buzz"
	}

	if (!(mod3||mod5)){
	output += i; 
	}

	output +="\n";
}

return output;
}