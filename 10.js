// Event Bubbling & Capturing
// Stop Propgation , Immediate Propagation & Prevent Default

var div = document.querySelector("div");
var button = document.querySelector("button");
var a = document.querySelector("a");

// Event Bubbling : Flow - Child to Parent
// div.addEventListener("click",()=>{
//     console.log("div")
// })

// button.addEventListener("click",()=>{
//     console.log("button")
// })

// Event Capturing : Flow - Parent to Child 
// div.addEventListener("click",()=>{
//     console.log("div")
// },true)

// button.addEventListener("click",()=>{
//     console.log("button")
// },true)

// Stop Propogation
button.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("button")
})

// Immediate Propgation
button.addEventListener("click",(event)=>{
    event.stopImmediatePropagation();
    console.log("button1")
})

button.addEventListener("click",(event)=>{ 
    console.log("button2")
})

// Prevent Default
// page refresh nhi krne de rha
a.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("button")
})



