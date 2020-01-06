console.log('ARRAYS');

// Challenge 1
// Write a function that takes an array and an index and prints out that value
const valuePrinter = (ar, idx) => {
  return ar[idx];
}

console.log(valuePrinter([1,2,3,4,5,6,7], 2));
console.log(valuePrinter(['cat', 'dog', 'bird'], 0));

// challenge 2
// Write a function that takes an array of something and tells you if the name 'Greg' is in that array
const findGreg = (arr) => {
  return arr.indexOf('Greg') >= 0 ? true : false;
}

console.log(findGreg(['a', 'b', 'Greg']));
console.log(findGreg(['a', 'b', 'c']));