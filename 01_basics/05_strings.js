const name = "prashant";
const repoCount = 50 

// console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);


const gameName = new String('prashant-kumar')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-2,1)
console.log(anotherString);

const newStringOne = " prashant"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://prashant.com/prashant%20kumar"

console.log(url.replace('%20', '-'));

console.log(url.includes('sunder'))


console.log(gameName.split('-'));