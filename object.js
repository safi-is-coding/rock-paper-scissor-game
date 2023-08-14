/*
// syntax tocreate an object
let person = {
    name : "safi",
    age : 30
};
console.log(person.name);

//dot notation
person.name = "maz";
console.log(person.name);

//bracket notation
person['name'] = 'mary';
console.log(person['name']);


// adding a new vlaue to an object
person.newValue = 'maz';
console.log(person);

//delete a value in the object
delete person.newValue;
console.log(person);


let word = ['rock','paper','scissor'];

options = Math.floor(Math.random()*word.length);
console.log(options);

*/


// Auto-boxing

console.log("hello".length);
console.log("hello".toUpperCase());

//object-reference

const object1 = {
    message : 'good job'
};

const object2 = object1;

console.log(object1);

object1.message = "hello maz";
console.log(object1);
console.log(object2);

const object3 = {
    message : 'good job'
};

console.log(object3 === object2); // since it compares with the reference not the values therefore it will result in false 
console.log(object1 === object2);

// shortcut for objects known as destructing
//an easier way to take the properties out of the object

const object4 = {
    message : 'hello safi',
    price : 200
};

// const message = object4.message

const { message,price } = object4;
console.log(message);
console.log(price);