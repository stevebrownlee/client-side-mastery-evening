# Week 7 - Day 2

> **Agenda:** IIFE Lecture


## Why do we need IIFE's?  - to hold private variables
1. Show iife-amazon demo - show that by changing the price of book in terminal ```bookInfo.price = 0.01``` the price changes in the cart - not secure
2.  IIFE = Immediately-Invoked Function Epression
3.  ```(function(){ /* code */ }());```
4.  we use this to avoid polluting the global name space.  All of the variables inside the IIFE are not visible outside its scope.
5.  Basic scope example:
```
var outside = "global";

function scopeStuff (){
  var inside = "local";
  console.log("outside from inside func ", outside );
  console.log("inside from inside func ", inside );
}

console.log("outside global: ", outside);
console.log("inside global? ", inside ); //this line shows reference error - inside not defined because its hidden inside a function
scopeStuff();
```


6.  Show example of a function that is not immediately executed:

```
// This function is not immediately executed
var global_base = 500;
function throwAway() {
  global_base += 500;
}

// You have to explicitly execute the function
throwAway(); //console.log global base after execution
```

7.  use an iife to immediately execute the previous function

```
var global_base = 300;
(function () {
  var _internal_base = 100;
  var _internal_sum = _internal_base + global_base;
  console.log("_internal_sum",_internal_sum)
}());
```

This works because add the () around the function makes this function into a function expression

8.  Explain the difference between function declarations and function Expressions

This is a function expression:
```
function printCats(cat){
	console.log(cat)
};

printCats("fluffy");

```

This is a function declaration:
```
printCats("fluffy"); //Gives an error because printCats is not defined.
var printCats = function(cat){
	console.log(cat)
};

printCats("fluffy");  //fluffy

```
Function expressions get loaded on page load, function expressions get loaded when that line of the file is reached.  So if you try to execute a function expression before it is defined you get an error.



9.  create some simple IIFEs - see iife-intro
