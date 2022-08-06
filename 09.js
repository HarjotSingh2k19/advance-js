// Hoisting

// Classic Hoisting
x = 6;
console.log(x);
var x;

// Initialisations are not hoisted 
console.log(y);
var y = 13;


getName();
console.log(getName);
console.log(a);
// getUser();
// test2();

var a = 5;

function getName(){
    console.log("Technical Suneja");
}

// will give error bcz it is treating it as variable not function(arrow,normal)
// test = not defined when invoked by getUser() above
const test = function getUser(){
    console.log("Like ")
}

const test2 = ()=>{
    console.log("Harry")
}




