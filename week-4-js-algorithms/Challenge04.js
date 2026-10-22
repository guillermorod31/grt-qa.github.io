// Challenge 4: Find Numbers Greater than Ten
// Write a function to find all numbers that are larger than 10 in the array.
// Usage examples:



function findNumbersGreaterThanTen(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] > 10 ? result.push(numbers[i]) : numbers;   
    }  
    
    return result;
}


console.log(findNumbersGreaterThanTen([5, 10, 15, 20])); // [15, 20]
console.log(findNumbersGreaterThanTen([1, 2, 3, 4, 5])); // []
console.log(findNumbersGreaterThanTen([10, 20, 30, 40, 50])); // [20, 30, 40, 50]