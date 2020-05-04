console.log("go");

// Print out all the leap years in the last 100 years.
var date = new Date ()
var currentYear = date.getFullYear()

// console.log(new Date());
// console.log((currentYear) & 3);


for (let i = currentYear - 200; i <= 2020; i++) {
    if (i % 4 === 0 || i % 100 === 0 && i % 400 === 0) {
            console.log(i);  
    }
}

                            // for (let i = currentYear; i >= currentYear-100; i-=4 ) {
                            //     console.log(i);
                            // }

////////////////////////////////////////////////////
// For numbers between 1 and 200:
// for (let i = 1; i <= 200; i++) {
//     // a) print out multiples of 7.
//     // b) every second even number
//     if (i % 7 === 0) {
//         console.log(i);
//     } else if (i % 4 === 3) {
//         console.log(i);
//     }
// }
//////////////////////////////////