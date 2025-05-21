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

// // ANONYMOUS FUNCTION EXAMPLE
// EX: When the user presses a key, the browser will call the function you provided, 
// and will pass it a parameter containing information about this event, including the particular key that the user pressed

// function logKey(event) {
//   console.log(`You pressed "${event.key}".`);
// }
// textBox.addEventListener("keydown", logKey);

// Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener():
let textBox = document.getElementById("textBox");
textBox.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});

