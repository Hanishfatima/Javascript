
/*QUESTION # 1

1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).
let num = prompt ("Enter a character:");
let asciiCode = num.charCodeAt(0);

if (asciiCode >=48 && asciiCode <=57){
    alert("It's a Number")
}

else if (asciiCode >=65 && asciiCode <=90){
    alert("It's an Uppercase letter")
}

else if (asciiCode >=97 && asciiCode <=122){
    alert("It's a Lowercase letter")
}
else {
    alert ("Not a number or letter.")
}


QUESTION # 2

2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.
let num1 = +prompt ("Enter first number:")
let num2 = +prompt ("Enter second number:")

if (num1 > num2 ){
    alert (`${num1}  is larger `)
}

else if ( num1 < num2 ){
    alert(`${num2}  is larger`)
}

else("Both numbers are equal.")




QUESTION # 3
3. Write a program that takes input a number from user &
state whether the number is positive, negative or zero.

let value = +prompt("Enter the number")
if (value > 0){
    alert("Value is Positive")

}

  if (value < 0 ){
        alert("Value is Negitive")
    }

    else {
        alert ("Zero")
    }



QUESTION # 4

Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise
let vowelsLetters = "aeiouAEIOU";
let userCharacter = prompt("Enter a character")
if (vowelsLetters.includes (userCharacter)){
    alert("True")
}
else {
    alert("False")
}



QUESTION # 5

5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise.

let userPassword = "hello1234";
let userData = prompt("Enter your password")

if (!userData){
    alert("Please enter your password")
}

else if (userPassword===userData){
    alert("Correct! The password you entered matches the original password")
}

else {
    alert("“Incorrect password”")
}



QUESTION # 6

6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
}

let greeting;
let hour = 13;
if (hour < 18) {
greeting = "Good day";

}
else {
greeting = "Good evening";
}

console.log(greeting);/*
