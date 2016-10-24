# Week 16 - Day 1

> **Agenda:** SASS


## Installations:
http://sass-lang.com/guide
https://www.npmjs.com/package/gulp-sass
Windows users: Yer screwed.  But try installing ruby w/http://rubyinstaller.org/.  Restart git bash and type which ruby.  Pray.

* Set up grunt transpiling
  * install grunt-sass
  * "sassify" task

* scss vs. sass
sass was origionally written similarly around the same time as haml (html syntax where spaces are important) - it even shares the same ruby gem.  Then there was a divide in the people who wrote sass - most felt that sass should be written to look like normal css but make css look easer - it should not require developers to have to learn a new syntax.  So version 3 of sass (May 2010) introduced scss.  We are currently on version 3.4.22 of scss (March 2016).  There are pros and cons to both scss and sass but we are going to use scss becuase that is the most recent version and most places use it.  

## SASS Basics
### Variables
  Set once, no hunting!
### Nesting
  * no-repeat parent
  * common prefix "card" w/ &- syntax
  
### Importing partials (@import)
  * footer
  * importing 'inheritance'

### Mixins
  * border-radius (takes args)

### Inheritance
  * % syntax
  * define a block, then extend it (takes no args)

### Operators
  * show, don't tell