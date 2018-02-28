//Challenge 1
// A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Console true if the given string is a palindrome. Otherwise, console false.
// var test = 'cat';  // false
var test = 'racecar'; // true
// var test = 'bear'; // false
// var test = 'mom'; // true

var opp = test.split('').reverse().join('');
if(test === opp){
  console.log("palindrome", true);
}else{
  console.log("palindrome", false);
}




//Challenge 2
// Given a book name with a number in it (here are 3 examples)
// Var book1 = ”Catch 22”;
// Var book2 = ”Slaughterhouse 5”;
// Var book3 = ”Fahrenheit 451”;
// Write a method that console.log only the number in the title.


var book = "Catch 22";
// var book = "Slaughterhouse 5";
// var book = "Fahrenheit 451";

// way1 = book.match(/\d+/)[0];    //match returns an array

// console.log('way1', way1);


var nums = [];

var way2 = book.split("");
for(var i=0; i<way2.length; i++){
  if((way2[i]*1)){
    nums.push(way2[i]);
  }
}
console.log("nums", nums.join(""));