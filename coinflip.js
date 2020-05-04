console.log('good day sunshine');

// The Ultimate Life Decider
// Never make a decision again!

// Create a file called decider.js.
// Write a function called coinFlip that will output HEADS or TAILS when called. It should decide between HEADS and TAILS randomly.
var headsTotal = 0;
var tailsTotal = 0;
var coinFlipTotal = 0;

var coinFlip = function() {

    var flip = Math.random();

    if (flip >= 0.5) {
        headsTotal += 1;
        coinFlipTotal += 1;
        console.log('HEADS');
    } else {
        tailsTotal += 1;
        coinFlipTotal += 1;
        console.log('TAIL');
    }    
}

    // return console.log(`The winner is HEADS after ${coinFlipTotal} coin flipped returning ${headsTotal} HEADS & ${tailsTotal} TAILS.`);


// while (headsTotal === 5) {
//     coinFlip();
// }
// console.log(`The winner is HEADS after ${coinFlipTotal} coin flipped returning ${headsTotal} HEADS & ${tailsTotal} TAILS.`);




// coinFlip();
// coinFlip();
// coinFlip();







// Write a loop that keeps calling your coinFlip function until either HEADS occurs 5 times, or TAILS occurs 5 times. 
// At that point console.log the winner e.g. HEADS or TAILS. 
// Hint: You will need to keep a count of the number of times HEADS occurs and TAILS occurs.