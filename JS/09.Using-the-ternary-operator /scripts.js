/*Using the ternary operator create a condition who checks if today is Tuesday
--------------------------------------------------------------------------------*/
// The getDay() method is used to get the day of the week of a given date according to local time. The value returned by getDay() method is an integer corresponding to the day of the week: 
// 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday.

var currentDate = new Date;
today = currentDate.getDay();
today == 2 ? "Tuesday" : today;


console.log(today)// output: "Tuesday", if it's Tuesday, otherwise the current day as an integer.
