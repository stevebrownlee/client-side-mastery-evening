# Promise Lightning Execise
## Insult Generator

## Requirements

- As a user, when I click the "Insult me bro!" button an insult should appear below the button
- As a user, when I click the "Insult me bro!" button a second time I should get a whole new insult

## Insult format
Your insult should be a 3 parter.
 - Part 1: randomply generated selection from db/descriptors.json
 - Part 2: randomply generated selection from db/descriptors.json
 - Part 3: randomply generated selection from db/nouns.json

 Example:
 Random generation gives the following dom string:
 ```descriptors[15].text + descriptors[19].text + nouns[21].text```

 this creates the following insult that is displayed to the dom:
 ```despicable egg-sucking pond scum```

## Insult Display
* The insult must appear below the "Insult me bro!" button
* The insult must appear inside something bootstrappy (panel, jumbotron, thumbnail, well, etc - pick your favorite)
*  If you have extra time feel free to style


## Setup
- I have already done most of the setup for you (you are welcome)
  * jquery and bootstrap are loaded
  * There is a main.css file linked
  * The appropriate dist/app.js script tag exists
  * All JSON data can be found in the db folder
  * Grunt is configured
- cd into lib and do `npm install`
- In lib run `grunt`
- Write ALL THE CODES


## Technical Requirements
- You should be using Bootstrap.
- You should be using Browserify.
- You should be using jQuery.
- You should be using Promises.
- Your code should be clean and readable, with single responsibility principle.