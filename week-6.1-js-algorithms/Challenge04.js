// Challenge 4: Find duplicates in two arrays
// Write a function that takes two arrays as arguments and returns an array of values that are repeated more than once across the two input arrays
// Usage examples:
//const array1 = [1, 2, 3, 4, 5, 5]; const array2 = [4, 5, 6, 7, 7, 8]; //console.log(findDuplicates(array1, array2)); //  [4, 5, 7]

function findDuplicates(array1, array2) {
  const result = [];
  const arr1Clean = [];
  const arr2Clean = [];

  array1.forEach(element => {
    if(!arr1Clean.includes(element)){
        arr1Clean.push(element);
    }else{
        if (!result.includes(element)) {
        result.push(element);
      }
    }
  });

  array2.forEach(element => {
    if(!arr2Clean.includes(element)){
        arr2Clean.push(element);
    }else{
        if (!result.includes(element)) {
        result.push(element);
      }
    }
  });

  for (let i = 0; i < arr1Clean.length; i++) {
    for (let j = 0; j < arr2Clean.length; j++) {
      if (arr1Clean[i] === arr2Clean[j]) {
        if (!result.includes(arr1Clean[i])) {
          result.push(arr1Clean[i]);
        }
      }
    }
  }

  return result;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 5], [4, 5, 6, 7, 7, 8])); //  [4, 5, 7]
