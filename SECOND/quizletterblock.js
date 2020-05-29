// Quiz Letter blocks
// Language: Javascript or Ruby
// You are given a collection of ABC blocks. Just like the ones you had when you were a kid. There are 19 blocks with two letters on each block. You are guaranteed to have a complete alphabet amongst all sides of the blocks. The sample blocks are:




// find all the blocks with a given letter
// index of? or return the blocks itself?
function canMakeWord(word) {
      const blocks = [
        ['B','O'],
        ['X','K'],
        ['D','Q'],
        ['C','P'],
        ['N','A'],
        ['G','T'],
        ['R','E'],
        ['T','G'],
        ['Q','D'],
        ['F','S'],
        ['J','W'],
        ['H','U'],
        ['V','I'],
        ['A','N'],
        ['E','R'],
        ['F','S'],
        ['L','Y'],
        ['P','C'],
        ['Z','M']
      ]
  
      if (!word) {
        return "Cannot be empty"
      } else if (word.length === 1) {
        return blocks.flat().includes(word)  
      } else {
        splitWord = word.split('')
        console.log(splitWord);
        calcArray = []

        splitWord.forEach(letter => {
          // give me all the indexes in wich it appears
          blocks.forEach((block, idx) => {
            // is the letter in here?
            // if yes
            if (block.includes(letter)) {
              calcArray.push(idx)
            }
          })
        })
        // console.log(calcArray);
        let multiCounter = {}
        calcArray.forEach(number => {
          if (multiCounter[number]) {
            multiCounter[number] += 1
          } else {
            multiCounter[number] = 1
          }
        })
        //if three numbers are the same return false
        // console.log(multiCounter);
        let counterKeys = Object.keys(multiCounter)
        // console.log(counterKeys);

        let isPossible = true
        counterKeys.forEach(key => {
          // console.log(multiCounter[key] > 2);
          if (multiCounter[key] > 2) {
            isPossible = false
          }
        })
        return isPossible
      }     
}


//END VALUE IS A BOOLEAN

// If you test these words, these results will happen:
console.log(canMakeWord()); 
console.log(canMakeWord("A")); 
// // # => true
console.log(canMakeWord("BARK")); 
// // # => true
console.log(canMakeWord("BOOK")); 
// // # => false
console.log(canMakeWord("TREAT")); 
// // // # => true
console.log(canMakeWord("COMMON")); 
// // // # => false
console.log(canMakeWord("SQUAD")); 
// // # => true
console.log(canMakeWord("CONFUSE")); 
// // # => true
console.log(canMakeWord("BOUGHT")); 
// # => false
// Write the canMakeWord function to output the results above.