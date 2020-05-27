// Say it in English
// Write a program that will take a number from 0 to 99 and spell out that number in English. Please avoid using any gems to help you with this, you must write the algorithm yourself.

// For example, if the input to the program is 22, then the output should be 'twenty-two'

// e.g.

// Say.new(22).in_english
// Say.new(-1).in_english
// # say.rb:7:in 'in_english': Number must be between 0 and 99, inclusive. (ArgumentError)
// The program must also report any values that are out of range.

// Some good test cases for this program are:

// 0
// 14
// 50
// 98
// -1
// 100

class Say {
    constructor(number) {
        this.number = number
    }

    inEnglish() {
        var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
        var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

        let n = ('000000000' + this.number).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return;
        // if (n[4] != 0) {
        //     return console.log("error");
        // }
        var str = '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
        // return str;
        return n;
    }
}


console.log(new Say(2).inEnglish());
console.log(new Say(0).inEnglish());
console.log(new Say(14).inEnglish());
console.log(new Say(50).inEnglish());
console.log(new Say(98).inEnglish());
console.log(new Say(-1).inEnglish());
console.log(new Say(100).inEnglish());