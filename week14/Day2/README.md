# Week 14 - Day 2

> **Agenda:** This (zoe), Promises(zoe)



## THIS

* VERY CONFUSING
* You should always console this if you plan to use it
* When a function executes, it gets the *this* property— **a variable with the value of the object that invokes the function where *this* is used.
* *this* always refers to an object
* Examples:
	* Jquery Button
	* 5 examples in this.js

## PROMISES
* Avoids the pyramid of doom. Puts the responsibility back in the logic page where the call happens and use plain English (.then) to make a clear order of operations.

* The core idea behind promises is that a promise represents the result of an asynchronous operation. 

* Promises capture the notion of an eventual value into an object. Callbacks are functions, promises are objects.

* Callbacks are just blocks of code which can be run in response to events such as as timers going off or messages being received from the server. Any function can be a callback, and every callback is a function.

* Promises are objects which store information about whether or not those events have happened yet, and if they have, what their outcome is.

* A promise is in one of three different states:

	* pending - The initial state of a promise.
	* fulfilled - The state of a promise representing a successful operation.
	* rejected - The state of a promise representing a failed operation.

* Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again). So if you store a resolved Promise in a var (var promise = CarLot.loadInventory('blah.json')), That will forever hold the state of the resolved Promise.

* then() is method on a promise that listens for resolve or reject.

* When using promises, it’s very easy to omit the error callback. But if you do, you’ll never get any indication something went wrong. At the very least, the final promise in your chain should have an error callback

http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/