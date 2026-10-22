console.log("-------------------------------------------------------------");
console.log("Coding Challenge 1 - Simple Check");
function checkGreaterTen(numberCompare) {
    if(numberCompare > 10){
      return `${numberCompare} Greater than 10`;
    }
    else{
      return `${numberCompare} Not Greater than 10`;
    }
  }
  
console.log(checkGreaterTen(15)); // "Greater than 10"
console.log(checkGreaterTen(5)); // "Not greater than 10"
console.log(checkGreaterTen(10)); // "Not greater than 10"

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 2 - Multi-level conditions");
function assignGrade(grade) {
    if (grade >= 90 && grade <= 100) return "Your score is 'A'";
    else if (grade >= 80 && grade < 90) return "Your score is 'B'";
    else if (grade >= 70 && grade < 80) return "Your score is 'C'";
    else if (grade >= 60 && grade < 70) return "Your score is 'D'";
    else if (grade < 60 && grade > 0) return "Your score is 'F'";
    else return "This is NOT a valid grade";
  }
  
console.log(assignGrade(95)); // "A"
console.log(assignGrade(85)); // "B"
console.log(assignGrade(75)); // "C"
console.log(assignGrade(65)); // "D"
console.log(assignGrade(55)); // "F"
console.log(assignGrade(120)); // "Not valid"
console.log(assignGrade(-20)); // "Not valid"

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 3 - Truncate String");
function truncateString(textToTruncate, numCharacters) {
    //const tempText = '';
    //const tempNumChar = numCharacters - 3;

    return (textToTruncate.slice(0,numCharacters - 3) + "...")

    //return console.log (tempText + "...");

  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11)); // "A-tisket..."
  console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14)); // "Peter Piper..."
  console.log(truncateString("Panchito clavo un clavito", 19)); //"Panchito clavo u"

console.log("-------------------------------------------------------------");


console.log("Coding Challenge 4 - Multi-level conditions II");
function checkEligibility(ageValue) {
    if (ageValue >= 21){
        return console.log(`Person with age of ${ageValue} Can vote, drive and drink`);
    }else if (ageValue >= 18){
        return console.log(`Person with age of ${ageValue} Can vote and drive`);
    }else if (ageValue >= 16){
        return console.log(`Person with age of ${ageValue} Can drive`);
    }else{
        return console.log(`Person with age of ${ageValue} Can't vote, drive or drink`);
    }

  }
  checkEligibility(15); // "Can't vote, drive, or drink"
  checkEligibility(16); // "Can drive"
  checkEligibility(18); // "Can vote and drive"
  checkEligibility(22); // "Can vote, drive, and drink"


console.log("-------------------------------------------------------------");

