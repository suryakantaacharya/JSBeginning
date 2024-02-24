//let's start
const marks = 69;
const pass = true;

const score = 400;
const balance = new Number(100);
console.log(score);
console.log(balance.toString.length);

//precision

const otherNo = 123.1214214;
console.log(otherNo.toPrecision(4));

//a weird behaviour
const otherNo2 = 12333.1214214;
console.log(otherNo2.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
//changing to india standard
console.log(hundreds.toLocaleString("en-IN"));

//Maths

console.log(Math);
console.log(Math.abs(-4)); //absolute
console.log(Math.round(3.5)); // round up

console.log(Math.min(3, 3434, 5, 2, 34, 45));
console.log(Math.max(3, 3434, 5, 2, 34, 45));

//math.random
console.log(Math.random() * 10 + 1);

//between two values
const max = 30;
const min = 10;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
