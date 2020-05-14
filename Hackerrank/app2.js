//repeated strings

// Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

// Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

// For example, if the string  and , the substring we consider is , the first  characters of her infinite string. There are  occurrences of a in the substring.

// Function Description

// Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

// repeatedString has the following parameter(s):

// s: a string to repeat
// n: the number of characters to consider
// Input Format

// The first line contains a single string, .
// The second line contains an integer, .

function repeatedString(s, n) {


    //build a string long enough to test
    let seedString = s.split('')
    for (let i = 0; i < n; i++) {
        seedString.push(seedString[i]) 
    }

    //look at the first n characters
    //find the number of occurence of a
    let nOccurrence = 0;
    seedString.slice(0,n).forEach(letter => {
        if (letter === 'a') {
            nOccurrence ++;
        }
    });

    /////////////////////////
    // let nOccurrence = seedString.slice(0,n)
    //     .filter(letter => letter === 'a')
    //     .map(letter => letter = 1)
    //     .reduce((total, acc) => {
    //         return total + acc
    //     })

    // return INTEGER the number of occurence of the letter a
    return nOccurrence
}

console.log(repeatedString('aba', 7));
console.log(repeatedString('a', 10000000));
