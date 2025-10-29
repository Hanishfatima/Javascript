/* QUESTION # 1

1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights”

     let city = prompt ("What's your city name")
    if ( city === "karachi"){
    alert("“Welcome to city of lights” ")
     }
    else {
   alert ("“Enjoy living in your city!”")
     }

QUESTION # 2

2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am.

let gender = prompt 
if (gender === male){
    alert(" Good Morning Sir!..")
    if 
}

const gender = prompt ("Enter your Gender ")
const  message = (gender === "male")? " Good Morning Sir!.." :
 (gender === "female")? " Good Morning Ma'am!.." :
 "Good Morning..!";
alert ( message)

QUESTION # 3

    3. Write a program to take input color of road traffic signal
    from the user & show the message according to this table:

const trafficSignals = prompt ("What is the color of road traffic signal?")
const colors = (trafficSignals ==="red")? "Must Stop" :
 (trafficSignals ==="yellow")? "Ready to move" : 
 (trafficSignals === "green")? "Move now" : 
"Be Safe"

document.write (`
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <th>Signal Color</th>
            <th>Message</th>
        </tr>
        <tr>
           <td>${trafficSignals}</td>
           <td>${colors}</td>
        </tr>
    </table>
    `)


QUESTION # 4

4. Write a program to take input remaining fuel in car (in
litres) from user. If the current fuel is less than 0.25litres,
show the message “Please refill the fuel in your car”

let fuel = +prompt ("Enter the remaining fuel in your car (in litres):")
let messages = (fuel <= 0.25)? "“Please refill the fuel in your car”" : "Have a Good Day" ;
alert ( messages)  /*