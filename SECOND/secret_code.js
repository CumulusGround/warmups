console.log("Break The Code");
// can you break the secret code?
// Write a program to decode this message:

// NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG.

// This is a form of cryptography known as the Caesar Ciper. It has a shift parameter of 3.

// The alphabet is normally:

// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// The alphabet with the shift parameter of 3 is now as follows:

// DEFGHIJKLMNOPQRSTUVWXYZABC
// which means if the original message is HELLO. The encrypted message will be KHOOR

// H -> K
// E -> H
// L -> O
// L -> O
// O -> R
// decode the second secret message:
// ERQXV ILIWHHQ PLQXWHV EUHDN

function codeBreaker(string) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const shiftParam = -3

    return string
        .split('')
        .map(letter => {
        if (alphabet.indexOf(letter) === -1) {
            return letter
        } else {
            let newLetterIdx = (alphabet.indexOf(letter) + shiftParam) % 26
            newLetterIdx < 0 ? newLetterIdx += 26 : newLetterIdx;
            return alphabet[newLetterIdx]
        }
    })
        .join('')  
}

console.log(codeBreaker("KHOOR"));
console.log(codeBreaker("ABC"));
console.log(codeBreaker("NQRZOHGJH LV OLPLWHG. LPDJLQDWLRQ HQFLUFOHV WKH ZRUOG."));
console.log(codeBreaker("ERQXV ILIWHHQ PLQXWHV EUHDN"));