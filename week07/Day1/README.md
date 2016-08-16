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


#### join

This combines all elements in an array into a single string, delimited by the character that you specify.

```js
var fruit = ["cherries", "apples", "bananas"];
var fruitString = fruit.join(","); // "cherries,apples,bananas"
fruitString = fruit.join(" "); // "cherries apples bananas"
fruitString = fruit.join("><");
```

#### String.split()

This is the reverse of the `join()` method. It take a string and converts it into an array. You pass in the character that is the delimiter of each item in the string.

```js
var fruits = "watermelon|lemon|orange";
var fruitArray = fruits.split("|");
```

#### reverse

Pretty simple, it reverse the items in an array

```js
var fruit = ["cherries", "apples", "bananas"];
fruit.reverse(); // ["bananas", "apples", "cherries"]
```

#### sort

Pretty simple, it sorts the items in an array

```js
var fruit = ["cherries", "apples", "bananas"];
fruit.sort(); // ["apples", "bananas", "cherries"]
```

The tricky thing about sort is that it doesn't work very well with numbers. To sort numbers, you have to pass a custom function to the sort method. The default sort logic simply looks at the first character of each item and compares the ASCII value of that character.

```js
var numbers = [8, 1, 42, 13, 22, 7, 4, 53];
numbers.sort(); // [1, 13, 22, 4, 42, 53, 7, 8]
numbers.sort(function(first, second) { return first - second; }) // [1, 4, 7, 8, 13, 22, 42, 53]
```

#### slice

The slice() method returns a shallow copy of a portion of an array into a new array object.

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); // ["Orange", "Lemon"]
```

#### splice

The splice() method, unlike slice(), does not create a new array, but rather modifies the existing array. You can use it to remove items, or add new ones at any location.

```js
// Remove the item at position 2
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.splice(2, 1);

// Replace Orange with Tangerine
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.splice(1, 1, "Tangerine");

// Add new item at index 3
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.splice(3, 0, "Date");
```

#### indexOf

This method find the index of the specified value in an array. If it's not found, it returns -1.

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.indexOf('Lemon'); // 2
```

#### Chaining methods

If you want to perform multiple operations on an array, you can execute several statements. For example, if you want sort the fruits in descending alphabetical order, and then insert a new item, you could write this code.

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.sort();                  // Sort array items
fruits.reverse();               // Reverse the items
fruits.splice(4, 0, "Apricot"); // Add item
```

You can also chain all three operations together into one JavaScript statement.

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.sort().reverse().splice(4, 0, "Apricot");
```


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

