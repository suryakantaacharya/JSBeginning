console.log("Hello");

//variables 
let x = "x";
x =  3;
console.log(x);
var v = "v"; //not used anymore
const c = "c"; //only defined once can't be changed
//c = 2 // fails throws error
console.log(c)

let string = "surya";
let age = "23"
let isMarried = false;
console.log("Name of the person is" + string + "age is:" + age + "married" + isMarried);

let answer = 0;
for(let i=0 ; i<=100 ; i = i + 1){
    answer = answer + i;
}
console.log(answer)

const personArray = ["Surya1" , "Surya2"];
personArray.forEach(surya =>{
    console.log(surya);
});
