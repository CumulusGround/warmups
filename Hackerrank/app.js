console.log("hackerrank");

function countingValleys(n, s) {
  // you have to track how far away from sea level he is
    let altitudeFromSeaLevel = 0;
    let steppedTrack = s.split('')
    let nValleys = 0;

    // if (he goes up) +1 else -1
    steppedTrack.forEach(step => {
        // if step is a 'D' && he's at sea level
        if (step === "D" && altitudeFromSeaLevel === 0) {
            //mark that down
            nValleys += 1;
        }

        step === 'U' ? altitudeFromSeaLevel += 1 : altitudeFromSeaLevel -= 1;
        console.log(altitudeFromSeaLevel);
    });
    return nValleys
}

// console.log(countingValleys(8, 'UDDDUDUU'));
// console.log(countingValleys(8, 'UDDDUDUUUU'));
// console.log(countingValleys(8, 'UDDDUDUUDD'));
// console.log(countingValleys(8, 'DDUUDDUDUUUD'));


function jumpingOnClouds(c) {
    let nJumps = 0;
  
    // if (next jump is lightin) {
    for (let i = 0; i < c.length - 1; i) {
        // console.log(i);
        if (c[i+2]) {
            nJumps ++
            i += 1  
        } else {
            nJumps ++
            i += 2
        }
        // console.log("jump so far" + nJumps);
    }
    // minimun amount of jump as an integer
    return nJumps;

}

console.log(jumpingOnClouds([0,0,1,0,0,1,0])); //4
console.log("--------");
console.log(jumpingOnClouds([0,0,0,0,1,0])); //3