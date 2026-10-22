// Challenge 6: Find the Longest Substring Without Repeating Characters
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Usage examples:
// console.log(findLongestSubstringWithoutRepeats("abcabcbb")); // 3 ("abc")
// console.log(findLongestSubstringWithoutRepeats("bbbbb")); // 1 ("b")
// console.log(findLongestSubstringWithoutRepeats("pwwkew")); // 3 ("wke")

function findLongestSubstringWithoutRepeats (str){
    let temp = ''; 
    let subStr = [];

    for (let i = 0; i < str.length; i++) {
        if (temp.includes(str.charAt(i))) {
            subStr.push(temp);
            temp = '';
            i--;
        }else{
            temp = temp.concat(str.charAt(i));
        }       
    }
    subStr.push(temp);

    let biggest = subStr[0];

    for (let i = 1; i < subStr.length; i++) {
        if (subStr[i].length > biggest.length){
            biggest = subStr[i];
        } 
    }

    return biggest.length;
}

console.log(findLongestSubstringWithoutRepeats("abcabcbb")); // 3 ("abc")
console.log(findLongestSubstringWithoutRepeats("bbbbb")); // 1 ("b")
console.log(findLongestSubstringWithoutRepeats("pwwkew")); // 3 ("wke")