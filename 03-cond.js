console.log("go");
// Air Conditioning
// Ask the user what the current temperature is, 
// if the A/C is functional, and what temperature they wish it was.
let currentTemp = Number(prompt("What Temperature is it?"));
let acOn = confirm("Is the AC working?");
let userTemp = Number(prompt("What Temperature would you like the rooom to be at?")) ;

// If the airconditioner is non-functional and the current temperature is above the the desired temperature... 
// If the airconditioner is non-functional and the current temperature is below the the desired temperature... 
if (acOn === false && currentTemp > userTemp) {
    console.log("Fix the A/C now! It's hot!");
} else if(acOn == false && currentTemp < userTemp) {
    console.log("Fix the A/C whenever you have the chance... It's cool...");
}
//AC On & current temperature > the the desired temperature... 
else if (acOn == true && currentTemp > userTemp) {
    console.log("Turn on the A/C Please");
} else {
 console.log("Dont Worry");
};



// Melbourne Suburbs
// Create a program that asks what suburbs you live in.
// Depending on the answer, print an appropriate response of your choosing
let suburb = prompt("What suburb do you live in?");
console.log(suburb);