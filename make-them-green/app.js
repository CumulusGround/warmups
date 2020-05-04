
var divs = document.querySelectorAll('div');


var handleBackgroundColor = function (e) {
    console.log(e.target)
    e.target.classList.add('red');

    var isAllRed = document.querySelectorAll('.red').length;
    console.log(isAllRed);
    if (isAllRed === divs.length) {
        divs.forEach(function(div){
            div.style.backgroundColor = "green"
        });
    }
}

// var handleRest = function (e) {
//     if (condition) {
        
//     }
// }


divs.forEach(function(div) {
  
    div.addEventListener('click', handleBackgroundColor)
});
