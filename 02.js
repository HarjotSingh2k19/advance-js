// Async JS Programming
// Callbacks, Promises, Async & Await

const datas = [
    {name : "Ajay", Profession : "Software Enginner"},
    {name : "Anuj", Profession : "Software Enginner"}
];

function getDatas(){
    setTimeout(() => {
        let output = "";
        datas.forEach((data,index)=>{
            output += `${data.name} `;
        })
        // document.body.innerHTML = output
        console.log(output)

    }, 1000);
}
// getDatas();


// Callback
function createData(newdata,callback){
    setTimeout(() => {
        datas.push(newdata);
        callback();
    }, 2000);
}

// createData({name:"Vivek",Profession:"Software Engineer"},getDatas); // callback



// Promise
function createData(newdata){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            datas.push(newdata);
            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject("Kuch sahi nhi hai..")
            }
        }, 2000);
    })

}

// createData({name:"Vivek",Profession:"Software Engineer"}).then(getDatas).catch(err => console.log(err));


// Async & Await

async function start(){
    await createData({name:"Vivek",Profession:"Software Engineer"})
    getDatas();
}

start();
