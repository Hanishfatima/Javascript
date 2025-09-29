/* QUESTION 01

1. Declare an empty array using JS literal notation to store
student names in future.

let studentNameLiteral =[];


QUESTION 02
2. Declare an empty array using JS object notation to store
student names in future.

let studentNameLiteral = new Array ()

QUESTION 03
Declare and initialize a strings array.

let pakistanTeam = ["Imran Khan", "Sohaib Akhtar", "Shahid Afridi" , "Sarfaraz" , "Shaheen Afridi"]

QUESTION 04
4. Declare and initialize a numbers array.

let numbers = [1,2,3,4,5]

QUESTION 05
5. Declare and initialize a boolean array.

let booleanArray = [Boolean(7) ,Boolean("hanish"), Boolean(0), Boolean("abC")]
console.log(booleanArray);

QUESTION 06
6. Declare and initialize a mixed array.

let arr = [1,"Hanish",Boolean(0)]
console.log(arr);

QUESTION 07
7. Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like:

let educationQualifications = ["SSC", "HSC", "BCS",
"BS", "BCOM", "MS", "M. Phil", "PhD"]
for(let i = 0; i < educationQualifications.length; i++){
    document.write(educationQualifications[i] + "<br>");
}


QUESTION 08
8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:
 Array of student names
let students = ["Ali", "Sara", "Hanish"];

 Array of their scores
let scores = [400, 350, 480];

 Total marks
let totalMarks = 500;

 Loop to display score and percentage
for (let i = 0; i < students.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    document.write("Student: " + students[i] + "<br>");
    document.write("Score: " + scores[i] + "/" + totalMarks + "<br>");
    document.write("Percentage: " + percentage + "%<br><br>");
}


QUESTION 09

 Initialize array with color names
let colors = ["Red", "Blue", "Green", "Yellow"];
document.write("Initial array: " + colors + "<br><br>");

 a. Add color to the beginning
let colorStart = prompt("Which color do you want to add at the beginning?");
colors.unshift(colorStart);
document.write("After adding at beginning: " + colors + "<br><br>");

 b. Add color to the end
let colorEnd = prompt("Which color do you want to add at the end?");
colors.push(colorEnd);
document.write("After adding at end: " + colors + "<br><br>");

 c. Add two more colors to the beginning
colors.unshift("Purple", "Orange");
document.write("After adding two colors at beginning: " + colors + "<br><br>");

 d. Delete the first color
colors.shift();
document.write("After deleting first color: " + colors + "<br><br>");

 e. Delete the last color
colors.pop();
document.write("After deleting last color: " + colors + "<br><br>");

 f. Add color at user-defined index
let addIndex = parseInt(prompt("At which index do you want to add a color?"));
let addColor = prompt("Which color do you want to add?");
let removeCount = parseInt(prompt("How many colors do you want to remove at this index?"));
colors.splice(addIndex, removeCount, addColor);
document.write("After adding/removing at index: " + colors + "<br><br>");

 g. Delete color(s) at user-defined index
let delIndex = parseInt(prompt("At which index do you want to delete color(s)?"));
let delCount = parseInt(prompt("How many colors do you want to delete?"));
colors.splice(delIndex, delCount);
document.write("After deleting color(s): " + colors + "<br><br>");


QUESTION 10
10. Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.

 Array of student scores
let scores = [320, 450, 210, 390, 280];

// Display original scores
document.write("Original Scores: " + scores + "<br><br>");

// Sort array in ascending order
scores.sort(function(a, b) {
    return a - b;
});

// Display sorted scores
document.write("Sorted Scores (Ascending): " + scores);




QUESTION 11
11. Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array.

// Initialize array with city names
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Copy 3 elements to selectedCities array
let selectedCities = cities.slice(1, 4); // copies index 1 to 3 (Lahore, Islamabad, Quetta)

// Display arrays
document.write("Cities: " + cities + "<br>");
document.write("Selected Cities: " + selectedCities);


QUESTION 12
12. Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)

 Initialize array
var arr = ["This ", " is ", " my ", " cat"];

// Create single string using join
var singleString = arr.join("");

// Display result
document.write("Combined String: " + singleString);

QUESTION 13
13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)

 Create a new array
let fifoArray = [];

// Add values one by one
fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");
fifoArray.push("Fourth");

// Display values in FIFO order
document.write("FIFO Order:<br>");
while(fifoArray.length > 0) {
    document.write(fifoArray.shift() + "<br>");
}

QUESTION 14
14. Create a new array. Store values one by one in such a way//
that you can access the values in reverse order. (Last In-
First Out)

 QUESTION 14: LIFO (Last In First Out) example

 Create a new array
let lifoArray = [];

// Store values one by one
lifoArray.push("Apple");
lifoArray.push("Banana");
lifoArray.push("Mango");
lifoArray.push("Orange");

// Access values in reverse order (LIFO)
document.write("LIFO Order:<br>");
while (lifoArray.length > 0) {
    document.write(lifoArray.pop() + "<br>");
}


QUESTION 15
15. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method:


 QUESTION 15: Phone manufacturers dropdown

 Array of phone manufacturers
let phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Create dropdown menu
document.write("<select>");
for (let i = 0; i < phones.length; i++) {
    document.write("<option>" + phones[i] + "</option>");
}
document.write("</select>");
*/