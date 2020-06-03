// function romanize(num) {
//   var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
//   var roman = '';
//   var i;
//   for ( i in lookup ) {
//     while ( num >= lookup[i] ) {
//       roman += i;
//       num -= lookup[i];
//     }
//   console.log(num);
//   }
//   return roman;
// }


// // console.log(romanize(1001));
// console.log(romanize(555));
console.log("1000".match(/(\d)(\d)(\d)(\d)/));
