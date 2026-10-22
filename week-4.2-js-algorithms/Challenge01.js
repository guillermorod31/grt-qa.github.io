// Challenge 1: Find the Second Largest Number
// Write a function to find the second largest number in the array.
// Usage examples:
// console.log(findSecondLargestNumber([1, 2, 3, 4, 5])); // 4
// console.log(findSecondLargestNumber([10, 20, 30, 40, 50])); // 40
// console.log(findSecondLargestNumber([-1, -2, -3, -4, -5])); // -2

// function findSecondLargestNumber(listOfNumbers) {
//   let largestNum = listOfNumbers[0];

//   for (let i = 0; i < listOfNumbers.length; i++) {
//     if (listOfNumbers[i] > largestNum) {
//       largestNum = listOfNumbers[i];
//     }
//   }

//   listOfNumbers.splice(listOfNumbers.indexOf(largestNum), 1);

//   largestNum = listOfNumbers[0];

//   for (let i = 0; i < listOfNumbers.length; i++) {
//     if (listOfNumbers[i] > largestNum) {
//       largestNum = listOfNumbers[i];
//     }
//   }

//   return largestNum;
// }

function findSecondLargestNumber(numbers) {
  if (numbers.length < 2) return null;
  // Make a copy to avoid modifying original array
  const nums = [...numbers];
  // Find largest
  let largest = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
    }
  }
  // Remove ALL occurrences of largest
  const filtered = nums.filter(n => n !== largest);
  if (filtered.length === 0) return null;
  // Find the next largest
  let secondLargest = filtered[0];
  for (let i = 1; i < filtered.length; i++) {
    if (filtered[i] > secondLargest) {
      secondLargest = filtered[i];
    }
  }
  return secondLargest;
}

console.log(findSecondLargestNumber([1, 4, 2, 3, 5, 4, 5])); // 4
console.log(findSecondLargestNumber([10, 20, 30, 40, 50])); // 40
console.log(findSecondLargestNumber([-1, -2, -3, -4, -5])); // -2
console.log(findSecondLargestNumber([-1, 2, -3, -4, -5])); // -1
