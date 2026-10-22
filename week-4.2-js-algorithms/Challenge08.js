// Challenge 8: Find the Most Frequent Element
// Write a function that finds the most frequent element in an listay.
// Usage examples:
// console.log(findMostFrequentElement([1, 2, 3, 2, 4, 2])); // 2
// console.log(findMostFrequentElement(["a", "b", "c", "b", "b"])); // "b"
// console.log(findMostFrequentElement([5, 5, 5, 6, 6, 7])); // 5


function findMostFrequentElement(list){
  const counts = {}; //object to count how many times appears an element
  let mostFrequentElement = list[0];
  let maxCount = 0;

  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    counts[element] = (counts[element] || 0) + 1; // Increment count or initialize to 1

    if (counts[element] > maxCount) {
      maxCount = counts[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

console.log(findMostFrequentElement([1, 2, 3, 2, 4, 2, 3])); // 2
console.log(findMostFrequentElement(["a", "b", "c", "b", "b"])); // "b"
console.log(findMostFrequentElement([5, 5, 5, 6, 6, 7])); // 5