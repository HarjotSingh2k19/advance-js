// Infinite Currying in JS

function add(a){
    return function(b){
        if(b) return add(a+b);  // checks if b exists
        return a;
    }
}

console.log(add(4)(5)(6)())
