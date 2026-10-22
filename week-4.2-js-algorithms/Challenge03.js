// Challenge 3: Flatten a Two-Dimensional Array
// Write a function that takes a two-dimensional array and returns a flattened array.
// Usage examples:
// console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
// console.log(flattenArray([["a", "b"], ["c", "d"]])); // ["a", "b", "c", "d"]
// console.log(flattenArray([[1], [2], [3]])); // [1, 2, 3]

function flattenArray(listOfArrays){
    const flatten = [];
    for (let i = 0; i < listOfArrays.length; i++) {
        for (let j = 0; j < listOfArrays[i].length; j++) {
            flatten.push(listOfArrays[i][j]);
        }
    }
    return flatten;
}

console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
console.log(flattenArray([["a", "b"], ["c", "d"]])); // ["a", "b", "c", "d"]
console.log(flattenArray([[1], [2], [3]])); // [1, 2, 3]