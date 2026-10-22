// Challenge 5: Remove Specific Elements
// Write a function that takes an array and a value, and returns a new array with all occurrences of that value removed.
// Usage examples:
// console.log(removeSpecificElement([1, 2, 3, 2, 4, 2], 2)); // [1, 3, 4]
// console.log(removeSpecificElement(["a", "b", "c", "b"], "b")); // ["a", "c"]
// console.log(removeSpecificElement([5, 6, 7], 8)); // [5, 6, 7]

function removeSpecificElement(listOfValues, element){
    let newList = [];
    for (let i = 0; i < listOfValues.length; i++) {
        if (element !== listOfValues[i]){
            newList.push(listOfValues[i]);
        }
    }
    return newList;
}

console.log(removeSpecificElement([1, 2, 3, 2, 4, 2], 2)); // [1, 3, 4]
console.log(removeSpecificElement(["a", "b", "c", "b"], "b")); // ["a", "c"]
console.log(removeSpecificElement([5, 6, 7], 8)); // [5, 6, 7]