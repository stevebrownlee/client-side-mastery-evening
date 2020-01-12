# Week 2 - Day 1

> **Agenda:** github review, HTML

## Description
Today we are building a star wars website circa 1995.  Our focus will be mostly on git and branching correctly.  But we will also talk about some html while we do that.  have students make commits on the branch whenever it makes sense.  Have them push, PR, and merge at the end of each section.

## Review git branching
* Have students make a folder called branch-review in `~/workspace/foundations/inclass`
* Then suddenly get amnesia and let students direct you with how to make a git repo with setup branch merged in:
1. Locally make a README.md with title in it - add and commit
1. Create github repo called branch-review
1. Set remote and push to master
1. Make a branch called setup
1. make index.html, main.css, main.js.  js file should have console.log. css file should change background color.  Index should have boilerplate, link and script tag
1. run code to make sure it works
1. add, commit, push to setup
1. make pull request to master
1. merge PR
1. locally switch to master and pull down

## HTML Part 1 - setup
1.  Have students make an html101 repo
1.  commit readme to master
1.  make setup branch
1.  have students type out EVERY single line of html and explain what each does (see below)
1.  have students add main.css and main.js with background color change and console statement.
1. merge in setup branch

```html
<!DOCTYPE html> <!-- tells the browswer that this document is in html 5.  if the html is uppercase then you have to specify more information (this was done in versions of html before 5.  so just make it lowercase)-->
<html lang="en"> <!-- tells the browser that this is the root of the html document -->
<head> <!-- container for all the head elements - link, meta, script, style, or title tags -->
  <meta charset="UTF-8"> <!-- this tells the browser what type of character set you are using.  You will practically always use UTF-8 as its the prefered standard for html-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- this sets the viewport of the site to match the width of the device you are on.  should always include this line -->
  <meta http-equiv="X-UA-Compatible" content="ie=edge"> <!-- this specifies what versions of ie your site supports.  In this case we are only supporting modern browsers (edge and up) -->
  <title>Document</title> <!-- Whatever you type here will display in the title tab at the top of the browser -->
</head> <!-- closes head tag -->
<body> <!-- section of the document that contains ALL the html -->

</body> <!-- closing tag for body -->
</html> <!-- closing tag for html -->
```

## HTML Part 2 - navigation
1. Have students make a navigation branch
1. In the index build the nav bar
1. Add styling to CSS file
1. Create droids.html and people.html to test that links work
1. Once working students will need to add css file and navbar code to each html file for pages to all look the same
1.  PR and merge branch in

## HTML Part 3 - semantic html (home page)
1.  create home branch
1.  explain importance of semantic html (organization, screen readers, etc)
1.  create main structure - header, main, footer
1.  Add basic copyright and styling to footer
1.  Explain what lorem ipsum is - show off a few of your favorite generators (bacon ipsum, pirate ipsum etc).  There is actually a star wars ipsum generator so we will use that.
1.  Use a bunch of ipsum paragraphs to create an article and a bunch of sections on the home page.
1.  Apply the main structure (header, main, footer) to the people and droids pages.
1.  PR and merge branch in

## HTML Part 4 - People Page
1.  Create people branch
1.  Crowd source this to get 4 star wars characters that are not droids.
1.  Create basic cards with their information - image, name, dark/light side etc.
1.  Explain tags that get used - div, span, img, etc
1.  Apply some basic styling
1.  PR and merge branch in

## HTML Part 5 - Challenge - Droid Page
1.  Give students 30ish minutes to do this on their own
1.  Make a droids branch
1.  In whatever way they want have them add images and information for at least 4 star wars droids to their page.  They should feel free to add some styling if they have time.
1.  IF TIME - have students share their work - have them pull open their droid page, get everyone to stand up.  And give 5ish min for people to walk around and look at others work
1.  PR and merge branch in

## Remaining Time
IF ANY TIME LEFT - Have students make 5 repos (test1 - test5) that have single setup branch and everything merged in so master has index.html, main.css, main.js files.  Should see h1 tag, background color change, and console.log statement in each. This is to build muscle memory with git commands.
