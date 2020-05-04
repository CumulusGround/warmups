// console.log('whar');

// You are a sheep farmer, and are plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the end of the queue/array: [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep] (YOU ARE HERE AT THE FRONT OF THE QUEUE)

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.
var sheepHerd = ['sheep', 'sheep', 'wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']

var whereIsWolf = sheepHerd.indexOf('wolf');
var sheepCounting = [];


if (whereIsWolf === sheepHerd.length - 1) {
    console.log('Oi Wolf!! Pls go away and stop eating my sheep');
} else {
    sheepCounting = sheepHerd.slice(whereIsWolf);
    sheepToBeEaten = sheepCounting.length -1;
    console.log(`Oi!! sheep number ${sheepToBeEaten}! You are about to be eaten by a wolf!`);
}*  
