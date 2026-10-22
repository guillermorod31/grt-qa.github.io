// Challenge 2: Find the most frequent element in a given array
// Write a function to find the most frequent element in the array. If there are multiple elements that appear a maximum number of times, print the first of them
// Usage examples:
//let arr = [40, 50, 30, 40, 50, 20, 30, 100, 11, 11];

// let n = arr.length;
// console.log(mostFrequent(arr, n));; // 40

function mostFrequent(arr){
    const counts = {}; //object to count how many times appears an element
  let mostFrequentElement = arr[0];
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    counts[element] = (counts[element] || 0) + 1; // Increment count or initialize to 1

    if (counts[element] > maxCount) {
      maxCount = counts[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

console.log(mostFrequent([40, 50, 30, 40, 50, 20, 30, 100, 11, 11])); // 40