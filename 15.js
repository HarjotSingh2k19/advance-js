// Throttling in JS

const mythrottle = (fn,d)=>{
    return function(...args){
        document.getElementById("myid").disabled = true; // disable that button for 3 sec after clicking to avoid unwanted clicks
        setTimeout(() => {
            fn();
        }, d);
    }
}

const newFun = mythrottle(()=>{
    document.getElementById("myid").disabled = false;
    console.log("User clicked");
},1000)