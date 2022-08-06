// Map, set, WeakSet, WeakMap
"use strict";

// SET
// It contains only unique values
// Object Constructor

let myArray = [1,2,3,4];
let obj = new Set(myArray);

obj.add(5);
// console.log(obj);

obj.delete(4);
// console.log(obj);

var obj1 = {name : "Ajay"}
obj.add(obj1);
// console.log(obj)

// console.log(obj.has(2));

// for(let new1 of obj){
//     console.log(obj)
// }

// For Each
// obj.forEach((element) => {
//     console.log(element);
// })

obj.clear();
// console.log(obj)


// MAP
// data is stored in the form of key-value pair

let myMap = new Map([["a1","Ajay"],["a2","Vikas"]]);
myMap.set("a2","Rahul"); // Overriden 
// myMap.delete("a2");
// console.log(myMap.get("a2"));

for(let [key,value] of myMap){
    // console.log(`keys: ${key}, value: ${value}`);
}

myMap.forEach((key,value) => {
    // console.log(key, value);
})


// WeakSet
// Only store Objects and it cannot be iterated

let ws = new WeakSet();

var ob1 = {"name":"Tiger"};
var ob2 = {};
ws.add(ob1);
ws.add(ob2);

console.log(ws)
console.log(ws.has(ob1));


// WeakMap
// Only store objects and it cannot be iterated

let wm = new WeakMap();
var ob3 = {"name" : "Ajay"};  // Key = {"name" : "Ajay"} and Value = "Private"
var ob4 = {};
wm.set(ob3,"Private");
wm.set(ob4,"Private Data");

console.log(wm);
console.log(wm.has(ob4));



