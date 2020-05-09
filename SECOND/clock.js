console.log("clocks");
// Clocks!!!!
// cue Coldplay
// Step 1 - Get time
// Use the correct JavaScript function to get the current time and display in digital form showing hours, minutes and seconds e.g. 09:15:27.

// Step 2 - Update time
// Try using setInterval function to keep getting the time every second (so that you can show time updating every second on your web page)

clockDisplay = document.querySelector('.clock');


const time = () => {
    const today = new Date();
    return `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`
}    

// run time or second plus one
setInterval(()=>{
    console.log(time()); 
    clockDisplay.textContent = time();
},1000)

