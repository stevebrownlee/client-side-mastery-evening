

## Challenge: Dynamic Cards

### Requirements

1. Create an HTML page that contains a text area and a button labeled *Create*.
1. When the user enters in text into the text area and then clicks the create button, use a factory function that creates a new DOM component that has a border, and includes it's own delete button.
1. Insert that new component into the DOM.
1. When the user clicks the *Delete* button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually [removed](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) from the DOM.

> **Pro tip:** The card's `id` attribute, and the button's `id` attribute should share some common value. Then, when the button is clicked, find the corresponding parent DOM component. Remember the `split()` method on a string? That will be helpful.

```html
<article class="card" id="card--1">
    <div>Hey, I entered some text</div>
    <div>
        <button id="delete--1">Delete This Card</button>
    </div>
</article>
<article class="card" id="card--2">
    <div>Hey, I entered some text</div>
    <div>
        <button id="delete--2">Delete This Card</button>
    </div>
</article>
```
