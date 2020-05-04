console.log('object');

// Check for Palindromes
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// var palin = 'A car, a man, a maraca.';

// make it useful
var isPalindrome = function(palin) {
    
    var alphabet = 'qwertyuiopasdfghjklzxcvbnm';
    var palinArray = palin.toLowerCase().split('');
    var palinLetters = [];
    
    for (let i = 0; i < palinArray.length; i++) {
        
        if (alphabet.includes(palinArray[i])) {
            palinLetters.push(palinArray[i])
        }
    }
    
    var reverse = palinLetters.slice().reverse();
    
    console.log(palinLetters);
    console.log(reverse);

    if (palinLetters.join() === reverse.join()) { // YOU CANT NEVER COMPARE ARRAYS
        console.log(true);
        return true
    } else {
        console.log(false);
        return false
    }
}

isPalindrome('A ca, a maraca.');
isPalindrome('A man, a plan, a canal: Panama.');
// isPalindrome('A new order began, a more Roman age bred Rowena.');
// isPalindrome('Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!”');
// isPalindrome('A man, a plan, a cl: Panaa.');


    
// console.log(palinLetters === palinLetters.reverse());

// just keep the letter

//does array === array.revers
//if yes = palindrome