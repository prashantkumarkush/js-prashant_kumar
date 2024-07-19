// primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// reference (non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name : "prashant",
    age: 20,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3