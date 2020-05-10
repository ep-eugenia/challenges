/* Return the Remainder from two numbers
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
Notes:
•	The tests only use positive and negative integers.
•	Don't forget to return the result.
--------------------------------------------------------------------------------------------------------------------*/

// input: num1:1, num2:3
function remainder(num1,num2,) {
  let result = num1 % num2;
  //return result;
  console.log(result); //output: 1
}
//remainder(1,3);

// input: num1:-9, num2:45
function remainder(num1,num2,) {
  let result = num1 % num2;
  //return result;
  console.log(result); // output: -9
}
//remainder(-9,45);

// input: num1:5, num2:5
function remainder(num1,num2,) {
  let result = num1 % num2;
  //return result;
  console.log(result); // output: 0
}
remainder(5,5);


  