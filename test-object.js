console.log("hey");

var obj = {
    arr1: [1,2,3],
    arr2: [4,5,6],
    arr3: [7,8,9],
}



var food = {
    veges: ['potato', 'spinach', 'carrot'],
    fruits: ['mango', 'apple', 'avocado']
  }
  

var foodLabels = Object.keys(food)
console.log(foodLabels);


foodLabels.forEach(function(label) {

    var foodForLabelInString = food[label].join(',')
     
    console.log(foodForLabelInString)
  })