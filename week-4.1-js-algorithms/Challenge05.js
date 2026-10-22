// Challenge 5: Remove Duplicate Elements
// Write a function that takes an array and returns a new array with duplicate elements removed.
// Usage examples:
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
// console.log(removeDuplicates(["a", "a", "b", "b", "c"])); // ["a", "b", "c"]

function removeDuplicates (list){
    let newList = [];
    for (let i = 0; i < list.length; i++) {
        if (!newList.includes(list[i])){
            newList.push(list[i]);
        }
    }
    return newList;
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(removeDuplicates(["a", "a", "b", "b", "c"])); // ["a", "b", "c"]