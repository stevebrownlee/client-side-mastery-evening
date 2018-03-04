// //Challenge 1
// // A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// // Console true if the given string is a palindrome. Otherwise, console false.
// // var test = 'cat';  // false
// var test = 'racecar'; // true
// // var test = 'bear'; // false
// // var test = 'mom'; // true

// var opp = test.split('').reverse().join('');
// if(test === opp){
//   console.log("palindrome", true);
// }else{
//   console.log("palindrome", false);
// }




// //Challenge 2
// // Given a book name with a number in it (here are 3 examples)
// // Var book1 = ”Catch 22”;
// // Var book2 = ”Slaughterhouse 5”;
// // Var book3 = ”Fahrenheit 451”;
// // Write a method that console.log only the number in the title.


// var book = "Catch 22";
// // var book = "Slaughterhouse 5";
// // var book = "Fahrenheit 451";

// // way1 = book.match(/\d+/)[0];    //match returns an array

// // console.log('way1', way1);


// var nums = [];

// var way2 = book.split("");
// for(var i=0; i<way2.length; i++){
//   if((way2[i]*1)){
//     nums.push(way2[i]);
//   }
// }
// console.log("nums", nums.join(""));





// Challange 1
var alphabet = [];
var comparisionArry = [];
for(var i = 97; i < 123; i++)
{
   alphabet.push(String.fromCharCode(i));
}
console.log(alphabet);

var value = 0;
var userInput = 'pppppppp jumbo shrimp';
var userInputArry = userInput.split(' ');
for(var j = 0; j<userInputArry.length;j++)
{
   console.log('indivisual string:',userInputArry[j]);
   
   var stringArry = userInputArry[j].split('');
   console.log('stringArry:', stringArry)
   for(var k = 0; k<stringArry.length; k++)
   {
       console.log('value for each letter:',alphabet.indexOf(stringArry[k])+1);
       value += alphabet.indexOf(stringArry[k])+1;
       console.log(value);
   }
   console.log('value for each string:',value, 'for string:' ,userInputArry[j]);

   comparisionArry[userInputArry[j]] = value; //associate array to ket value and string together
   console.log('string : value -',comparisionArry);
   

   value = 0; // reset the value after each string loop
}

console.log(comparisionArry.sort());