/* Question no 1

1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser:

let a = 10;
document.write("Result:<br>");
document.write("The value of a is: " + a + "<br>");
document.write("...........................................<br><br>");

// pre-increment
document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// post-increment
document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// pre-decrement
document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

// post-decrement
document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");

Question no 2

2. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;

let a = 2, b = 1;

document.write("Initial values: a = " + a + ", b = " + b + "<br><br>");

let result = --a - --b + ++b + b--;


document.write("--a = " + a + "<br>");
document.write("--a - --b = 1<br>");
document.write("--a - --b + ++b = 2<br>");
document.write("--a - --b + ++b + b-- = 3<br><br>");

document.write("Final values:<br>");
document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("result = " + result + "<br>");


Question no 3


3. Write a program that takes input a name from user &
greet the user.


let userName = prompt ("What's your name ?")
alert (   `Hello ${userName} ! Welcome  to our website`  )

Question no 4


5. Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default.


let num = +prompt ("Enter your number")

if (!num)
{
    num=5 ;
}

for (let i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + (num * i) + "<br>");
}


Question no 5

6. Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table)

let subject1 = prompt("Enter first subject name:");
let subject2 = prompt("Enter second subject name:");
let subject3 = prompt("Enter third subject name:");

let totalMarks = 100;

let obtainedSub1 = +prompt("Enter obtained marks for " + subject1 + ":");
let obtainedSub2 = +prompt("Enter obtained marks for " + subject2 + ":");
let obtainedSub3 = +prompt("Enter obtained marks for " + subject3 + ":");

let grandTotal = totalMarks * 3;
let obtainedTotal = obtainedSub1 + obtainedSub2 + obtainedSub3;
let percentage = (obtainedTotal / grandTotal) * 100;

document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedSub1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedSub2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedSub3 + "</td></tr>");
document.write("<tr><th>Total</th><th>" + grandTotal + "</th><th>" + obtainedTotal + "</th></tr>");
document.write("</table><br>");

document.write("<b>Percentage: " + percentage.toFixed(2) + "%</b>"); */

