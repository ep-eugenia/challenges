/*Strictly Increasing or Decreasing
Create a function that takes an array and determines whether it's strictly increasing, strictly decreasing, or neither.
Examples:
- check([1, 2, 3]) ➞ "increasing"
- check([3, 2, 1]) ➞ "decreasing"
- check([1, 2, 1]) ➞ "neither"
- check([1, 1, 2]) ➞ "neither"
Notes:
The last example does NOT count as strictly increasing, since 1-indexed 1 is not strictly greater than the 0-indexed 1.
Input arrays have a minimum length of 2.
--------------------------------------------------------------------------------------------------------------------*/
//input: arry [1, 2, 3]
/*function check(arr) {
  for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1] && arr[i] > arr[i + 1]) {
          return "decreasing";
      } else if((arr[i] > arr[i-1])  && arr[i] < arr[i+1]){
          return "increasing";
      } 
        else {
          return "neither";
    }
   }
  }

console.log(check([1, 2, 3])); //output: "increasing" */

//input: array [3, 2, 1]
/*function check(arr) {
  for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1] && arr[i] > arr[i + 1]) {
          return "decreasing";
      } else if((arr[i] > arr[i-1])  && arr[i] < arr[i+1]){
          return "increasing";
      } 
        else {
          return "neither";
    }
   }
  }

console.log(check([3, 2, 1])); //output: "decreasing" */

//input: arry [1, 2, 1]
/*function check(arr) {
  for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1] && arr[i] > arr[i + 1]) {
          return "decreasing";
      } else if((arr[i] > arr[i-1])  && arr[i] < arr[i+1]){
          return "increasing";
      } 
        else {
          return "neither";
    }
   }
  }

console.log(check([1, 2, 1])); //output: "neither" */

//input: arry [1, 1, 2]
function check(arr) {
  for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1] && arr[i] > arr[i + 1]) {
          return "decreasing";
      } else if((arr[i] > arr[i-1])  && arr[i] < arr[i+1]){
          return "increasing";
      } 
        else {
          return "neither";
    }
   }
  }

console.log(check([1, 1, 2])); //output: "neither" 