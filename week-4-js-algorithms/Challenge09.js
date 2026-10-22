// Challenge 9: Find the Longest Word in a String
// Write a function that returns the length of the longest word in the provided sentence.
// Usage examples:


function findLongestWord(sentence){
    const palabras = sentence.split(' '); //split the sentence in words
    let temp = '';
    //console.log(palabras);
    for (let i = 0; i < palabras.length; i++) { // check for the largest word
        if (temp.length < palabras[i].length){
            temp = palabras[i];
        }  
    }
    return temp.length; 
}

console.log(findLongestWord('The quick brown fox')); // 5
console.log(findLongestWord('Hello world')); // 5
console.log(findLongestWord('')); // 0
console.log(findLongestWord('OneWord')); // 7