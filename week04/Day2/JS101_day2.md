# JS Day 2 = switch, array, for

## Switch statement

```js
var value = 10;
switch (value) {
  case 1:
    console.log("Small number");
  case 5:
    console.log("Medium number");
  case 1:
    console.log("Large number");
  default:
    console.log("Dunno");
}
```

## Arrays

Arrays are like buckets that you can use to store a collection numbers and/or strings.

```
var commands = ["blue", 42, "shift left", "hut"];
```

### Adding/removing items to an array

You can specify a value to place at a specific index (position).

```
commands[0] = "periwinkle";
commands[3] = 24;

// ["periwinkle", 42, "shift left", 24]
```

You can use the `push()` method which is available on an variable that holds an array. This method puts a new item on the end of the array.

```
commands.push("hot route");

// ["periwinkle", 42, "shift left", 24, "hot route"]
```

To remove the last item, you have to `pop()` it off.

```
var lastOne = commands.pop();

// ["periwinkle", 42, "shift left", 24]
// lastOne now contains the value "hot route"
```

The `unshift()` and `shift()` methods add and remove items from the beginning of the array.

## Basic array methods

### join

This combines all elements in an array into a single string, delimited by the character that you specify.

```js
var fruit = ["cherries", "apples", "bananas"];
var fruitString = fruit.join(","); // "cherries,apples,bananas"
fruitString = fruit.join(" "); // "cherries apples bananas"
fruitString = fruit.join("><");
```

### String.split()

This is the reverse of the `join()` method. It take a string and converts it into an array. You pass in the character that is the delimiter of each item in the string.

```js
var fruits = "watermelon|lemon|orange";
var fruitArray = fruits.split("|");
```

### reverse

Pretty simple, it reverse the items in an array

```js
var fruit = ["cherries", "apples", "bananas"];
fruit.reverse(); // ["bananas", "apples", "cherries"]
```

### sort

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

### slice

The slice() method returns a shallow copy of a portion of an array into a new array object.

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); // ["Orange", "Lemon"]
```

### splice

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

### indexOf

This method find the index of the specified value in an array. If it's not found, it returns -1.

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.indexOf('Lemon'); // 2
```

## Chaining methods

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

## IN CLASS EXERCISE
> CHALLENGE: Array Methods - from SPA milestone

> [array methods exercise](https://github.com/nashville-software-school/front-end-milestones/blob/eb21f67de01248d591116a153e73df5785e69cd8/3-single-page-applications/exercises/SP_JS_ARRAYS_CHAINING.md).

## Loops with *for*

Learn how to execute the same code against every items in an array. The *for* loop has several key elements that allow you to execute the same logic over and over again, a predetermined number of times.

First, you state an initial value that will be checked each time through the loop.

```
for (var count = 0;;) {
   // Do something
}
```
Next, you put in a condition check. If it evaluates to true, then the logic inside the loop will execute.
```
for (var count = 0; count < 10;) {
   // Do something
}
```
The last element is what will be executed each time through your loop. In this example, we're simply going to increase the value of our `count` variable by 1.
```
for (var count = 0; count < 10; count = count + 1) {
   console.log("Current value of count = ", count);
}
```

You can perform any mathematical operation on the `count` variable that you want. Increment by 1, decrement by 5, multiply by 3, divide by 10... whatever you need for the problem you're trying to solve.

## IN CLASS EXERCISE
> CHALLENGE: For Loops
> * Write a for loop that increments the counter variable by 10 each time, and displays the value.
> * Write a for loop that divides the counter variable by 2 each time, and displays the value.
> * Augment the loop to insert each new value into an array
> * Write a loop that starts at 100 and decrements a variable by 1. If the number is even, add the number to the beginning of an array, else add it to the end of the array.


