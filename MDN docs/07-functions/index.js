function myFunction() {
  alert("hello");
}
// to actually use a function after it has been defined, 
// you've got to run — or invoke — it. This is done by including 
// the name of the function in the code somewhere, followed by parentheses.
myFunction();
// calls the function once

// Some functions require parameters to be specified when you are invoking them 
// — these are values that need to be included inside the function parentheses, which it needs to do its job properly.
// As an example, the browser's built-in Math.random() function doesn't require any parameters. When called, 
// it always returns a random number between 0 and 1:
const myNumber = Math.random();
// The browser's built-in string replace() function however needs two parameters
// — the substring to find in the main string, and the substring to replace that string with:
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString); // I am a sausage

// Sometimes parameters are optional — you don't have to specify them. If you don't, 
// the function will generally adopt some kind of default behavior. As an example, the array join() function's parameter is optional:
const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString); // returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString); // returns 'I,love,chocolate,frogs'

// DEFAULT PARAMETERS
// If you're writing a function and want to support optional parameters, 
// you can specify default values by adding = after the name of the parameter, followed by the default value:
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}
hello("Ari"); // Hello Ari!
hello(); // Hello Chris!

// ANONYMOUS FUNCTION EXAMPLE
// EX: When the user presses a key, the browser will call the function you provided, 
// and will pass it a parameter containing information about this event, including the particular key that the user pressed

// function logKey(event) {
//   console.log(`You pressed "${event.key}".`);
// }
// textBox.addEventListener("keydown", logKey);

// Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener():
let textBox = document.getElementById("textBox");
// textBox.addEventListener("keydown", function (event) {
//   console.log(`You pressed "${event.key}".`);
// });

// ARROW FUNCTION
let output = document.getElementById("output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}".`;
});

// SCOPE
// When you create a function, the variables and other things defined inside the function are inside their own separate scope, 
// meaning that they are locked away in their own separate block, unreachable from code outside the functions.

// The top-level outside all your functions is called the global scope. Values defined in the global scope are accessible from everywhere 
// in the code.

// Passing information to a function
// To make a function more reusable you'll often want to pass information into it. If we consider our displayGreeting example above, 
// it will only display Hello, world!. Not the most useful function one could create. If we want to make it a little more flexible, 
// like allowing someone to specify the name of the person to greet, we can add a parameter. A parameter (also sometimes called an argument), 
// is additional information sent to a function.
function displayGreeting(name) {
  const message = `Hello, ${name}!`;
  console.log(message);
}
displayGreeting("name")

// Return values
// Functions can return values using the `return` keyword.
// This is useful when we want to calculate a result and use it elsewhere,
// instead of just logging to the console.
// The returned value can be stored in a variable like any other data.
function createGreetingMessage(name) {
  const message = `ohio, ${name}`;
  return message;
}
// storing function to a variable
const greetingMessage = createGreetingMessage('Christopher');
console.log(greetingMessage);
