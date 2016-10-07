# ES6

> **Agenda:** let, const, fat arrows, property shorthand, method properties, and string templates.


### const
const stands for constant.  These are values that cannot be reassigned.
```javascript
const a=8
console.log(a)  //8
a=12
console.log(a)  //Uncaught TypeError: Assignment to constant variable.
```


### let
let is a type of variable.  It can be reassigned but can only be used in the block its defined in.  
```javascript
let b=8
console.log(b)  //8
b=12
console.log(b)  //12
```
#### let vs var
```javascript
function varTest() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}
```
```javascript
function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}
```


### arrow functions or fat arrows
#### EXAMPLE 1: function with no arguments
```javascript
var sum = function() {
    let a = 1, b = 2;
    return a + b;
};
console.log("hardcoded sum in ES5", sum());
```
with arrow function this becomes:
```javascript
var sum = () => {
  let a = 1, b = 2;
  return a + b;
}

console.log("hardcoded sum in ES6", sum());
```



#### Example 2: funtion with one argument


```javascript
var reflect = function(value) {
    return value;
};

console.log("reflect in ES5: ", reflect("ES5 is so yesterday.") );
```
with arrow functions this becomes:
```javascript
var reflect = value => value;

console.log("reflect in ES6: ", reflect("ES6 is the new hotness.") );
```

#### EXAMPLE 3: function with multiple arguments

```javascript
var sum = function(num1, num2) {
    return num1 + num2;
};
console.log("sum in ES5", sum());
```
with arrow functions this becomes:
```javascript
var sum = (num1, num2) => num1 + num2;
console.log("sum in ES6", sum());
```

### string templates
```javascript
let b="biteme";
console.log(b); //’biteme’
let r = `hello my name is ${b}`;
console.log(r); //"hello my name is biteme"
```

### object literal property shorthand
```javascript
let wow = "Hi there",
    es6 = "ES6",
    myNum = () => {console.log("howdy");}; // define 3 variables using let

let myOldObj = {
  wow: wow,
  es6: es6,
  myNum: myNum
}; //assign variables to keys of the same name in an object

console.log("myOldObj in ES5", myOldObj );

let myNewObj = {
  wow, es6, myNum
};  //since they have the same key name that the values are saved to we can use this shorthand

console.log("my New Obj in ES6", myNewObj);
myNewObj.myNum();  //'howdy'
```

### method properties
```javascript
var es5Obj = {
  foo: function() {console.log(‘foo’)},
  bar: function() {console.log(‘bar’)}
};
console.log("es5Obj with functions", es5Obj);
```
You are now able to shorten this to:
```javascript
var es6Obj = {
  foo() {console.log(‘foo’)},
  bar() {console.log(‘bar’)}
};
console.log("es6Obj with functions", es6Obj);
```