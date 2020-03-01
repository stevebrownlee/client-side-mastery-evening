console.log('FUNCTIONS');
// EXAMPLE #1
// Make the nuggetizer
const nuggetizer = (animal) => {
  return `processed ${animal}`;
};

console.log(nuggetizer('pig'));
console.log(nuggetizer('fish'));
console.log(nuggetizer('chicken'));
console.log(nuggetizer('student'));

// Example #2
// function that takes in a dog name and returns a string that says 'my favorite dog breed is <dogname>'
const dogBreed = (dogName) => {
  return `my favorite dog breed is ${dogName}`;
};

console.log(dogBreed('lab'));
console.log(dogBreed('a cat'));

// Challenge #1
// Write a function that takes any number and returns that number plus 42
const fortyTwo = (num) => {
  return num + 42;
};

console.log(fortyTwo(2));
console.log(fortyTwo(12));
console.log(fortyTwo(42));

//  Challenge #2
// Write a function that takes in the year you were born and figures out how old you will be in 2099

const oldAge = (yearBorn) => {
  return 2099 - yearBorn;
};

console.log(oldAge(2000));
console.log(oldAge(2090));
console.log(oldAge(1875));