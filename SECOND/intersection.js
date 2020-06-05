// Intersection
// Please complete this warmup in JavaScript without the use of any libraries.
// You are given three arrays, write a function threeWayIntersection which only returns the common elements in all three arrays. For example:

// threeWayIntersection([1,3,4,6], [2,3,4,7], [3,4,7,8,9]) // => [3,4]

function threeWayIntersection(arr1,arr2,arr3) {
  
  let commons = arr1.filter(num => arr2.includes(num))
  .filter(num => arr3.includes(num))

  return commons
  // return commons.length ? commons : "No common elements"
}

console.log(threeWayIntersection([1,3,4,6], [2,3,4,7], [3,4,7,8,9]));
// => [3,4]
console.log(threeWayIntersection([1,6], [2,7], [7,8,9]));