// Challenge 4: Find Common Elements Between Two Arrays
// Write a function that takes two arrays and returns an array of elements that are common to both.
// Usage examples:
// console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // [3]
// console.log(findCommonElements(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
// console.log(findCommonElements([10, 20, 30], [40, 50, 60])); // []

function findCommonElements(firstList, secondList){
    const common = [];

    for (let i = 0; i < firstList.length; i++) {
        for (let j = 0; j < secondList.length; j++) {
            if(firstList[i] === secondList[j]){
                common.push(firstList[i]);
            }
        }
    }
    return common;
}

console.log(findCommonElements([1, 2, 3], [3, 4, 5])); // [3]
console.log(findCommonElements(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
console.log(findCommonElements([10, 20, 30], [40, 50, 60])); // []