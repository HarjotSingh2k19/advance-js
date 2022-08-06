// feature complete...

// Rest and Spread Operator

// Example Rest - Combine recieve

function addNumbers(a,b,c,...other){
    console.log(other)
    return a+b+c;
}
const res = addNumbers(2,5,6,8,9)
console.log(res)


// Spread - Opposite of Rest - Combine Pass

var names = ["Ajay","Anuj","Vivek","Ram"];

function getNames(name1,name2,name3){
    console.log(name1,name2,name3)
}

// Three ways to do recieve same thing
// getNames(names[0],names[1],names[2],names[3])
getNames(...names)  // Spread (function mei jitne chahe arguments pass krlo)
// getNames(names)



// Object Ke Sath -> Rest

var students = {
    name : "Ajay",
    age : "28",
    hobbies : ["Cricket","Singing"]
}

// const age = students.age; // Normal JS
// const {age} = students; // Array Destructing (New Way)
const {...rest} = students // Rest
console.log(rest)


// Object Ke Sath -> Spread

var newStudent = {
    ...students,
    age : "29" // Value Overriden 
} 

console.log(newStudent)


