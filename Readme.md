
##  Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?

---

 ## Answers  Start :-

 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById is used when you want to select one element using its id. It always returns a single element.

getElementsByClassName is used to select elements by class name. It returns a collection, so you usually need a loop to work with each item.

querySelector selects the first element that matches a CSS selector.
querySelectorAll selects all matching elements and returns a list that can be looped through easily.

2. How to create and insert a new element into the DOM

First, you create an element using document.createElement().
Then you can add text or attributes to it.
After that, you insert it into the page using methods like appendChild() or append().

This way, new elements can be added dynamically without reloading the page.

3. What is Event Bubbling and how does it work?

Event bubbling means when an event happens on an element, it also moves up to its parent elements.

For example, if you click a button inside a div, the button gets the event first, then the div, then the body.
This happens automatically unless it is stopped.

4. What is Event Delegation and why is it useful?

Event delegation means adding one event listener to a parent element instead of adding separate listeners to many child elements.

The parent listens for events coming from its children using event bubbling.
It is useful because it saves memory and also works for elements that are added later using JavaScript.

5. Difference between preventDefault() and stopPropagation()

preventDefault() stops the browser’s default action, like stopping a form from submitting or a link from opening.

stopPropagation() stops the event from moving to parent elements during bubbling.

They do different jobs but are often used together when handling events.