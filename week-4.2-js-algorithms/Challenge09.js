// Challenge 9: Find the Intersection of Two Arrays
// Write a function that takes two arrays and returns an array that is the intersection of the two arrays.
// Usage examples:
// console.log(findIntersection([1, 2, 3], [3, 4, 5])); // [3]
// console.log(findIntersection(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
// console.log(findIntersection([10, 20, 30], [40, 50, 60])); // []

function findIntersection(list1, list2){
    const newList = [];

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if(list1[i] === list2[j]){
                if(!newList.includes(list1[i])){
                    newList.push(list1[i]);
                } 
            }          
        }
    }
    return newList;
}


console.log(findIntersection([1, 2, 3], [3, 4, 5])); // [3]
console.log(findIntersection(["a", "b", "c"], ["b", "c", "d"])); // ["b", "c"]
console.log(findIntersection([10, 20, 30], [40, 50, 60])); // []
console.log(findIntersection([1, 2, 2, 3], [2, 3])); // [2, 3]