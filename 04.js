// Apply, call & Bind in JS

// Problem statement

let userDetails = {
    name : "Ajay",
    age  : 28,
    Designation : "Software Engineer",
    printDetails : function(){
        console.log(this)  // pointing to userDetails
        // console.log(this.name)
    } 
}

userDetails.printDetails()

// Call
let userDetails2 = {
    name : "Anuj",
    age  : 29,
    Designation : "Software Engineer",
}

userDetails.printDetails.call(userDetails2); // kind of function borrowing


// If lies outside

let userDetailsNew = {
    name : "Sanjay",
    age  : 38,
    Designation : "Software Engineer",
    
}
let printDetails = function(){
    console.log(this) 
} 

printDetails.call(userDetailsNew)


// if extra arguments needs to be passed
let userDetailsNew2 = {
    name : "Vijay",
    age  : 38,
    Designation : "Software Engineer",
    
}
let printDetailsNew2 = function(state,country){
    console.log(this.name + " " + state + " " + country) 
} 

printDetailsNew2.call(userDetailsNew2,"Delhi","India")

// Apply - Instead of passing argumnets one by one as in 'call', we can pass in single arraylist
printDetailsNew2.apply(userDetailsNew2,["Delhi","India"]);

// Bind - Store the copy of function and invoke it later but in 'call' we use direct function
let newfun = printDetailsNew2.bind(userDetailsNew2,"Delhi","India")
newfun();


