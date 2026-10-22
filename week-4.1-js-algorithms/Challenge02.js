// Challenge 2: Concatenate Array Elements
// Write a function that takes an array of strings and concatenates all the elements into one string.
// Usage examples:
// console.log(concatenateElements(["Hello", "world"])); // "Helloworld"
// console.log(concatenateElements(["I", "love", "JavaScript"])); // "IloveJavaScript"

function concatenateElements (elements){
    let concatenated = '';
    
    for (let i = 0; i < elements.length; i++) {
        concatenated = concatenated.concat(elements[i]);
    }
    return concatenated;
}

console.log(concatenateElements(["Hello", "world"])); // "Helloworld"
console.log(concatenateElements(["I", "love", "JavaScript"])); // "IloveJavaScript"