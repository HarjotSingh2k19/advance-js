// Currying function in JS

// function Addition(a,b,c){
//     return a+b+c;
// }

// let res = Addition(2,3,4);
// console.log(res);

// Closure
function Addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

// let res = Addition(2);
// let data = res(4);
// let data2 = data(7);
// console.log(data2);

// Currying
// let res = Addition(2)(4)(7);
// console.log(res);


// Real life case of currying
userObj = {
    name : "Ajay",
    age : 28
}

function userInfo(obj){
    return function(userinfo){
        return obj[userinfo];
    }
}

let res = userInfo(userObj);
console.log(res('name'))   // 'name' will go in parameter userinfo
