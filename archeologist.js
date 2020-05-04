var nArray = 4
var nItems = 5

var mapArray = []
var arrayX = []
var lineArray = []

for (let index = 0; index < nItems; index++) {
    arrayX.push("A")
    lineArray.push("A")
}

randomIndex = Math.floor(Math.random()*nItems)
arrayX.splice(randomIndex, 1, "X")

randomRow = Math.floor(Math.random()*nArray)

for (let i = 0; i < nArray; i++) {
    if (i === randomRow) {
        mapArray.push(arrayX)
    } else {
        mapArray.push(lineArray)
    }
}

console.log(mapArray);