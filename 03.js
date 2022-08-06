// Closure

// Scope of a is lexical
var sum = function(a){
    console.log("Live viewers: " + a);
    var c = 4;

    // Anonymous Function - Function without name
    return function(b){
        return a+b+c;
    }
}

var store = sum(2);
console.log(store(5));

 
// Example 2 : having multiple return statements
// var sum = function(a,b,c,d){  

//     return {
//         getSumTwo: function(){
//             return a+b;
//         },
//         getSumThree: function(){
//             return a+b+c;
//         },
//         getSumFour: function(){
//             return a+b+c+d;
//         }
//     }
// }

// var store = sum(3,4,5,6);
// console.log(store.getSumTwo());
// console.log(store.getSumThree());
// console.log(store.getSumFour());

// var storeNew = sum(10,20,30,40);
// console.log(storeNew.getSumTwo());
// console.log(storeNew.getSumThree());
// console.log(storeNew.getSumFour());

