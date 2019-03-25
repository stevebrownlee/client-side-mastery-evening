# Week 3 - Day 1

> **Agenda:** JS Strings and Objects

#### Operators and Conditionals
1. Introduce Operators

    1. Review Assignment Operator, ie. `var text = 'awesome'` Explain difference between right-hand side and left-hand side.
    1. Mathematical Operators: + - * / %
    1. Equality Operators: == === != !==
    1. Relational Operators: < > >= <=
    1. Logical Operators: && || !

1. Introduce Conditionals

    - give sample code, explain how the value in the parenthesis gets turned into 'truthy' or 'falsey'. concept: type coersion ((occurs b/c of weak typing))
    - create an example of variable hoisting with conditional.

    ```javascript
    if (zoe === "cool" && callan === "flawless") {
        console.log("we like our instructors!");
    } else if (zoe === "cool" || callan === "flawless"){
        console.log("we have okay instructors");
    } else {
        console.log("crap");
    }

    var zoe = "cool";
    var callan = "flawless";
    ```

#### Strings, Built-In Methods

1. explain and show concatenation.
    - mention difference in concatenation with strings and within console.log() statements.
1. String Property of .length
    - Definition: represents the length of a string as a number
1. String Built-In Methods (implicity gets this method on compilation/interpetation)

    > Life is like riding a bicycle. To keep your balance, you must keep moving.

    topic: indexing. count starts at 0.

    1. .indexOf()
    1. .charAt()
    1. .replace
        - show MDN documentation
        - `string.replace("bike", "elephant")`
        - `string.replace(/keep/g, 'win')`

1. Moving HTML String from DOM to JS

    ```javascript
    var htmlElement = document.getElementById('quote');
    var htmlText = htmlElement.innerHTML;
    console.log(htmlText);
    ```

#### Do Sonnet Exercise

#### Objects
  - Everything in JS is an object
  - key/value pairs

#### Do Elizabeth Sanger exercise