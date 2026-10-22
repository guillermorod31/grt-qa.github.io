// Challenge 7: Find Odd Numbers
// Write a function that takes an array of numbers and returns a new array with only the odd numbers.
// Usage examples:
// console.log(findOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
// console.log(findOddNumbers([2, 4, 6, 8, 10])); // []

function findOddNumbers (listOfNumbers){
    const OddNumbers = [];
    for (let i = 0; i < listOfNumbers.length; i++) {
        if (listOfNumbers[i] % 2 != 0){
            OddNumbers.push(listOfNumbers[i]);
        }
    }
    return OddNumbers;
}

console.log(findOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(findOddNumbers([2, 4, 6, 8, 10])); // []