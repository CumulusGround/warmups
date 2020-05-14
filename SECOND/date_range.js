// console.log("date range");

// Date Ranges
// Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

// The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

// Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

// Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

// If the range ends in the same month that it begins, do not display the ending year or month.

// Examples:

// makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

// makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].

//input
const today = new Date();
let startDate = new Date("2020-07-01")//.toDateString();
// let startDateArray = startDate.split(' ')

// /////// make it pretty
// // remove weekday
// startDateArray.shift()

// // Check if same than current year and remove if needed
// if (Number(startDateArray[startDateArray.length - 1]) === today.getFullYear()) {
//     startDateArray.pop()
// }

// console.log(startDateArray);
// let displayDate = '';



var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(new Intl.DateTimeFormat('en-US', options).format(startDate));


// // to test
// const date = new Date(2009, 10, 10);  // 2009-11-10
// const month = date.toLocaleString('default', { month: 'long' });
// console.log(month);