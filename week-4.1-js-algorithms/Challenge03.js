// Challenge 3: Reverse Array
// Write a function that takes an array and returns a new array with the elements in reverse order.
// Usage examples:
// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
// console.log(reverseArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]

function reverseArray (elements){
    const reversed = elements.toReversed(); //new function discovered
    //for (let i = elements.length - 1; i >= 0; i--) {
    //    reversed.push(elements[i]); //review each element from back and add to the new array
    //}
    //return reversed;
    return reversed;
}


console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(reverseArray(["a", "b", "c", "d"])); // ["d", "c", "b", "a"]