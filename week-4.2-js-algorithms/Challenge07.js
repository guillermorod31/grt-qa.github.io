// Challenge 7: Check If All Elements Are Unique
// Write a function that checks if all elements in an array are unique.
// Usage examples:
// console.log(areAllElementsUnique([1, 2, 3, 4, 5])); // true
// console.log(areAllElementsUnique(["a", "b", "c", "a"])); // false
// console.log(areAllElementsUnique([10, 20, 30, 40, 50])); // true

function areAllElementsUnique(list) {
  const newList = [];

  for (let i = 0; i < list.length; i++) {
    if(!newList.includes(list[i])){
        newList.push(list[i]);
    }
  }
      if (newList.length == list.length){
        return true;
    }else{
        return false
    }
  
}

console.log(areAllElementsUnique([1, 2, 3, 4, 5])); // true
console.log(areAllElementsUnique(["a", "b", "c", "a"])); // false
console.log(areAllElementsUnique([10, 20, 30, 40, 50])); // true 