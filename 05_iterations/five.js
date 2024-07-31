const coding = ["js", "ruby", "python", "cpp"]

// coding.forEach( function (val){
//   console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printMe)      .... not running


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
   { 
    languageName:"javascript",
    languageFileName:"js"
},
   { 
    languageName:"java",
    languageFileName:"java"
},
   { 
    languageName:"python",
    languageFileName:"py"
},
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})