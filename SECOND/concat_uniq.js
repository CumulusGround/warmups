let s1 = "xyaabbbccccdefww"
let s2 = "xxxxyyyyabklmopq"
// longest(s1, s2) => "abcdefklmopqwxy"

function longest(str1, str2) {
    let sortedConpleteStringArray = (str1 + str2).split('').sort()
    let uniqueArray = []

    sortedConpleteStringArray.forEach(letter => {
         if (!(uniqueArray.includes(letter))) {
             uniqueArray.push(letter)
            } 
    });

    return uniqueArray.join('')
}

console.log(longest(s1, s2));