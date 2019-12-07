# Week 17 - Day 3

> **Agenda:** Intro to React and React Setup

NOTE:  All work for today will go in `~/workspace/react/inclass`

## Agenda
1. Spend 20ish minutes talking about react - what is it, what does it do, why would you want to use it
2. Slowly run the class through using create-react-app. (including what the new setup branch is) - make a project called react-intro
3. Have the class make another project to practice the setup (give them 20 minutes and then go over it) - make a project called react-intro2
4. Have the class setup the rest of the projects that will be needed for the new few weeks:

## What is react?
Feel free to elaborate/go on a tangent - here are the MVP talking points:
* What is React?
  * [React Docs](https://reactjs.org/)
  * React is "A JavaScript library for building user interfaces"
  * JS libraries are collections of pre-written JS functions.
  * It was built and is maintained by facebook.  It was first released in 2013
* What does it do?
  * Components, components, components!!
  * React was built around creating small re-usable components
  * React has a built to help build out interactive web uis - this means they are expecting developers to use it to build out super interactive sites - so they made things like events and dom re-rendering super easy to do
* Why would you want to use it?
  * JSX (JavaScript eXtension) -  JSX looks a lot like the dom strings we have been building. It basically is a function called render inside our JS file but it is simpler to write (no more `domString = blah`) AND it has WAY better performance
  * Virtual Dom - the is the heart of why react is as popular as it is.  Basically react creates a copy of the websites DOM.  Then when things update on the page the virtual DOM renders.  Then react compares the virtual DOM to the real page DOM and only changes the real DOM where things are different.
  *  Performance - React is written to be super fast and super performant.  Because of this you don't need to worry as much about performance as you do with vanilla JS (unless your business logic is a large drain on resources)
  * Developer Efficiency - Coding in react is FUN because a lot of the busy work that exists in vanilla javascript is done for you so you just get to code the exciting business logic for you app. You will find that you code things faster so have more time to do things that used to be stretch goals

## Setup a Practice Project
* The lecture notes for setting up a react project are [HERE](https://github.com/nss-nightclass-projects/Night-Class-Resources/blob/react/book-4-react/chapters/react-setup.md).  You can send this link out to the class in Slack.  It is also already on classtracker.
* Please go through that document and show them STEP by STEP.  High level:
  * What is create-react-app?  talk about difference between npm and npx (npx is just scripts that run)
  * npx create-react-app intro-react
  * Create github repo called intro-react and push everything generated from create-react-app to master
  * Create setup branch - move files around, add some front end dependencies, add eslint, kill testing
  * push everything up to setup branch and merge in
* What to watch out for:
  * They are used to creating github project WITH a readme - this won't work for create-react-app
  * They tend not to read so if you get asked STUPID questions tell them to RTFM. #toughlove

## Setup practice #2
* Have students create a repo called `intro-react2` and then go through all the same steps locally they did as you did.
* Give them about 20 minutes to do the above on their own and then walk them through it on your machine

## Create ALL The projects
* The rest of the class students can do at their own pace
* Free them to take a lunch break and complete the repos in whatever order they want.  They need to remain in the building until 2 so this is not an early dismissal just free time to go at their own pace.
* Repos that need to be made:
  * shark-attack
  * sports-roster
  * doggie-day-care