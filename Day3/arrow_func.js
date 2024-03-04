const user = {
    usrname: "surya" ,
    amount: 1234,

    welcomeMsg: function() {
        console.log(`${this.usrname} , hello from him`);
        console.log(this);
    }
    
}


user.welcomeMsg()


console.log(this);


const surya = (num1 , num2) => {
return num1+num2
}

const surya2 = (num1 , num2) => num1+num2

console.log(()=> (num1 + num2))


console.log(surya(1,2));
console.log(surya2(1,2));

//Iffe

(function dbc(){
    console.log("dbc")
})();

(() => {
    console.log("dbccc")
})();

((name) => {
    console.log(`${name} named`)
})("surya");