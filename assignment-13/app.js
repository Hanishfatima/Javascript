
/*QUESTION 01

1. Write a program that displays current date and time in
your browser.

let today = new Date ()
console.log(today);  */

/*QUESTION 02

2. Write a program that alerts the current month in words.
For example December.

const months = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
let now = new Date();
let currentMonth = months[now.getMonth() ];
alert(`Current month ${currentMonth}`) */

/*QUESTION 03

3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun.

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let nowDay = new Date() ;
let currentDay = days[nowDay.getDay()]
alert(currentDay.slice(0,3))  */

/*QUESTION 04

4. Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today. 

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date("Sunday","Saturday")
let currentDay = (days[today.getDay()])
if (currentDay === "Saturday" || currentDay === "Sunday" ){
    alert ("It's Fun day");
}
else {
    alert ("It's a working day")
} */

/*QUESTION 05

 5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”.
let now = new Date();
let date = now.getDate();

if (date < 16) {
  alert("First fifteen days of the month");
} else {
  alert("Last days of the month");
} */
  
/*QUESTION 06

 6. Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object.

let now = new Date();
minutesSince1970 = now.getTime() / (1000 * 60);
alert(`Minutes since midnight, Jan. 1, 1970: ${minutesSince1970}`); */

/*QUESTION 07

7. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”.

let now = new Date();
let hours = now.getHours();

if (hours < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
} */

/*QUESTION 08

8. Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate.

let laterDate = new Date(2020, 11, 31);
alert(laterDate); */

/*QUESTION 09

9. Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015

let ramadanStart = new Date(2015, 5, 18); // June is month 5 (0-based index)
let now = new Date();
let diffInTime = now.getTime() - ramadanStart.getTime();
let diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
alert(`Number of days since 1st Ramadan: ${diffInDays}`); */

/*QUESTION 10

10. Write a program that displays in your browser the
seconds that elapsed between the reference date and the
beginning of 2015.

let referenceDate = new Date(); 
let beginning2015 = new Date(2015, 0, 1); 
let diffInSeconds = Math.floor((referenceDate.getTime() - beginning2015.getTime()) / 1000);
document.write(`Seconds elapsed since beginning of 2015: ${diffInSeconds}`); */

/*QUESTION 11

11. Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser.

let currentDate = new Date()
let currentHours = currentDate.getHours()
currentDate.setHours(currentHours + 1)
document.write(`Updated date and time: ${currentDate}`) */

/*QUESTION 12

12. Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back?

let currentDate = new Date();
currentDate.setFullYear(currentDate.getFullYear() - 100);
alert(`Date 100 years back: ${currentDate}`);   */

/*QUESTION 13

13. Write a program to ask the user about his age. Calculate
and show his birth year in your browser.

let age = prompt("Enter your age:");
let currentYear = new Date().getFullYear();
let birthYear = currentYear - age;
document.write(`Your birth year is ${birthYear}`); */

/*QUESTION 14

14. Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

let customerName = prompt("Enter Customer Name:");
let currentMonth = new Date().toLocaleString('default', { month: 'long' });
let numberOfUnits = parseFloat(prompt("Enter number of units:"));
let chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
let latePaymentSurcharge = 350; // fixed surcharge

let netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
let grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

document.write(`<h2>K-Electric Bill</h2>`);
document.write(`<p><b>Customer Name:</b> ${customerName}</p>`);
document.write(`<p><b>Month:</b> ${currentMonth}</p>`);
document.write(`<p><b>Number of Units:</b> ${numberOfUnits}</p>`);
document.write(`<p><b>Charges per Unit:</b> ${chargesPerUnit.toFixed(2)}</p>`);
document.write(`<p><b>Net Amount Payable (within Due Date):</b> ${netAmountPayable}</p>`);
document.write(`<p><b>Late Payment Surcharge:</b> ${latePaymentSurcharge.toFixed(2)}</p>`);
document.write(`<p><b>Gross Amount Payable (after Due Date):</b> ${grossAmountPayable}</p>`); */












