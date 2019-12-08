# Week 18 - Day 2

> **Agenda:** React and FB - Auth

Today we will be setting up Firebase authentication within a react app.  It is very similar to how they did setup for es6 Modules and authentication things are just in slightly different places.

## Create Components
* Auth - This will have a sign in with google button
* Board Container - this will have an h1 that says boards
* MyNavbar - this will have a bootstrap navbar
* Import all 3 components into App.js

## Firebase Setup
* Create a new firebase project and add apiKeys.json and example file in the usual place (`src/helpers`)
* Enable google authentication via firebase console
* Create 2 files in `src/helpers/data`
  * connection.js - this initializes the app (we separate it here to avoid circular dependencies. Same with wrapping it in an if statement.  If an app already exists it doesn't initialize again)
  * authData.js - exports `getUid` function which will make it easier to get the logged in users uid later on.

* in App.js
  * Add onAuthStateChanged function - this now goes into the componentDidMount beause we want it to happen on app load and that is there the app loads.
  * Add authed to state - this is how we re-render the appropriate stuff when auth status changes
  * Add if/else to determin if Auth or BoardContainer loads
* Fix up the navbar so logout works

## Final
* If you have done this correctly, when you are logged out you should see an empty navbar and a login with google button
* Clicking the button opens the google signin popup
* Once authenticated you should see the h1 tag that says Boards and a logout button in the navbar
* Clicking the logout button should remove the button from the navbar and show the signin with google button

## Wrap Up
* Any remaining time goes to HW.
* If students are done with the Shark Attack HW they can start on the sports-roster HW and get auth working
* If students are HUGE overachievers they can do parts 1 and 2 of doggie-day-care
