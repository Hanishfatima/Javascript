/* Question # 1

1. Declare a variable called age & assign to it your age. Show
your age in an alert box. 

let age = "15"

alert("I  am " +age +" years old" )

Question # 2

2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”.


let visits = localStorage.getItem("visits");
if (visits === null) {visits = 1 ;}
else {visits = Number ( visits) + 1 ;}
localStorage.setItem("visits" , visits) ;

alert ("You have visited this site" + visits  +  " times")


Question # 3

3. Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser:

let birthYear = "My Birth year is 2010"
document.write (birthYear)


Question # 4

  A visitor visits an online clothing store
  www.xyzClothing.com . Write a script to store in variables
  the following information:
   a. Visitor’s name
  b. Product title
   c. Quantity i.e. how many products a visitor wants to
  order
  Show the following message in your browser: “John
  Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

let visitorName = "John Doe"
let order = "5"
let productTittle = "T-shirt(s)"

document.write(visitorName+ "  ordered  " + order +"  " +  productTittle + "   on XYZ Clothing store")  /*