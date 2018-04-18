// console.log("hi");

// Challenge #1
// If Zoe has 4 friends coming over and she made 2 sandwiches for each one of them, how many sandwiches did she make?

var numOfSandwhiches = 4*2;
console.log("numOfSandwhiches", numOfSandwhiches);  // should print out 8


// Challenge #2
// Console.log can be friendly if you want it to be.  Given a name have your code console:  "Hello, <name> how are you doing today?".
var name = "Zoe";
var string = "Hello, " + name + " how are you doing today?";
console.log("string", string);  // should print out “Hello, zoe how are you doing today?”


// Challenge #3
// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// ASSIGNMENT:  Given a DNA string translate it to RNA
var DNA = "GCAT";
var RNA = DNA.replace('T', 'U');
// var RNA = DNA.replace(/T/g, 'U');
console.log("DNA", DNA);
console.log("RNA", RNA);  // should print out “GCAU”


// Challenge #4
// Lawrence the wide mouth frog is particularly interested in the eating habits of other creatures.
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat the lips of wide-mouthed frogs!
// Given a string with the animal name, that Lawrence encounters, output small if the animal is an alligator (case insensitive) otherwise return wide.
// var animal = "alligator";
// var animal = 'dog';
// var animal = 'Alligator';
var animal = 'AlliGAtor';
if (animal.toLowerCase() === "alligator") {
  console.log("small");
} else {
  console.log("wide");
}

// Challenge #5
// BMWs are too fancy.  Given a string remove any instances of the letters BMW (case insensitive) and display what is left of the string as an H1 tag in the HTML.
var str = 'IBMWLOVEbmcatsbmw';
var output = str.replace(/[bBmMwW]/g, '');
console.log('output', output);
var myElement = document.getElementById('message')
myElement.innerHTML = '<h1>' + output + '</h1>';