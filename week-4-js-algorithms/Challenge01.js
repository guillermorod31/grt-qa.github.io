// Challenge 1: Find the Longest String
// Write a function to find the longest string in the array.
// Usage examples:
// console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
// console.log(findLongestString(["one", "two", "three"])); // "three"
// console.log(findLongestString(["1", "22", "333"])); // "333"

function findLongestString(data){
    let result = ''; 
    for(let i = 0; i < data.length; i ++){
        data[i].length > result.length ? result = data[i] : result = result;            
     }
     return result;
}

console.log(findLongestString(["I", "am", "learning", "JavaScript"])); // "JavaScript"
console.log(findLongestString(["one", "two", "three"])); // "three"
console.log(findLongestString(["1", "22", "333"])); // "333"