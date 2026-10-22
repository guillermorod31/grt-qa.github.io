function factorialize(num) {
  let result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

//5*4*3*2*1  = 120

console.log(factorialize(5));
console.log(factorialize(0));
console.log(factorialize(1));
console.log(factorialize(-8));


// function factorialize(num) {
//   if (num <= 0) {
//     return 1;
//   }
//   return num * factorialize(num - 1);
// }