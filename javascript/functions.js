var isArmstrong = function(arms){
	"use strict"; 
	var digit;
	//convert to String
	arms = String(arms);
	var sum = 0;
	for(var i = 0; i < arms.length; ++i){
		digit = arms[i];
		sum = sum + Math.pow(digit, arms.length);}
		if(sum == arms){
			return true
		} 
		else {
			return false
	}
}; 

var AllArmstrongs = function() {
	"use strict";
	for(var k = 1;
		k <=99999;
		++k)
	if(isArmstrong(k))
		console.log(k)
};

var AllSubstrings1 = function(string){
	"use strict";
	String(string);
	var theArray = []
	for (var i = 0; i < string.length; ++i) {
		for (var j = i+1; j <= string.length; ++j) {
			var result = string.substring(i,j);
			theArray.push(result)
			};
		};
		return theArray.toString();
	};



var AllSubstrings2 = function(string){
	"use strict";
	String(string);
	var theArray = []
	for (var i = 0; i < string.length; ++i) {
		for (var j = i+1; j <= string.length; ++j) {
			var result = string.substring(i,j);
			theArray.push(result);
			}
		}
		return theArray
	};


var MaxWord = function(sent){
	"use strict";
	var words = sent.split(" ");
	var maxSoFar = words[0];
	for(var i = 0; i < words.length; ++i){
		if(maxSoFar.length < words[i].length){
			maxSoFar = words[i]
		}
	}
	return maxSoFar
};


