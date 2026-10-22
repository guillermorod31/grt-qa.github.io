//Ball hit the wall, hit the door, ball hit wooden floor and explode.
//hit word is banned
//class 12/06/2025

function frequentWord(str){
    const arrayOfWords = str.toLowerCase().split(' ');

    let maxNumWord = "";
    let maxCount = 0;
    let count = {};
    const banned = "hit";

    for (let i = 0; i < arrayOfWords.length; i++) {
        let word = arrayOfWords[i];
        if(word === banned){
            continue;
        }else if (count[word] === undefined){
            count[word] = 1;
        }else {
            count[word]++;
        }
    }

    for (let k in count){
        if(count[k] > maxCount){
            maxCount = count[k];
            maxNumWord = k; 
        }
    }

    return maxNumWord;
}

console.log(frequentWord("Ball hit the wall, hit the door, ball hit wooden floor and explode."));
