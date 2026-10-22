// Challenge 10: Merge Two Arrays
// Write a function that takes two arrays and merges them into one.
// Usage examples:
// console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(mergeArrays(["a", "b", "c"], ["d", "e", "f"])); // ["a", "b", "c", "d", "e", "f"]
// console.log(mergeArrays([10, 20, 30], [40, 50, 60])); // [10, 20, 30, 40, 50, 60]

function mergeArrays(list1, list2){
    const newList = list1;

    list2.forEach(element => {
        newList.push(element);
    });

    return newList;
}


console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeArrays(["a", "b", "c"], ["d", "e", "f"])); // ["a", "b", "c", "d", "e", "f"]
console.log(mergeArrays([10, 20, 30], [40, 50, 60])); // [10, 20, 30, 40, 50, 60]