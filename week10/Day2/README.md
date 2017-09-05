# Week 10 - Day 2

> **Agenda:** IIFE Augmentors


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
8.  create some simple IIFEs - see iife-intro