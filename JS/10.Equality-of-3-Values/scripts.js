/*Equality of 3 Values
Create a function that takes three integer arguments (a, b, c) and returns the amount of integers which are of equal value.
Notes:
Your function must return 0, 2 or 3.
--------------------------------------------------------------------------------------------------------------------*/
//input: three integer arguments (a, b, c): 3, 4, 3
/*function equal(a, b, c) {
	let output = 0;
		if (a == b && b == c){
			output= 3;  // all numbers the same
		}
		else if (a != b && a != c && b != c) {
			output= 0; // all numbers diffrent
		}
		else {
			output= 2; // two numbers out of three are the same
		}
	return output;
	};
	console.log(equal(3, 4, 3)); // output: 2*/
	

	//input: three integer arguments (a, b, c): 1, 1, 1
	/*function equal(a, b, c) {
		let output = 0;
			if (a == b && b == c){
				output= 3;  // all numbers the same
			}
			else if (a != b && a != c && b != c) {
				output= 0; // all numbers diffrent
			}
			else {
				output= 2; // two numbers out of three are the same
			}
		return output;
		};
		console.log(equal(1, 1, 1)); // output: 3*/


		//input: three integer arguments (a, b, c): 3, 4, 1
	function equal(a, b, c) {
		let output = 0;
			if (a == b && b == c){
				output= 3;  // all numbers the same
			}
			else if (a != b && a != c && b != c) {
				output= 0; // all numbers diffrent
			}
			else {
				output= 2; // two numbers out of three are the same
			}
		return output;
		};
		console.log(equal(3, 4, 1)); // output: 0
