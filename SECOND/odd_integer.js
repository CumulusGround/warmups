console.log("odd integer");

// The Odd Integer Warmup
// You have an array of integers. Find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// For Example: [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], answer is 5 since it is the only number that appears an odd number of times

let intArray = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

// count how many time a given number is in the array
function whichNumIsOdd(intArray) {

    let allCounters= {}
    
    intArray.forEach(num => {
    
        if (allCounters[num]) {
            allCounters[num] += 1
        } else {
            allCounters[num] = 1
        }
    })
    // console.log(allCounters);
    
    for (const key in allCounters) {
        if (allCounters[key] % 2 == 1) {
            return key;
        }
    }
}

console.log(whichNumIsOdd(intArray)); 
