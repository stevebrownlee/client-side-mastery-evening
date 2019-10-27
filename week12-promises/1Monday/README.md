# Week 12 - Day 1

> **Agenda:** Promises

## Sync vs Async programming
* JavaScript is by nature Synchronous - this means it starts at the top of a JS file and executes it one line at a time all the way down
* Sometimes we need to interact with things that are not synchronous - like an API call.  We do this using an asynchronous call
* In the past asynchronous code has been handled with callback functions - When the thing happens then run this function (we have seen this with event listeners - when the event fires the callback function we have provided runs);
* callbacks become VERY cumbersome when you need to take the result of the first asynchronous request and plug it into the result of the second one.  In order to do this you need to nest all the things and that creates what is called the PYRAMID OF DOOM sometimes known as callback hell. - its very hard to read
* Promises alleviate this problem because you can chain them together.  They are also much simpler to read because they have their own methods for what happens if the async call is successful or not (.then and .catch).  Under the covers they are just creating callbacks

## Quick slide deck intro
[Slide Version](https://docs.google.com/presentation/d/1qaSIsUynsvKZ7fghujWL4qNFMMvQozaOnZAdfKmldVs/edit?usp=sharing)

## Promise or Axios?
When do you need to have an axios call wrapped in a Promise?  When you want to modify the data the SAME way everytime the function is called.  So for example everytime we call getCows we WANT an array of objects.  We get and object of objects from the json file.  Since we ALWAYS want to get back an array we will wrap the axios call in a promise.

## CODE
* Modify project so the getCows function returns an array of cow objects and build cards
* Have students do the SAME thing for farmers - display them as cards
* SMASH function - get each cow card to have the farmer name that owns it.