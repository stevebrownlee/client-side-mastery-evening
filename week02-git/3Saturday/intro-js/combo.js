console.log('COMBO');

// Challenge #1
// Create a function called evenOdd that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.
const evenOdd = (num) => {
  if(num %2 === 0){
    return 'even';
  } else {
    return 'odd';
  }
};

console.log(evenOdd(2));
console.log(evenOdd(7));
console.log(evenOdd(22));

// Challenge #2
// given a number, find its opposite.
const opposite = (num) => {
  return num * (-1);
}
console.log(opposite(2));
console.log(opposite(-4));

// Challenge #3
// A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.
const palindrome = (str) => {
  const opp = str.split('').reverse().join('');
  if(str === opp){
    return true;
  }else{
    return false;
  }
};
console.log(palindrome('cat')); //false
console.log(palindrome('racecar')); //true
console.log(palindrome('mom')); //true
console.log(palindrome('bear')); //false

// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, output small if the animal is an alligator (case insensitive) otherwise return wide.
const animal = (str) => {
  if (str.toLowerCase() === "alligator") {
    return 'small';
  } else {
    return 'wide';
  }
}
console.log(animal('AlliGAtor')); //small
console.log(animal('alligator')); //small
console.log(animal('dog')); //wide