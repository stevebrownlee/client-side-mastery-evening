# JS Day 3 = objects and functions
## Objects

The most basic object is a collection of key:value pairs surrounded by curly braces.

```js
var myCar = {
  make: "Nissan",
  model: "Xterra",
  year: 2006,
  color: blue
}
```

You can add new key:value pairs after the initial definition.

```js
myCar.doors = 4;
myCar.sunroof = false;
```

You can then access the value of any of those keys.

```js
console.log("My car has " + myCar.doors + " doors.");
```

## Functions

##### Simple function

Go over the basics of functions and live code some examples.

```js
function sayHello() {
  document.write("Hello, world");
}

// Only when you write the name of the function with parenthesis, does it get executed.
sayHello();
```

##### Function with arguments

```
function saySomething(message) {
  document.write(message);
}

saySomething("Hello");
saySomething("World");
```


### Functions with/without return values

```js
function reverseIt(originalString) {

  // Convert string to array, reverse the elements, and join back together
  var reversedString = originalString.split("").reverse().join("");
  
  // Return the new string
  return reversedString;
}

var result = reverseIt("flambajamba");
console.log(result);
```

### Functions are first-order objects

Can be passed as arguments to other functions.

```js
function performOperationOnString(originalString, functionToExecute) {
  var finalValue = functionToExecute(originalString);

  return finalValue;
}

function alphabetical(originalString) {
  var alphabeticalOrder = originalString.split("").sort().join("");
  
  return alphabeticalOrder;
}

var result = performOperationOnString("The lazy brown dog", alphabetical);
console.log(result);
```

## IN CLASS EXERCISE
> CHALLENGE: JS Exercises
> * Converter
> * Alphastacker