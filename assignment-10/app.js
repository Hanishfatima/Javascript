/*QUESTION 01

let arr = [[],[]]


QUESTION 02

let arr = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
for (let i = 0 ; i < arr.length ; i++){
document.write(arr[i] + "<br />" )
}



QUESTION 03

for (let i = 1 ; i <= 10 ; i++ ){
    document.write(i + "<br />" )
}


QUESTION 04

let userNum = prompt ("Which table you wanna print ?")
let tableLength = +prompt ("How many times do you have to run it?")
for (let i = 1 ; i <= tableLength ; i++){
    document.write (`${userNum} x ${i} = ${userNum*i} <br />` )
}

QUESTION 05

let fruits = ["apple", "mango", "banana", "orange", "strawberry"]
for (let i = 0 ; i < fruits.length ; i++){
    document.write(fruits + "<br />")
}
document.write("<br />")

for (let i = 0 ; i < fruits.length ; i++){
      document.write(`Element at index ${i} is ${fruits[i]} <br />`)

}

QUESTION 06
(a):-
for (let i=1 ; i <=15 ; i++){
    document.write(i) 
    document.write("<br />")
}

(b):-

  for (let i=10 ; i>= 1 ; i--){
    document.write(i) 
    document.write("<br />")

}  
(c):-

  for (let i=0 ; i <= 20 ; i= i+2){
    document.write(i) 
    document.write("<br />")

}  

(d):-

  for (let i=1 ; i <= 20 ; i= i+2){
    document.write(i) 
    document.write("<br />")

}  

(e):-

  for (let i=2; i <= 20 ; i= i+2){
    document.write(`${i}k`) 
    document.write("<br />")

}  


QUESTION 07
let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
let items = prompt("What will you take?")
let found = false;
for (i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i] === items) {
        document.write(`${items} are available at index ${i} in our bakery`)

        found = true
        break
    }
} 
if (!found){
       document.write(`${items} is not available in our bakery.`);
}


QUESTION 08
const numbers =[24,53,78,91,12]
let largestNum = numbers[0]
for (let i=0; i < numbers.length ; i++){
    if(numbers[i]>largestNum){
        largestNum=numbers[i]
    }
}
document.write(largestNum)

QUESTION 09
const numbers =[24,53,78,91,12]
let largestNum = numbers[0]
for (let i=0; i < numbers.length ; i++){
    if(numbers[i]<largestNum){
        largestNum=numbers[i]
    }
}
document.write(largestNum)


QUESTION 10
for (i=5; i<=100;i=i+5 ){
    document.write(`${i}<br />`)
} */