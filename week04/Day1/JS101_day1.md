# JS Day 1 = Primatives and Strings

## Overview

Javascript is **the most important language** you will use as a front end developer, and possibly for much of your career, because it is the language of the web browser. All browser based applications - Facebook, Twitter, Etsy, Pinterest - are all written with JavaScript.

**History of JavaScript**
* Created in 10 days in May 1995 by Brendan Eich who was working at Netscape.
* Java was very popular at the time - hence it being part of the name JavaScript
  * Other than being part of the name there is nothing in common between JS and Java
* ECMAScript 1 was the first standardized version of Javascript - created in 1996
* ECMAScript 2 released in 1998
* ECMAScript 3 was released in 1999
* ECMAScript 4 was started in 2000 and then abandoned in 2005 because there were multiple versions of it happening at the same time and nobody could agree on which one to support
* ECMAScript 5 was a combination of failures of ES4 and was released in 1999
* ECMAScript 6 also called ES2015 was released in 2015
* ECMAScript 7 also called ES2016 was released in June 2016
* Going forward there will be smaller releases each year

## DEMO SETUP
* Create a local folder called jsDemo
* Create a Github repo called jsDemo
* Start with a README.md on master branch
* Push README.md to master branch
* Checkout to JS101a branch

## The console

Learn how to output the value of variables to the browser's console.

```
console.log("Hello, world!");
console.log("I am number", 2); // "I am number 2"
```

## The Alert

Use alert to show messages to people using your application.  Now that you have seen them don't ever use them again.  They are SO 1995.

`alert("Thank you for using our product");`

## Variables

Learn how to store values in human readable variables that can be used throughout your code, and changed when necessary. It is the same as your bank account number. That number never changes, but the actual value of your bank account changes daily as you make money and spend money.

### Number values

You bank account number is a variable, and the money contained in it is the value of the variable. In JavaScript, you can create a variable name that will hold any value you want.

`var bankAccount = 1000;`

Now, anywhere else in the code that you use the `bankAccount` variable, the value of 1000 will actually be used.

`var combinedAccount = 2000 + bankAccount;`

The new variable called `combinedAccount` will now hold the value 3000.

### String values
Variables can hold all kinds of values. Here's one holding a string value. Strings are a continuous collection of letters and values inside two quote characters.

```
var instructor = "Steve";
var numberOfStudents = "15";
```

### Boolean values

These variables will hold the value of `true` or `false`.

```
var studentsAreAwesome = true;
var limaBeansAreYummy = false;
```

### Declaring variables

You can declare a variable first, and then assign it a value later.
```
var fruit;
fruit = "apple";
```

But, as we saw before, you can declare it and assign it a value on the same line of code.
```
var fruit = "apple";
```

### Changing variable values

Declare a variable and give it an initial value.

```
var name = "Beth";
```

You can modify the value of a variable at any time, which is why they are called variables, because their value varies any time you want.

```
var name = "Susan";
```

If you tried to use the variable `name` at this point, it's value would be `Susan` even though you initially provided the value of `Beth`. 

## Math Expressions

How to do math with JavaScript. Show the main mathematical operators, and their use with integer value variables.

`+`,`-`,`/`,`%`, `*`
```
var num1 = 6;
var num2 = 2;
console.log("add", num1+num2); //8
console.log("subtract", num1-num2); //4
console.log("multiply", num1*num2); //12
console.log("divide", num1/num2); //3
```


## Conditions with *if* and *else*

Learn how to check if something is true or false, and execute different code for each case. First, you evaluate if a condition is true or false.  If it is true, execute the code inside the surrounding curly braces (or mustaches).

> **Tip: ** There are several types of punctuation in JavaScript. {} are braces, [] are brackets, () are parenthesis, <> are angle brackets.

```
if (studentsAreAwesome) {
   console.log("Congratulations!! You get a new career.");
}
```

If `studentsAreAwesome` was **false**, then the console would not be shown. Use the else condition to handle when your evaluation is false.

```
if (studentsAreAwesome) {
   console.log("Congratulations!! You get a new career.");
} else {
   console.log("Back to the plutonium mines for you!");
}
```


## IN CLASS EXERCISE
> CHALLENGE: Challenges for students to practice creating variables, performing math functions, and checking boolean expressions.  Give students 15-20 minutes to work with their neighbor
> * How many hours are in a year
> * How many minutes are in a decade
> * How many seconds old they are
> * If they are older than some arbitrary number, console "I'm old", else "I'm young"


## String manipulation

### Joining two strings together
It's called concatenation.
```
var firstName = "Michael";
var lastName = "Corleone";
var fullName = firstName + " " + lastName;

console.log("fullName", fullName);
```

In JavaScript, the `+` character not only adds two numbers together, but it also concatenates strings

### How long is it?
```
var phrase = "How much wood would a woodchuck chuck if a woodchuck could chuck wood";
console.log("phrase.length", phrase.length);
```
### Finding characters in a string
You use the `indexOf()` method that is automatically added to any variable that holds a string value.

```js
var phrase = "The quick brown fox jumps over the lazy dog.";

// In JavaScript, the first position of a string 
// (called the index) is actually 0, not 1. The 
// same is true in arrays.
console.log("T", phrase.indexOf("T"));

console.log("X", phrase.indexOf("x"));
```

### Determine which character is at a position in a string
Yo use the `charAt()` method that is automatically added to any variable that holds a string value.

```js
var phrase = "How now brown cow?";
var position = phrase.charAt(8);
console.log("letter", position); // Will console "b"
```

### Replacing characters in a string
You use the `replace()` method that is automatically added to any variable that holds a string value.

```js
var phrase = "The lazy dog";
var newPhrase = phrase.replace("lazy", "bounding");
console.log("newPhrase", newPhrase);
```

Change every occurrence by using a regular expression. Try this out.

```js
var phrase = "The lazy dog likes the weird fox";
var newPhrase = phrase.replace(/o/g, "i");
console.log("newPhrase", newPhrase);
```

### Converting strings to numbers

```js
var five = "5"; // "5"
var numberFive = parseInt(five); // 5
```

## Adding strings to your web page

Learn to use `document.getElementById()` and  `element.innerHTML` to add text to a web page with JavaScript. This is an alternative to `document.write()` which is taught in the Treehouse video for their first JavaScript program.

##### **Example**
---
```html
<div id="container">

</div>
```

```javascript
var phrase = "Hey, look at me!";
var element = document.getElementById("container");
element.innerHTML = phrase;
```

## IN CLASS EXERCISE
> CHALLENGE: Sonnet Exercise
> * [Sonnet Exercise](https://github.com/nashville-software-school/front-end-milestones/blob/master/2-the-static-web/exercises/SW_JS_SONNET.md)

