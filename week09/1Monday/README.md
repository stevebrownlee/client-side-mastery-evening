# Week 9 - Day 1

> **Agenda:** Task Runners, intro to browserify

1.  Make browserify-calc application
2.  setup ticket:
    * touch styles/main.css
    * touch index.html
      * add boilerplate
      * link tag for styles/main.css
      * add script tag to dist/app.js
    * touch .gitignore - add .DS_Store and dist/app.js and lib/node_modules
    * mkdir javascripts 
    * touch javascripts/main.js  (add console.log)
    * mkdir lib
    * cd lib
      * npm init
      * npm install grunt grunt-contrib-jshint matchdep grunt-contrib-watch grunt-browserify gruntify-eslint --save-dev 
    * run application
      * In terminal run hs
      * In vs code terminal run grunt in the lib folder
      * Fix use strict error and notice it build main.js into dist/app.js
3.  Create add
    * Make mycalulator module that requires add.js and puts it in a calc module that gets exported
    * Make add.js that exports a function that adds two numbers and returns the results
4.  Create subtract
    * Require subtract.js in mycalculator module
    * Make subtract.js that exports a function that subtracts two numbers and returns the results
5.  Create multiply
    * Require multiply.js in mycalculator module
    * Make multiply.js that exports a function that multiplies two numbers and returns the results
6.  Create divide
    * Require divide.js in mycalculator module
    * Make divide.js that exports a function that divides two numbers and returns the results
