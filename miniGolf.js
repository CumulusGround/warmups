// console.log("object");

// Bob, Jimbo and Fish love mini golf. But, every time they hand in their score cards none of the scores are ever totalled. Write a function called totalScores in JS that calculates their scores and console.log the total for each player and their combined total.
// var bobCard = [3, 2, 6, 11, 9, 2, 6, 9, 10]
// var jimboCard = [5, 12, 9, 22, 13, 7, 16, 10, 11]
// var fishCard = [2, 2, 4, 5, 4, 3, 6, 4, 1]



var totalScores = function (card1,card2,card3) {
    
    var card1Total = 0;
    var card2Total = 0;
    var card3Total = 0;
        
        for (let i = 0; i < card1.length; i++) {
            card1Total += card1[i];
            card2Total += card2[i];
            card3Total += card3[i];
        }

    console.log(card1Total);
    console.log(card2Total);
    console.log(card3Total);
    console.log(`Your combined total is ${card1Total + card2Total + card3Total }`);
}

totalScores([3, 2, 6, 11, 9, 2, 6, 9, 10],[5, 12, 9, 22, 13, 7, 16, 10, 11],[2, 2, 4, 5, 4, 3, 6, 4, 1]);






///// SOLUTION  //////////
// var totalScores = function (card1,card2,card3) {
//     console.log(arguments.length);
//     var card1Total = null;
//     var card2Total = null;
//     var card3Total = null;
//         for (let i = 0; i < card1.length; i++) {
//             card1Total += card1[i];
//                 card2Total += card2[i];
//                 card3Total += card3[i];
//         }
        
//     console.log(card1Total);
//     console.log(card2Total);
//     console.log(card3Total);
//     console.log(`Your combined total is ${card1Total + card2Total + card3Total }`);
// }

// totalScores([3, 2, 6, 11, 9, 2, 6, 9, 10],[5, 12, 9, 22, 13, 7, 16, 10, 11],[2, 2, 4, 5, 4, 3, 6, 4, 1]);


// var player = [];    
// var totalScores = function (Pscore1,Pscore2,Pscore3) {
//      var play1 = []
//      var play2 = []
//      var play3 = []
//     play1.push(Pscore1);
//     play2.push(Pscore2);
//     play3.push(Pscore3);
// }


// Bob
// Hole 1 = 3
// Hole 2 = 2
// Hole 3 = 6
// Hole 4 = 11
// Hole 5 = 9
// Hole 6 = 2
// Hole 7 = 6
// Hole 8 = 9
// Hole 9 = 10
// Jimbo

// Hole 1 = 5
// Hole 2 = 12
// Hole 3 = 9
// Hole 4 = 22
// Hole 5 = 13
// Hole 6 = 7
// Hole 7 = 16
// Hole 8 = 10
// Hole 9 = 11
// Fish

// Hole 1 = 2
// Hole 2 = 2
// Hole 3 = 4
// Hole 4 = 5
// Hole 5 = 4
// Hole 6 = 3
// Hole 7 = 6
// Hole 8 = 4
// Hole 9 = 1