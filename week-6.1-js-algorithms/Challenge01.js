// Challenge 1: Find the Largest Palindrome
// Write a function to find the largest palindrome made from the product of any two numbers between 0 and 1000
// Usage examples:
// console.log(getLargestPalindrome(1000));; // 906609

function getLargestPalindrome(number) {
   let highestPalindrome = 0;

  for (let i = 0; i <= number; i++) {
    for (let j = 0; j <= number; j++) {
      if (i && j == 0) continue;
      const product = i * j;
      let prodChar = "";
      prodChar = product.toString();
      let fliped = "";
    for (let k = prodChar.length - 1; k >= 0; k--) {
      fliped = fliped.concat(prodChar.charAt(k)); //flip the product
    }
      if (prodChar === fliped && product > highestPalindrome){
        highestPalindrome = prodChar;
      }
    }
  }
  return highestPalindrome;
}

console.log(getLargestPalindrome(1000)); // 906609

