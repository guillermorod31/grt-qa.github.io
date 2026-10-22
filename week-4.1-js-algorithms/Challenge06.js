// Challenge 6: Calculate Average
// Write a function that takes an array of numbers and returns the average.
// Usage examples:
// console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
// console.log(calculateAverage([10, 20, 30, 40, 50])); // 30

function calculateAverage (listOfNumbers){
    let sum = 0;
    for (let i = 0; i < listOfNumbers.length; i++) {
        sum += listOfNumbers[i];
    }
    return sum/listOfNumbers.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5])); // 3
console.log(calculateAverage([10, 20, 30, 40, 50])); // 30