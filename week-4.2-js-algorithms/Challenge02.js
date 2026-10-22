// Challenge 2: Find All Palindromes in an Array
// Write a function to find all the palindromes in an array of strings.
// Usage examples:
// console.log(findPalindromes(["racecar", "hello", "madam", "world"])); // ["racecar", "madam"]
// console.log(findPalindromes(["noon", "deed", "civic"])); // ["noon", "deed", "civic"]
// console.log(findPalindromes(["apple", "banana", "cherry"])); // []

function findPalindromes(listOfWords) {
  const newList = [];
  for (let i = 0; i < listOfWords.length; i++) { //review each word
    let reverse = "";
    for (let j = listOfWords[i].length - 1; j >= 0; j--) {//review each letter in the word
      reverse = reverse.concat(listOfWords[i].charAt(j));
    }
    if (listOfWords[i] === reverse) { //verify if are palindromes
      newList.push(reverse);
    }
  }
  return newList;
}

console.log(findPalindromes(["racecar", "hello", "madam", "world"])); // ["racecar", "madam"]
console.log(findPalindromes(["noon", "deed", "civic"])); // ["noon", "deed", "civic"]
console.log(findPalindromes(["apple", "banana", "cherry"])); // []