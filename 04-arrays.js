// console.log("aye");

// 1. Create an array of the days of the week
// Create a variable named days_of_the_week as an array of the following:
// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday

var days_of_the_week = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ');

// 2. My calendar says the first day is Sunday...
// Remove Sunday from the last postion and move it to the first position. Use array methods.

days_of_the_week.unshift(days_of_the_week.pop())
console.log(days_of_the_week);

// 3. Create a new array of the days of the week:
// The first inner array should be the weekdays
// The second inner array should be the weekend days

// var workdays = days_of_the_week.slice(1,6)
var weekdays = [
    days_of_the_week.slice(1,6),
    // [days_of_the_week[days_of_the_week.length-1], days_of_the_week[0]]
    // [days_of_the_week.shift(), days_of_the_week.pop()]
]
// .split(' ').push()

// console.log(workdays);
console.log(weekdays);
console.log(days_of_the_week);

// var weekdays = [
//     ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     ['Saturday', 'Sunday']
// ]

// 4. Remove either the weekdays or the weekends
// Your choice...
// var weekend = weekdays.pop();
// console.log(weekend);
// console.log(weekdays);
// // 5. Sort the remaining days alphabetically
// weekdays[0].sort();
// console.log(weekdays);