/* 
In Javascript, string are sequences of characters enclosed in either single or double quotes. 
*/

let greeting = "hello world";
console.log(greeting);

// ----------------------

/* 
Template Literals
this syntax allows you to seamlessly include variables and expressions directly in the string.
*/
const name = 'john';
const greet = `hello, ${name}`;
console.log(greet);

const num1 = 5;
const num2 = 10;
const result = `the sume of ${num1} and ${num2} is ${num1 + num2}.`;
console.log(result);

// ----------------------

function customTag(strings, ...values) {
    let re = '';
    for(let i = 0; i < strings.length; i++) {
        re += strings[i];
        if(i < values.length) {
            re += values[i];
        }
    }
    return re;
}

const name2 = 'john';
const age = 30;
const taggedResult = customTag`my name is ${name2} and 
I am ${age} years old.`;

console.log(taggedResult);

// ----------------------

/*
The String constructor
In Javascript, the string constructor is a way to create a string object. While most developers commonly create
strings using string literals(single or double quotes) or template literals(backticks),
the String constructor provides an alternative approach for creating strings
*/

const str = new String('This is a string');
console.log(str);

const primitiveString = 'hello world';
const objectString = new String('hello world');
console.log(typeof primitiveString);
console.log(typeof objectString);


