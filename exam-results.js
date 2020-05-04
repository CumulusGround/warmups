console.log("yo Jo");

// Exam Results
// A group of students sitting exams every quarter score the following results throughout the year:

var exam_results = {
  Greg: {
    Biology: [90, 75, 23, 60],
    Maths: [100, 80, 30, 45]
  },
  Sarah: {
    Biology: [70, 65, 80, 95],
    Maths: [80, 77, 64, 90]
  },
  Thomas: {
    Biology: [40, 60, 75, 98],
    Maths: [36, 50, 67, 82]
  }
}
// Write the code to find:

// How much Greg scored in their first Biology exam.
console.log(exam_results.Greg.Biology[0]);

// How much Sarah scored in their last Maths exam.
console.log(exam_results.Sarah.Maths[exam_results.Sarah.Maths.length-1]);

// The highest score Thomas achieved in Maths throughout the year.
var sorted = exam_results.Thomas.Maths.sort()
console.log(sorted);
console.log(exam_results.Thomas.Maths[exam_results.Thomas.Maths.length-1]);

var thomasMathHigh = Math.max(...exam_results.Thomas.Maths)
console.log(thomasMathHigh);



console.log("-------------------------");

// The quarter that Greg achieved his lowest score in Biology in the year.
console.log(exam_results.Greg.Biology.indexOf(23) + 1)

var gregBioLow = Math.min(...exam_results.Greg.Biology)
console.log(exam_results.Greg.Biology.indexOf(gregBioLow) + 1)



// Extension:
// The average of Sarah's scores in Maths for the whole year.

var sarahMath = exam_results.Sarah.Maths
var sarahSum = sarahMath.reduce(function(total,sum) {
    return total + sum
})
// console.log(sarahSum / sarahMath.length);

// var sarahSum = sarahMath.reduce(function(total,sum) {
//     return total += sum
// })