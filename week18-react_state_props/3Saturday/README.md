# Week 18 - Day 3

> **Agenda:** React and FB - READ and DELETE

## ERD
![Pinterest ERD](./pinterest_erd.png)

## READ
1.  display boards
* Create BoardContainer component - it should do GET to /boards.json in firebase and set boards state
* BoardContainer should map over the boards and pass each individual board into a Board component
* The Board component should build up a card for that board (don't forget the proptype)

2.  display single board
* Modify App.js function to have singleBoardId in state then modify loadComponent function to chose between BoardContainer, Auth, or SingleBoard component
* Modify Board component to have a click event that sets singleBoardId state in App when clicked
* create SingleBoard component that loads the board information on load (start with just the board info not the pins)

3.  Display pins on single board - HAVE STUDENTS DO THIS give them 30ish min
* Modify componentDidMount in SingleBoard to also pull all pins by boardId and then set state
* map over pins and call Pin Component
* Create Pin Component that displays pins as cards


## DELETE
1. Delete Pin
* Create removePin function in SingleBoard component - should call axios.delete and pass pinId
* Pass this function down to Pin component - add prop-type


2.  Delete board
* If time have students delete a board.  To start with have them just delete the board from the boards collection - don't worry about the pins for that board.
* I didn't actually create a solution for this...sorry not sorry

3. BONUS - complete delete
* for students who need a bonus get them to figure out how to delete a board without leaving orphaned pins.