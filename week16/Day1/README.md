# Week 16 - Day 1

> **Agenda:** SASS


## Installations:
http://sass-lang.com/guide
https://www.npmjs.com/package/gulp-sass
Windows users: Yer screwed.  But try installing ruby w/http://rubyinstaller.org/.  Restart git bash and type which ruby.  Pray.
https://corlewsolutions.com/articles/article-19-install-ruby-on-windows-7-32-bit-or-64-bit
https://www.ruby-forum.com/topic/998496


* Set up grunt transpiling
  * install grunt-sass
  * "sassify" task

* What is SASS?
  *  SASS = Syntactically Awesome Style Sheets.  CSS with superpowers or CSS extension language.  

* scss vs. sass
  * SASS was origionally written similarly around the same time as haml (html syntax where spaces are important) - it even shares the same ruby gem.  Then there was a divide in the people who wrote sass - most felt that sass should be written to look like normal css but make css look easer - it should not require developers to have to learn a new syntax.  So version 3 of sass (May 2010) introduced scss.  We are currently on version 3.4.22 of scss (March 2016).  There are pros and cons to both scss and sass but we are going to use scss becuase that is the most recent version and most places use it.  

## SASS Basics
### Variables
  ```
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
  ```
### Nesting
```
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```
  
### Importing partials (@import)
  * make a scss file called _footer.scss
```
.footer {
   margin: 0;
  padding: 0;
}
```
  * then in main.scss:
```
@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

### Mixins 
  * border-radius (takes args)
```
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

### Extend/Inheritance
```
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

### Operators
  * SCSS allows you to CALCULATE numbers using math
```
.container {
  float: left;
  width: 600px / 960px * 100%;
}
```