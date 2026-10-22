// Challenge 3: Find Strings with Dollar Sign
// Write a function to find all strings that include a $ sign in the array.
// Usage examples:
// console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
// console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
// console.log(findDollarStrings(["no", "dollars", "here"])); // []

//we need to do a nested for to go over each character inside each word in the array

function findDollarStrings(str){
    const result = [];
    let word = '';

    for (let i = 0; i < str.length; i++) {
        word = str[i];
        for (let j = 0; j < word.length; j++) { 
            if (word.charAt(j) === '$'){ //if (word.includes('$')) result.push(word); other option from Valeriia!
            result.push(word); //if $ is found we add the word to the result array
            break; // once the character $ is found we don't need to continue with the loop
            }
            
        }
    }
    return result;
}

console.log(findDollarStrings(["I", "have", "$10"])); // ["$10"]
console.log(findDollarStrings(["$", "$$", "$$$"])); // ["$", "$$", "$$$"]
console.log(findDollarStrings(["no", "dollars", "here"])); // []