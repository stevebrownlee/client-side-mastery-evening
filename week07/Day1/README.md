# Week 7 - Day 1

> **Agenda:** Git reminders, Array Methods


### Github reminders

* workflow reminder
- Make master branch with readme and push to master
- Make branch and write some code, push to that branch
- Make a PR on github
- You(individual assignments), your team(group assignmnets), or an instructor(quizzes) approves the PR
- Merge in the pull request
* No commented out code
* No console.logs
* No funky commit messages



### Advanced Array Methods
Why would we want to use built in JS array methods?

1.  Its less code
2.  All the methods take the argument of a function - so we are writing reusable code, that is easier to test

#### forEach

The `forEach` method on an array executed a [callback](http://www.impressivewebs.com/callback-functions-javascript/) [function](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/) for each element in the array.


Write a function called `outputFruitOld` that consoles every fruit in a fruit array.
```js
var fruits = ["apple", "banana", "cherry"];
function outputFruitOld(array){
  for( var i = 0; i < array.length; i++ ) {
    console.log('array[' + i + ']  = ' + array[i]);
  }   
}
outputFruitOld(fruits);
```
Now we will write the same thing with a forEach loop:

```js
var fruits = ["apple", "banana", "cherry"];
function outputFruit(element, index, array) {
  console.log('array[' + index + '] = ' + element);
}
fruits.forEach(outputFruit);
```

#### map

The `map()` method *creates a new array* with the results of calling a provided function on every element in this array.

Write a function called `backwardFruitsOld` that reverses the letters in each word in the fruits array.

```js
var fruits = ["apple", "banana", "cherry"];
function backwardFruitsOld(array){
  var backwardFruits = [];
  for( var i = 0; i < array.length; i++ ) {
    backwardFruits.push(array[i].split("").reverse().join(""));
  }
  console.log(backwardFruits); // ["elppa", "ananab", "yrrehc"]
}
backwardFruitsOld(fruits);
```

Now we will write the same thing using map:


```js
function reverseIt(element, index) {
  return element.split("").reverse().join("");
}

var fruits = ["apple", "banana", "cherry"];
var backwardFruits = fruits.map(reverseIt); 
console.log(backwardFruits); // ["elppa", "ananab", "yrrehc"]
```


#### filter

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

Write a function called `fiveLettersOnlyOld` that only returns fruits that have 5 letters.

```js
var fruits = ["apple", "banana", "cherry"];
function fiveLettersOnlyOld(array){
  var filteredFruits = [];
  for( var i = 0; i < array.length; i++ ) {
    if (array[i].length === 5) {
      filteredFruits.push(array[i]);
    }
  }
  console.log(filteredFruits); // // ["apple"]
}
fiveLettersOnlyOld(fruits);
```

same code using filter method:


```js
function filterIt(element, index) {
  if (element.length === 5) {
    return element;
  }
}

var fruits = ["apple", "banana", "cherry"];
var filteredFruits = fruits.filter(filterIt);
console.log(filteredFruits); // ["apple"]
```


#### reduce

The `reduce()` method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

Write a function called `addzOld` that returns the sum of an array.
```js
var numbers = [0, 1, 2, 3, 4];
function addzOld(array){
  var sum = 0;
  for( var i = 0; i < array.length; i++ ) {
    sum = sum + array[i];
  }
  console.log(sum);
}
addzOld(numbers);
```

Using the reduce method:

```js
var sum = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index) {
  console.log("curent index: " + index);
  return previousValue + currentValue;
});
console.log(sum);
```

