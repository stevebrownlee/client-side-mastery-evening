# Week 8 - Day 1

> **Agenda:** group project demos, intro to modules

## Group Project Demos
Each group should cover the following topics:
1. Project Demo:  click around and show us what your final product looks like.
2. Planning:  How did your team plan?  Show us your wireframes and your github project board.
3. Code:  Show us one thing your team coded that you think was interesting or different.
4. Gitcidents:  Its story time.  Tell us about a merge conflict your team had, how you fixed it, and what you learned.

## 50 Shades Demo
This project is designed to show the problem with global variables.  It has a variable called bookInfo that contains information about the book.

To change the book price:
* Load the page
* Open chrome console
* Type: ```bookInfo.price = 0.01```

## Build out the 50 Shades Project with modules
* Create `javascripts/helpers/book.js`  with the book info
* Import that into main.js and show how you can get stuff from other files
* Create store component
* Create cart component