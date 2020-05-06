// console.log("treasures!!");

// It belongs in a museum!
// You are an adventuring archaeologist, and have found some treasure maps! There are too many to check individually, so write a function 'treasureFinder' that takes an array of arrays as an argument (see sample inputs below) and returns an array with the location of the treasure (X) as an array representing the X and Y coordinates, for example:

var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

var map2 = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","X","A","A","A"]
];
    
var map3 = [
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","V","A"],
    ["v","v","V","v","X"],
    ["A","V","A","A","A"]
];

var map4 = [
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","V","A"],
    ["v","v","V","v","A"],
    ["X","V","A","A","A"]
];

var treasureFinder = function(map) {
    coordonates = []
    
    map
        .filter((lat, idx) => {
            // lat.includes("X")
            if (lat.includes("X")) { 
                coordonates.push(idx) 
            }
        })

    coordonates.push(map[coordonates[0]].indexOf("X"))

    return coordonates
}


console.log(treasureFinder(map1)); 
console.log(treasureFinder(map2)); 
console.log(treasureFinder(map3)); 
console.log(treasureFinder(map4)); 
// find the array x

// find the vertical


// filter
// map
// reduce
// [x,y]