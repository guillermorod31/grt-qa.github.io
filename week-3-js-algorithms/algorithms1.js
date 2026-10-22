
console.log("Coding Challenge 1 - isBigger");

const first = 5;
const second = 4;

function isBigger (firstNumber, secondNumber){
    if (firstNumber>secondNumber){
        return console.log("First number " + firstNumber + " is bigger than " + secondNumber);
    }else{
        return console.log('Second number is bigger, try again!')
    }
}

isBigger(first, second);

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 2 - getStringLength");
function getStringLength (textToCheck){
    return textToCheck.length;
}

console.log(getStringLength('sergii')) // 6
console.log(getStringLength('alex')) // 4

console.log("-------------------------------------------------------------");


console.log("Coding Challenge 3 - divideByTwo");
function divideByTwo(numberToDivide) {
    return numberToDivide / 2;
  }
  
console.log(divideByTwo(6)) // 3 
console.log(divideByTwo(105)) // Results in 52.5

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 4 - sumNumbers");
function sumNumbers(firstNumber, secondNumber) { 
  return firstNumber + secondNumber;
}

console.log(sumNumbers(1, 2)) // 3
console.log(sumNumbers(2, 2)) // 4
console.log(sumNumbers(55, 2)) // 57

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 5 - isBiggerThan5");
function isBiggerThan5(number) {
  return number > 5;
  }
  
console.log(isBiggerThan5(6)) // true
console.log(isBiggerThan5(5)) // false
console.log(isBiggerThan5(4)) // false
console.log(isBiggerThan5(1)) // false

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 6 - findBiggerNumber");
function findBiggerNumber(firstNum, secondNum) {
    return firstNum > secondNum ? firstNum : secondNum;
  }
  
console.log(findBiggerNumber(6, 7)) // 7
console.log(findBiggerNumber(5, 1)) // 5
console.log(findBiggerNumber(2, 2)) // 2

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 7 - longerString");
function longerString(firstText, secondText) {
  return firstText.length > secondText.length ? firstText : secondText;  
  }
  
console.log(longerString('codemify', 'test')) // codemify
console.log(longerString('automation', 'coding')) // automation
console.log(longerString('automation', 'the codemify')) // the codemify

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 8 - checkEquality");
function checkEquality(firstValue, secondValue) {
    return (firstValue === secondValue);
  }
  
console.log(checkEquality(1, true)) // ➞ false. A number and a boolean: the value and type are different
console.log(checkEquality(0, "0")) // ➞ false. A number and a string: the type is different
console.log(checkEquality(1, 1)) // ➞ true. A number and a number: the type and value are equal

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 9 - compareAge");
const myAge = 25;
function compareAge(personToCompare, ageValue) {
    if(ageValue > myAge){
      return console.log(`${personToCompare} is older than me`);
    }
    else{
      return console.log(`${personToCompare} is younger than me`);
    }
  }
  
compareAge("Joel", 36) // ➞ "Joel is older than me."
compareAge("Samuel", 24) // ➞ "Samuel is younger than me."
compareAge("Lily", 28) // ➞ "Lily is oder than me."

console.log("-------------------------------------------------------------");