/*
> In javascript, parameters are the itesm listed between the () while delcaring
a function. this is like telling JS that you will send some value to the 
function. that mean that animal is just a placeholder for some future value.
> in the last line while calling the function and passing the value 'goat', which is the argument,
telling the favoriteAnimal function, "please send 'goat' to the favoriteAnimal" function and
use 'goat' wherever the'animal' placeholder is.
> if the function is called without argument or without pacing the value,
then the parameter will be assigned the value "undefined".
> if a value is not provided we can make use of default parameters. this allows us to 
assign a default value to a parameter if no value is provided when the function is called.
*/
function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
  }

console.log(favoriteAnimal('goat'));

// another example
function sum(param1, param2) {
    return param1 + param2;
}
console.log(sum(1,2));

// ----------------------------

/*
A variable declared inside a function is only visible inside a function. this is called the scope of the variable, this particualr scope is called the local scope.
Variable declared outside of a function are called global variables and are visible throughout the program.
*/
function myFunction() {
    let x = 10;
  }
// console.log(x); // error: reference error, because x is not defined.

let y = 10;
function my2Function() {
  console.log(y);
}
my2Function(); // no error as variable is declared globally

let x = 10;
function my3Function() {
  let x = 20;
  console.log(x);
}
my3Function();

// ----------------------------

/* 
in the below example, the function add() has a conditional statement that checks if the value of a is greater than 2. 
if the condition is met, the function will return the value of b and stop executing. 
if the condition is no met, the function will return the sum of a & b;
*/
function add(a, b) {
    if(a > 2){
      return b;
    }
  
    return a + b;
  }
  
  console.log(add(3, 7)); // Output: 7

// ----------------------------

// very good example
function addition(a, b = 12) {
    if(b > 11){
      return b * 2;
    } else if(a > 3){
      return b;
    }
  
    return a + b;
  }
  
  console.log(addition(3));

// ----------------------------

const sub = (c,d) => {
    return c - d;
}
console.log(sub(3,2));
/* 
> arrow funcstions are a more modern way to write functions in JS. They provide a more compact syntax compared to traditional function expression.
> In the example above, the arrow function add takes two parameters a and b and returns their sum. 
The return keyword is used to return the result of the addition operation.
> If the arrow function has only one expression, the curly braces {} and the return keyword 
can be omitted. and returns the same thing.
*/

// ----------------------------