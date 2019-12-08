# Week 18 - Day 1

> **Agenda:** React State and Props

Repo location: `~/workspace/react/inclass/goats`

Students should already have this repo setup.

If you have not already have ALL students install the react dev tools chrome extension.

## Overview
This inclass project is intended to be SUPER simple its basically a READ from an array of goats with a minor click event.  The main goal of this project is to get students to understand the difference between state and props and to develop some best practices around component building.  There is a click event thrown in at the end so they see passing a function as a prop and can do more exciting HW.  Take it slow - there will be LOTS of stupid errors on their parts.  Encourage them to help each other out get SUPER tough love it there is an error message in their console that tells them exactly what to fix.

## Data
* The data for this array is an array of goat objects.  This array should live in `src/helpers/data/goatData.js`.
* Give them the array.
* Write the `getGoats` function together and export it (the other two functions in this file you will write later)

## App Component (state)
* This is the first time students have seen a JS class.  Take a moment and just talk about the difference between a class and a regular function.  They are already kinda familiar with constructors.
* Talk about state - what is it, what does it do?  Explain that the changing of state causes everything that touches that state variable to re-render.
* Create a state with a goats array in App - show students this variable in the dev tools
* Introduce `componentDidMount` (you may have to go on a slight tangent of lifecycle methods - just an introduction don't get into the weeds) - grab the goats array and set state.  show students the goats state variable now has stuff in it in the gev tools

## Goat Coral Component (props)
* Create a component called GoatCoral that holds all the goats (start with just an H1 that says Goat Coral).
* Import GoatCoral in the App component and use it in the render
* Now is probably a good time to talk about JSX - again super high level overview that points out the differences between it and writing `domString += something`
* Next pass the goats array from App into GoatCoral.  Talk about props.  Show in the dev tools that GoatCoral now has a goats array under props.

## Prop-Types
* We want students to ALWAYS use proptypes.  Swing it however you need to:
  * Good developers do this
  * It can save your but when there is a data issue
  * Its part of our definition of clean code
  * Any file that has a `this.props.something` should have prop types for that something - the more specific the better
* They will need to `npm install prop-types --save` as prop-types is no longer included standard with react
* Show them the prop-types [docs](https://reactjs.org/docs/typechecking-with-proptypes.html)
* Create a goatShape in `src/helpers/propz/goatShape.js`
* Import that into GoatCoral and show them how it can fail (add something extra to the shape that isRequired)
* Common pitfalls = PropTypes vs propTypes.  Casing kills them EVERY TIME.

## Goat Component (props)
* Create a Goat component
* This should take a single goat object (this.props.goat - so probably need a proptype but HEY we already have the shape done so this one is easy)
* JSX should display a bootstrap card (don't add the button at the bottom yet)
* now there should be stuff on the page!  don't care what it looks like

## Change Goat Status (click event)
Part 1: UseAGoat
* create `useGoat` function in goatData.js
* Pass it into GoatCoral (add proptype)
* Pass it into Goat (add proptype)
* Add ternary to display correct button
* Add onClick function on Use Goat button. This function should grab the goat id (this.props.goat.id) and pass it up the prop chain

Part 2: FreeAGoat
* Give students 20-30 minutes to do this on their own (if you run out of time they can do it for HW)
* Go over solution when time permits - its the same as part 1

## Wrap Up
* Assign the Shark Attack HW
* Most students have purchased the Wes Bos class - encourage them to watch his video on state and props: like maybe multiple times
