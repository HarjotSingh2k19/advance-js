// navbar completed

// Prototype

// Ways to create object in JS
// const obj = new Object({
//     name : "Ajay"
// })

// const obj = new obj();

const obj = {
    name : "Ajay Suneja",
    getName : function(){
        return this.name;
    },
    getRoll : function(){
        return this.roll;
    }
}
// console.log(obj)

// P.S. - We want to access something like obj2.name
// I want my first object(obj1) to go as prototype in obj2

const obj2 = {
    roll : 1,
    name : "Vivek",
    __proto__: obj
}
// console.log(obj2.getRoll())
// console.log(obj2.getName())


const obj3 = {
    roll: 2,
    class : "MCA",
    __proto__ : obj2
}
// console.log(obj3.getRoll())
// console.log(obj3.getName())


const array = ["Ajay"];
// console.log(array)

// To see prototypes, we have to use html
const object = new Object();
// console.log(object);

const arrayNew = new Array();
// console.log(arrayNew);

const functionNew = new Function();
// console.log(functionNew());


// We are adding show property/protoype in function()
// Khud ka bnaya hai
Array.prototype.show = function(){
    return this;  // this refers to array here
}

const cities = ["Delhi"];
console.log(cities.show());

Array.prototype.convertIntoObject = function(){
    let newObj = {};
    this.forEach((element) => {
        newObj[element] = element;
    })
    return newObj;
}

console.log(cities.convertIntoObject());


// Custom Prototype
function MyProtoType(name,roll){
    this.name = name;
    this.roll = roll
}

MyProtoType.prototype = obj; // Another way of prototyping/inheriting properties from obj

const myproto = new MyProtoType("Harry","21");
console.log(myproto.getName());
console.log(myproto.getRoll());




