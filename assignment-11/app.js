//QUESTION O1
//1. Write a program that takes two user inputs for first and
//last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.

// ***
//let firstName =prompt("Write your first name?")
//let lastName =prompt("Write your last name?")
//alert(`Hello ${firstName} ${lastName}`)

//QUESTION O2
//2. Write a program to take a user input about his favorite
//mobile phone model. Find and display the length of user
//input in your browser

//***

//let userFavMob = prompt("Write your favourite mobile phone model?");
//let Length = userFavMob.length ;
//document.write (`My favourite phone is : ${userFavMob} length of string ${Length}`)

//QUESTION O3
//Write a program to find the index of letter “n” in the word
//“Pakistani” and display the result in your browser .

//***
//let word = "Pakistani";
//let indexNo = word.indexOf("n"); 
//document.write (`String : ${word} <br /> index of 'n': ${indexNo}`)

//QUESTION O4
//4. Write a program to find the last index of letter “l” in the
//word “Hello World” and display the result in your browser.

//***
//let word = "Hello World";
//let lastIndexNum = word.lastIndexOf("l");
//document.write (`String ${word} <br /> Last index of 'l' : ${lastIndexNum}`)

//QUESTION O5
//5. Write a program to find the character at 3rd index in the
//word “Pakistani” and display the result in your browser.

//***
//let word = "Pakistani";
//let result = word.charAt(3); 
//document.write (`String : ${word} <br /> Character at index 3: ${result}`)

//QUESTION O6
// Repeat Q1 using string concat() method.
//***
//let firstName =prompt("Write your first name?")
//let lastName =prompt("Write your last name?")
//let fullName = firstName.concat (" ",lastName);
//alert (fullName)

////QUESTION O7
//7. Write a program to replace the “Hyder” to “Islam” in the
//word “Hyderabad” and display the result in your browser.

//***
//let city = "Hyderabad";
//let replace = city.replace("Hyder","Islam");
//document.write(`City : ${city} <br /> After replacement: ${replace}`)

//QUESTION O8
//8. Write a program to replace all occurrences of “and” in the
//string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and
//football together.”;

//***
//let message = "Ali and Sami are best friends. They play cricket and football together.";
//let replace = message.replace(/and/g,"&")
//document.write(` Message : ${message} <br /> After replacement: ${replace} `)

//QUESTION O9
//9. Write a program that converts a string “472” to a number
//472. Display the values & types in your browser.

//***

//let str1 = "472" 
//document.write(`Value : ${str1} <br /> Type : ${typeof str1}  <br />`)
//let str = "472";
//let num = Number(str);
//document.write(`Value: ${num} <br> Type: ${typeof num}`);

//QUESTION 10
//10. Write a program that takes user input. Convert and
//show the input in capital letters.

//***
//let userInput = prompt ("Please enter any word")
//let upperCase = userInput.toUpperCase();
//document.write(upperCase)

//QUESTION 11


//***
//let userInput = prompt("Enter any text:");
//let titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
//document.write( `User Input : ${userInput} <br /> title case : ${titleCase}`)

//QUESTION 12
//12. Write a program that converts the variable num to
//string.
//var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.

//***

//
//let num = 35.36 
//let changed = parseInt(num)
//document.write(`Number : ${num} <br /> Result : ${changed}`)

//QUESTION 13
//Write a program to take user input and store username in a variable.
//  If the username contains any special symbol among [@ . , !], prompt
//  the user to enter a valid username. For character codes of [@ .

// let userInput = prompt('Enter your name: ');
// let  charCode;
// for(var i = 0 ;  i < userInput.length ; i++){
//     charCode = userInput.charCodeAt(i);
//      if(charCode === 33|| charCode===44||charCode===46||charCode===64){
//         alert("Please enter a valid username")
//      }
// }

//QUESTION 14
// Write a program to enable “search by user input” in an array.
//  After searching, prompt the user whether the given item is found in the list or not.
 
//let A = ["cake", "apple pie", "cookie", "chips", "patties"];
//let userInput = prompt("Welcome to ABC Bakery! What do you want to order?").toLowerCase();
//
//if (A.includes(userInput.toLowerCase())) {
//  alert(`${userInput } is available at index ${A.indexOf(userInput)} in our bakery.`);
//} else {
//  alert(`We are sorry, " ${userInput}  is not available in our bakery.`);
//}

//QUESTION 15

//..................

//QUESTION 16
// Write a program to convert the following 
// string to an array using string split method.
//  var university = “University of Karachi”;


// let str='University of Karachi';
// let arr =str.split("");
// for(let i=0;i<str.length;i++){
//     document.write(arr[i]+'<br>')
// }

//QUESTION 17
// Write a program to display the last character of a user input. 
//
// let userInput=prompt('Write any word');
// document.write(`User input :${userInput} <br> Last character of input: ${userInput[userInput.length-1]}`)

//QUESTION 18
//18. You have a string “The quick brown fox jumps over the
//lazy dog”. Write a program to count number of
//occurrences of word “the” in given string.

//let  str="The quick brown fox jumps over the lazy dog";
// str =str.toLowerCase();
// let count=str.match(/the/g);
//let length=count.length;
// document.write(`Text:'${str}<br> There are ${length} occurence(s) of word "the"`)
