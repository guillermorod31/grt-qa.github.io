// Challenge 10: Palindrome Checker
// Write a function that checks whether a passed string is a palindrome or not.
// A palindrome is a word, phrase, number, or other sequences of characters that reads the same backward or forward.
// Usage examples:


function palindrome(word){
    let reverse = '';

    for (let i = word.length-1; i >= 0; i--) {
        reverse =  reverse.concat(word.charAt(i));
    }
    return (word === reverse);
}

console.log(palindrome('racecar')); // true
console.log(palindrome('hello')); // false
console.log(palindrome('a')); // true
console.log(palindrome('madam')); // true