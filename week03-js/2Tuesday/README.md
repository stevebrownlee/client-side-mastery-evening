# Week 3 - Day 2

> **Agenda:** Dev tools, Loops and the dom

## Questions and Role
* Have Greg take role
* Give a few minutes for students to ask any questions they have from the last class.

## Dev Tools
This should be an overview to the dev tools - we will be using them continuously over the next few million years.  Show students the following:
* How to open their dev tools
* What each tab in the dev tools does
* How to debug code in the browser - console.log, debugger, breakpoints. Do this as part of the loop and dom lecture.
Notes for all the above can be found [HERE](https://github.com/nss-nightclass-projects/Night-Class-Resources/blob/master/book-1-foundations/chapters/dev-tools.md)

## Loops and the DOM
Class notes are [HERE](https://github.com/nss-nightclass-projects/Night-Class-Resources/blob/master/book-1-foundations/chapters/js-array-looping.md)

### Setup
Have them create a new github repo called dom-loops.  I have already created this repo for [E10](https://github.com/nss-evening-cohort-10/dom-loops) - https://github.com/nss-evening-cohort-10/dom-loops

Locally the project should live here: `~/workspace/foundations/inclass/dom-loops`.

Have them push README.md to master and then create a `setup` branch that changes the background color of the body and does a console.log.  Once they push to master you are ready to go with the lecture

### Part 1: Intro to Loops
* make branch called `intro`
* create loops.js file and add script tag to index.html
* EVERYTHING SHOULD BE FUNCTION BASED
* create an array called colors that has a bunch of colors in it
* Write a function called `colorLoop` that does a for loops over colors array and consoles each out - use init function to call this function
* Refactor `colorLoop` to console a single domstring that has each color surrounded by an h1 tag
* PR and merge branch

### Part 2: Exercise
* make a branch called `instructors`
* Have students create an array called isntructors - each instructor should be an object with a firstname and lastname in it.
* give students 15 minutes to figure out how to console full instructor names.   Then review the solution
* have them modify their code so they have a single domstring that consoles out instructor names in h1 tags
* PR and merge branch

### DINNER BREAK - 30 min

### Part 3: Print to DOM
* Introduce the DOM - what is it?  what does it stand for? etc
* make branch called DOM
* Make a div with an id of dinosaurs - write very basic getElementById to show you can set the innerHTML of a div
* Create an array of dinosaur objects
* build dom string function to make dinosaur cards
* create printToDom function to print cards to dom
* Do some minor flex styling
* PR and merge branch

### Part 4: Exercise
* Create branch called HW
* have students make an array called assignments that has 5 objects.  Each object should have the following keys: title, dueDate, topic, notes, assignmentUrl
* Give students 20-30 minutes to write function that loops over assignments and makes cards.  Extra points if they can figure out how to reuse the printToDom function from part 3
* Review assignment
* PR and merge branch