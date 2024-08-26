/* The document object represents your web page.
If you want to access any element in an HTML page, you always start with accessing the document object.
Below are some examples of how you can use the document object to access and manipulate HTML. */

/* document.getElementById(id)	Find an element by element id
document.getElementsByTagName(name)	Find elements by tag name
document.getElementsByClassName(name)	Find elements by class name */

document.getElementById("myH1").textContent = 'hi';
document.getElementById("P").textContent = 'hello';

/* variable= A container that store a value. Behave as if it were the value container */
/* two step to create a variable:
1. declaration: let x;
2. assignment x=100; */
//variable cant have the same name. For ex: only 1 variable call , cant have another one

let x;
x=100;
let y=120;
// Both work the same
console.log(x);
console.log(y);


let age=100;
let money=25;
console.log(age);
console.log(money);
console.log(`you are ${age} years old`);
console.log(`the price is ${money} dollars`);
// dont know why ('') dont work but (``) work.

console.log(typeof age);
console.log(typeof 'word');
/* In JavaScript, typeof is an operator that returns a string indicating the type of the unevaluated operand. 
It is useful for determining the type of a variable or an expression. */

/* Data types are the classifications we give to the different kinds of data that we use in programming. 
In JavaScript, there are eight fundamental data types:
Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
BigInt: Any number, greater than 253-1 or less than -(253-1), with n appended to the number: 1234567890123456n.
String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ", though we prefer single quotes. Some people like to think of string as a fancy word for text.
Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null. undefined means that a given value does not exist.
Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
Object: Collections of related data.
The first 7 of those types are considered primitive data types. 
They are the most basic data types in the language. 
Objects are more complex, and you’ll learn much more about them as you progress through JavaScript. 
At first, eight types may not seem like that many, but soon you’ll observe the world opens with possibilities once you start leveraging each one. As you learn more about objects, you’ll be able to create complex collections of data. */