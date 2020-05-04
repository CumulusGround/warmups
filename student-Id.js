// console.log('Hey');

// Write a function that takes a user's:
// name e.g. "bob"
// bio e.g. "I like to write code and stuff."
// secret e.g. "PURPLE"

// var name, bio, secret;
// name = 'Jerry';
// bio = 'I love coding and chocolate'
// secret = 'PURPLE';

var userId = function(name, bio, secret) {
    
    // count the number of words in the bio.
    var bioArray = bio.split(' ');
    var nWordBio = bioArray.length;
    // Multiply the number, by the number of letters in the user's name.
    // Concatenate the user's name and step 3 e.g. bob93
    var nameNNumber = name + (nWordBio * name.length);

    // Concatenate the middle letter of their secret and the letter's index number e.g. if secret is PURPLE, you can choose either R2 or P3 (since there are two middle letters in that secret).
    var middleOfSecret = (secret.length)/2; 

    var secretMiddleLetter =  secret.toUpperCase().slice(middleOfSecret,middleOfSecret+1);

    var secretCode = secretMiddleLetter+middleOfSecret
    // Output the concatenation of steps 4 and 5 e.g. bob93P3.

    return nameNNumber+secretCode
}

userId('Jerry', 'I love coding and chocolate', 'purple');
console.log(userId('Jerry', 'I love coding and chocolate', 'purple'));