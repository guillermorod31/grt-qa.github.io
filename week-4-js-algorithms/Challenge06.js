// Challenge 6: Factorial a Number
// Write a function that takes a number as an argument and returns the factorial of that number.
// Usage examples:
// console.log(factorial(5)); // 120
// console.log(factorial(0)); // 1
// console.log(factorial(1)); // 1
// console.log(factorial(10)); // 3628800

function factorial(number){
    let result = 1;
    if (number === 0 || number === 1){
        return result;
    }else{
        for (let i = 2; i <= number; i++) {
        result = result * i;
        }
        return result;
    }
    
}

console.log(factorial(5)); //120
console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(10)); // 3628800