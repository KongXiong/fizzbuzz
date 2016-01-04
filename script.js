"use strict";

var number;
var i;

number = prompt("enter a number");

for (i=0; i<number; i++) {
	if (i % 3 === 0) {
		if(i % 5 ===0){
			console.log("FizzBuzz");
		}else {
		    console.log("Fizz");
		}
	}else if (i % 5 === 0) {
		console.log("Buzz");
	}else {
		console.log(i);
	}
}