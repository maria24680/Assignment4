## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer to the question no 1:

Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:

getElementById(): It is a JavaScript function that selects an HTML element by its unique Id and allows manipulate it.
Example: let element = document.getElementById("myDiv"); 
		console.log(element.innerText); 
		//Output: Hello

getElementsByClassName(): Selects all HTML elements that have a specific class name. It returns an HTMLCollection,which is live and updates automatically.
Example: let elements = document.getElementsByClassName("box"); 
	console.log(elements.length); 
	//Output: total number of elements with class "box"

querySelector(): Selects the first element in the document that matches a CSS selector (ID,class,or tag).It only returns the first matching element.
Example: let divMain = document.querySelector("#main"); 
	let firstBox = document.querySelector(".box"); 
	let firstDiv = document.querySelector("div")

### 2. How do you create and insert a new element into the DOM?

Answer to the question no 2:

Firstly Create element. 
Secondly Set content or attributes.
And lastly Insert into the DOM.
Example: let newPara = document.createElement("p"); 
newPara.innerText = "I am a new paragraph!"; 
let container = document.getElementById("container"); 
container.appendChild(newPara);

### 3. What is Event Bubbling? And how does it work?

Answer to the question no 3:

Event Bubbling is when an event triggered on a child element automatically moves up to its parent elements in the Dom tree.The event first occurs on the child,then triggers its parrent,then grandparent,and so on.
Example: If a button is inside div2, which is inside div1, the event flow is: button → div2 → div1.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer to the question no 4:

Event Delegation is when you attach a single event listener to a parent element instead of adding listeners toeach child.The parent listens for events from its children because of event bubbling.We can determine which child triggered the event using event.target.This approach saves memory and works for dynamically added elements.like a parent watching all children with one camera instead of giving each child their own camera.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer to the question no 5:

preventDefault()

Stops the default action of an element,for example,preventing a link from navigating or a from submitting when clicked.

stopPropagation()

Stops the event from bubbling up,so parent element listeners will not trigger.