console.log("Coding Challenge 5 - Multi-level conditions III");
function isLeapYear(yearValue) {
    if (yearValue % 400 == 0){
        return console.log(`${yearValue} is Leap year`);
    }else if (yearValue % 100 == 0){
        return console.log(`${yearValue} is Not leap year`);
    }else if (yearValue % 4 == 0){
        return console.log(`${yearValue} is Leap year`);
    }else{
        return console.log(`${yearValue} is Not Leap year`);
    }

  }
  isLeapYear(2000); // "Leap year"
  isLeapYear(1800); // "Not a leap year"
  isLeapYear(2004); // "Leap year"
  isLeapYear(2021); // "Not a leap year"

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 6 - Season Checker");
function checkSeason(monthValue) {
    if (monthValue == 1 || monthValue == 2 || monthValue == 12){
        return console.log(`Month ${monthValue} is Winter`);
    }else if (monthValue == 3 || monthValue == 4 || monthValue == 5){
        return console.log(`Month ${monthValue} is Spring`);
    }else if (monthValue == 6 || monthValue == 7 || monthValue == 8){
        return console.log(`Month ${monthValue} is Summer`);
    }else if (monthValue == 9 || monthValue == 10 || monthValue == 11){
        return console.log(`Month ${monthValue} is Autumn`);
    }else{
        return console.log(`This is not a valid month`);
    }

  }
  checkSeason(1); // "Winter"
  checkSeason(4); // "Spring"
  checkSeason(7); // "Summer"
  checkSeason(10); // "Autumn"

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 7 - FizzBuzz Simplified");
function fizzBuzzSimplified(numberValue) {
    if (numberValue % 15 === 0){
        return console.log(`FizzBuzz`);
    }else if (numberValue % 5 === 0){
        return console.log(`Buzz`);
    }else if (numberValue % 3 === 0){
        return console.log(`Fizz`);
    }else{
        return console.log(`${numberValue}`);
    }

  }
  fizzBuzzSimplified(3); // "Fizz"
  fizzBuzzSimplified(5); // "Buzz"
  fizzBuzzSimplified(15); // "FizzBuzz"
  fizzBuzzSimplified(2); // 2

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 8 - Temperature Checker");
function checkTemp(temperatureValue) {
    if (temperatureValue < 32){
        return console.log(`Freezing`);
    }else if (temperatureValue >= 32 && temperatureValue <= 50) {
        return console.log(`Cold`);
    }else if (temperatureValue >= 51 && temperatureValue <= 70) {
        return console.log(`Mild`);
    }else if (temperatureValue >= 71 && temperatureValue <= 90) {
        return console.log(`Warm`);
    }else if (temperatureValue > 90) {
        return console.log(`Hot`);
    }else{
        return console.log(`is not a valid temperature`);
    }

  }
  checkTemp(30); // "Freezing"
  checkTemp(45); // "Cold"
  checkTemp(65); // "Mild"
  checkTemp(75); // "Warm"
  checkTemp(95); // "Hot"

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 9 - Traffic Sign");
function checkSign(colorSign) {
   switch (colorSign){
    case "red":
        return console.log(`Stop`);
    case "yellow":
        return console.log(`Caution`);
    case "green":
        return console.log(`Go`);
    default:
        return console.log(`Not valid color`);
   }

  }

  checkSign("red"); // "Stop"
  checkSign("yellow"); // "Caution"
  checkSign("green"); // "Go"
  checkSign("orange"); // "Not valid color"

console.log("-------------------------------------------------------------");

console.log("Coding Challenge 10 - Meal Suggestion");
function suggestMeal(time, diet) {
   if (time == "morning" && diet == "vegan"){
    return console.log(`Fruit smoothie with oats`);
   }else if (time == "morning" && diet == "vegetarian"){
    return console.log(`Vegetarian scrambled eggs with toast`);
   }else if (time == "morning" && diet == "omnivore"){
    return console.log(`Bacon and eggs with toast`);
   }else if (time == "afternoon" && diet == "vegan"){
    return console.log(`Vegan burrito`);
   }else if (time == "afternoon" && diet == "vegetarian"){
    return console.log(`Vegetarian pizza`);
   }else if (time == "afternoon" && diet == "omnivore"){
    return console.log(`Chicken sandwich`);
   }else if (time == "evening" && diet == "vegan"){
    return console.log(`Vegan lentil stew`);
   }else if (time == "evening" && diet == "vegetarian"){
    return console.log(`Caesar's salad`);
   }else if (time == "evening" && diet == "omnivore"){
    return console.log(`Chicken burrito with eggs`);
   }else{
    return console.log(`Not valid information`);
   }
  }

  suggestMeal("morning", "vegan"); // "Fruit smoothie with oats"
  suggestMeal("morning", "vegetarian"); // "Vegetarian scrambled eggs with toast"
  suggestMeal("morning", "omnivore"); // "Bacon and eggs with toast"
  suggestMeal("afternoon", "vegan"); // "Vegan burrito"
  suggestMeal("afternoon", "vegetarian"); // "Vegetarian pizza"
  suggestMeal("afternoon", "omnivore"); // "Chicken sandwich"
  suggestMeal("evening", "vegan"); // "Vegan lentil stew"
  suggestMeal("sss", "sss"); // "Not valid information"

console.log("-------------------------------------------------------------");