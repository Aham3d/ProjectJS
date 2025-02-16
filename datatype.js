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

// ----------------------

/* 
HTML Templates are commonly used in frontend development for creating HTML templates dynamically: 
It uses template string syntax, which allows for embedded expressions inside the string, such as ${itemName} and ${itemDescription}

*/
const itemName = 'Smartphone';
const itemDescription = 'the latest model with adavanced features.';

const htmlTemplate = `
    <div class='item'>
        <h2>${itemName}</h2>
        <p>${itemDescription}</p>
    </div>
`;

// gets the container from the HTML by its ID
const itemContainer = document.getElementById('item-container');

// inerting the template into the contianer
// assigning htmlTemplate to itemContainer.innerHTML which replaces the contents of the itemContainer element with the HTML structure inside htmlTemplate.
itemContainer.innerHTML = htmlTemplate;

// function to insert the template into the page
// need to hide the above two lines of code, because it's already there before clicking the button
function displayProduct() {
    document.getElementById('item-container').innerHTML = htmlTemplate;
}


// ----------------------