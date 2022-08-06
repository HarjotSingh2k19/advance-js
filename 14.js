// lalalala

// Debouncing in JS

// Debouncing and Throttling achieve via setTimeout API
// unwanted functions are stopped via debouncing

let counter = 0;
function getData(){
    console.log("fetching data" + counter++);
}

function myDebounce(call, d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);  
        timer = setTimeout(() => {
            call();
        }, d);
    }
}
const BetterFunction = myDebounce(getData,1000);
