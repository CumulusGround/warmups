// console.log('Hello');

// You buy the following at the supermarket:

// Salmon tins
// Ice-cream
// Frozen berries
// Pasta
// Tomatoes
// Spinach
// Toilet paper
// Store the list of items in an appropriate data type.
// Write code to display the last 3 items you bought.
// Your kid asks you whether you bought any chocolate. Write code to check your list of items to see if you have any chocolate, and if you do, tell them "yes, if you do all your chores". Otherwise tell them "no, it will rot your teeth".

var shopList = [
        'Salmon tins',
        'Ice-cream',
        'Frozen berries',
        'Pasta',
        'Tomatoes',
        'Spinach',
        'Toilet paper'
]

console.log(shopList.slice(shopList.length - 3));

if (shopList.indexOf('chocolate') === -1) {
    console.log('No, it will rot your teeth');
} else {
console.log('No, it will rot your teeth');
}
