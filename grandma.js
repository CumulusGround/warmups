// console.log("yup");

// Grandma
// Write a Deaf Grandma program.

// Whatever you say to grandma (whatever you type in), she should respond with

// HUH?! SPEAK UP, SONNY!

// unless you shout it (type in all capitals).

// If you shout, she can hear you (or at least she thinks so) and yells back

// NO, NOT SINCE 1938!

// To make your program really believable, have grandma shout a different year each time; maybe any year at random between 1930 and 1950.

// You can't stop talking to grandma until you shout BYE.

var heyGrandma = function(meCall) {
    
    if (meCall === "BYE") {
        return console.log("You have left");

    } else if (meCall !== meCall.toUpperCase()) {
        console.log('HUH?! SPEAK UP, SONNY!');

    } else if (meCall === meCall.toUpperCase()){
        var high = 50
        var low = 30
        var year = Math.round(Math.random()*(high - low))+low
        console.log(`NO, NOT SINCE 19${year}!`);
    }
}

heyGrandma("How are you today?");
heyGrandma("YOU ARE MAD");
heyGrandma("bye");
heyGrandma("BYE");