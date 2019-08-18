# Week 3 - Day 2

> **Agenda:** Basic event listeners

## Questions and Role
* Have Greg take role
* Give a few minutes for students to ask any questions they have from the last class.

## Event Listeners

### Setup
Have them create a new github repo called `event-listeners`.  I have already created this repo for [E10](https://github.com/nss-evening-cohort-10/event-listeners) - https://github.com/nss-evening-cohort-10/event-listeners

Locally the project should live here: `~/workspace/foundations/inclass/event-listeners`.

Have them push README.md to master and then create a `setup` branch that changes the background color of the body and does a console.log.  Once they push to master you are ready to go with the lecture

### Print Pie Cards
* This is a review from monday
* Create a branch called `pies`
* Build an array of pies with objects representing each pie.  Make it interactive and let students decide what the keys are.  Make sure each pie is assigned to an instructor - ie each object needs to have a key that says `instructor` and a value like `Zoe` or `Callan`.  Greg doesn't get any because he doesn't eat.
* Then have students build up a domstring of all pies and printToDom.  Pies should display in rows of 3.  Give them 20-30 minutes to do this.
* Review code
* Make a PR and merge

### Add Instructor filters
* Create a branch called `filters`
* Make 4 buttons - `All`, `Zoe`, `Callan`, `Michael`
* Attach event listeners to these buttons - this is new material so explain what an event listener is and go slow - start with a console printing out when clicked.  Then explain what `e` is.  Then how to get the instructor we clicked on = `e.target.id`
* In the event listener function use a for loop (they don't know forEach yet and its to early for that) to loop over all pies and see if pie.instructor matches `e.target.id`.  If it does push to a new array.
* Modify domstring builder to get an array passed into it.
* Do the All button last
* Once all buttons are working PR and merge.

## HW
Go over their HW.  It can be found [HERE](https://github.com/nss-evening-cohort-10/e10-homework/blob/master/week03.md).  Explain each assignment - pet adoption and Personal site part 1.  There is also the optional reading You don't know JS for those who like reading stuff.