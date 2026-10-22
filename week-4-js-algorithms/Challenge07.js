// Challenge 7: Convert Numbers to Strings
// Write a function that converts all numbers to strings.
// Usage examples:


function convertNumbersToStrings(numbers){
    const result = [];

    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i].toString());      
    }

    return result;
}

console.log(convertNumbersToStrings([1, 2, 3, 4, 5])); // ["1", "2", "3", "4", "5"]
console.log(convertNumbersToStrings([10, 20, 30, 40, 50])); // ["10", "20", "30", "40", "50"]
console.log(convertNumbersToStrings([-1, -2, -3, -4, -5])); // ["-1", "-2", "-3", "-4", "-5"]