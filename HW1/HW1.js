// task1
// in "index.html": <script>alert("Taras")</script>

// task2
let lastName = "Panasyuk";
console.log(lastName);
// in "index.html": <script src="HW1.js"></script>

// task3
let data1 = "one";
let data2 = "+1";
console.log (data1, data2);
data1=data2;
console.log (data1, data2);

// task4
const dog = {
    dogName: "Louis",
    dogAge: 3,
    male: true,
    numberOfMedals: undefined,
    weight: null
}
console.log(dog);

// task5
let isAdult = confirm ("Are you adult?");
alert (isAdult);
console.log (isAdult);

//task6
const me = {
    myName: "Taras",
    myLastName: "Panasyuk",
    myGroup: "LV732",
    myDateOfBirth: 1991,
    myDog: true,
}
console.log (
    me.myName,
    me.myLastName,
    me.myGroup,
    me.myDateOfBirth,
    me.myDog
    )
console.log (
    typeof me.myDateOfBirth,
    typeof me.myDog,
    typeof me.myGroup,
    typeof me.myName,
    typeof me.myLastName,
    )
let alsomyMoney = null;
let alsomyCar = undefined;
console.log (
    typeof alsomyMoney,
    typeof alsomyCar
    )

// task7
let login = prompt("Whats your login?");
let email = prompt("Whats your email?");
let password = prompt("Whats your password?");
console.log ("Dear " + login + ", your email is " + email + ", your password is " + password);


// task8
let sec = 60;
let min = 60;
let day = 24;
let month = 30;
alert ("Dear friend, did you know that in 1 hour, the are " + sec*min + " seconds and in 1 day, there are " + sec*min*day + " seconds and in 1 month, there are " + sec*min*day*month + " seconds.")