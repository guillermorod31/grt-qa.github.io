// Challenge 3: Count positive and negative numbers in an array
// Write a function to count positive and negative numbers in an array
// Usage examples:
//let arr = [10,20, -1,22,99,20, -9];
// console.log(`The negative numbers in an array is ${negativeCount}`) //"The negative numbers in an array is 2"
// console.log(`The positive numbers in an array is ${positiveCount}`) // "The positive numbers in an array is 5"

function countNegativeAndPositive(arr) {
  let negativeCount = 0;
  let positiveCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveCount++;
    } else {
      negativeCount++;
    }
  }
  let result = 
  `The negative numbers in an array is ${negativeCount}
The positive numbers in an array is ${positiveCount}`

  return result;
}

console.log(countNegativeAndPositive([10, 20, -1, 22, 99, 20, -9]));
