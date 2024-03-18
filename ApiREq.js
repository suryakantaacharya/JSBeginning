// const user = "surya  "

// Object.prototype.trimString =  function(){
//     console.log("surya here");
// }

// user.trimString();
const anotherUsername = "sury    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()