// task1
let x = 1;
let y = 2;

let res1 = String(x)+String(y);
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = true + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x != y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = x + x * "x + x";
console.log(res4); // NaN
console.log(typeof res4); // "number"

// task2
let number = prompt("Type number here");
if (number < 0) {
    console.log("Number must be even/odd positive and multiple 2 or 7");
} 
else if (number % 2 == 0 && number % 7 == 0) {
    console.log(number,"- number is even positive, multiple of 7");
} 
else if (number % 2 == 0) {
    console.log(number,"- number is even positive");
} 
else console.log(number,"- number is positive, multiple of 7");

// task3
const arr = [];
arr[0] = 13;
arr[1] = "winter";
arr[2] = 1 < 2;
arr[3] = null;

alert(arr.length);
arr[4]= prompt("Enter anything here");
alert(arr[4]);
arr.shift();
alert(arr);

// task4
let cities = ["Rome", "Lviv", "Warsaw"];
let newcities = cities.join('*');

alert(newcities);

// task5
let isAdult = prompt("How old are you?");
if (isAdult >= 18) {
    alert("You are adult");
} 
else if (isAdult < 18) {
    alert("You are not adult");
} 

// task6

// task7
