/*QUESTION 1

 1. Write a function that displays current date & time in your
browser.

function showDateTime() {
  let now = new Date();
  document.write(`Current Date and Time: ${now}` );}    
showDateTime(); */

/*QUESTION 2

2. Write a function that takes first & last name and then it
greets the user using his full name.

function greetUser() {
  let firstName = prompt("Enter your first name:");
  let lastName = prompt("Enter your last name:");
  let fullName = firstName + " " + lastName;
  alert(`Hello, ${fullName}! Welcome!`);
}
greetUser(); */

/*QUESTION 3

3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers.

function addNumbers() {
  let num1 = Number(prompt("Enter first number:"));
  let num2 = Number(prompt("Enter second number:"));
  let sum = num1 + num2;
  return sum;
}

let result = addNumbers();
alert(`The sum of the two numbers is: ${result}`);
 */

/*QUESTION 4

4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser.

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
    default:
      result = "Invalid operator";
  }

  return result;
}

let result = calculator(num1, num2, operator);
document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);

*/

/*QUESTION 5

5. Write a function that squares its argument. 

function square(num) {
  return num * num;
}
let number = Number(prompt("Enter a number:"));
let result = square(number);
alert(`The square of ${number} is ${result}`);*/

/*QUESTION 6

6. Write a function that computes factorial of a number.

let number = Number(prompt("Enter a number:"));
let result = factorial(number);
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

alert(`The factorial of ${number} is ${result}`);  */

function showCounting(start, end) {
  for (let i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}

let startNum = Number(prompt("Enter start number:"));
let endNum = Number(prompt("Enter end number:"));

showCounting(startNum, endNum);







