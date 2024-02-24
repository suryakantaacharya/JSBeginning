// primitive -> stack , Heap -> Non primitive

let myName = "suryakanta acharya"
let anotherName = myName

console.log(anotherName);

let user1 = {
    userName: "surya",
    email: "surya@a.com"
}
let user2 = user1

user2.email = "newemail@"

console.log(user1.email);
console.log(user2.email);
