var AllSubstrings1 = function(string){
	"use strict";
	String(string);
	for (var i = 0; i < string.length; ++i) {
		for (var j = 1; j <= string.length; ++j) {
			var result = string.substring(i,j);
			console.log(result) + ",";
			};
		};
	};

