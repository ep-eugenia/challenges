/*Is the Number Even or Odd?
Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
--------------------------------------------------------------------------------------------------------------------*/
//input: num:3 - an odd number
/*function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(isEvenOrOdd(3)); //output : "odd" */

//input: num:146 - an even number
function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(isEvenOrOdd(146)); //output : "even"
