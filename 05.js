// Higher Order Function

// forEach
// filter
// map
// sort
// reduce

const companies = [
    {name: "Google", category: "Product Based", start: 1981, end: 2004},
    {name: "Amazon", category: "Product Based", start: 1992, end: 2008},
    {name: "Paytm", category: "Product Based", start: 1999, end: 2007},
    {name: "Coforge", category: "Service Based", start: 1989, end: 2010},
    {name: "Mindtree", category: "Service Based", start: 1989, end: 2010}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// Normal for loop
// for(let i=0; i <= companies.length; i++){
//     console.log(companies[i]);
// }

// forEach

companies.forEach(function(company,index){
    // console.log(company)
});
        //  OR
// companies.forEach((company,index)=>{
//     console.log(company)
// });
        //  OR
// companies.forEach((company,index)=>(console.log(company)));


// Filter

// Conventional Way
// for(let i =0; i <= ages.length; i++){
//     if(ages[i] >= 20){
//         console.log(ages[i]);
//     }
// }
        // OR
// const age = ages.filter(function(age){
//    if(age >= 20){
//     return true;
//    }
// })
// console.log(age);
        // OR
const finalAge = ages.filter((age)=>( age >= 20))
// console.log(finalAge);

const sb = companies.filter(function(company){
    if(company.category === 'Service Based'){
        return true;
    }
})
// console.log(sb);

const sbNew = companies.filter((company)=>(company.category === "Service Based"));
// console.log(sbNew);


// Map function

// companies.map(function(company,index){
//     console.log(index+1 +"." ,company);
// })

// companies.map((company,index)=>{
//     console.log(index+1 +"." ,company);
// })

// String Literal
const dummy = companies.map((company,index )=>{
    return `${company.name} : ${company.category}`;
})
// console.log(dummy);



// Sort

// sorted on the basis of starting year
// const sorted = companies.sort(function(c1,c2){
//     if(c1.start > c2.start){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// })

// console.log(sorted)
            //  OR
const sorted = companies.sort((c1,c2)=> (c1.start > c2.start)? 1 : -1 );
// console.log(sorted)

// sorting ages in ascending order
const sortedAges = ages.sort((a,b)=> (a-b));
// console.log(sortedAges)



// Reduce

// let total = 0;
// for(let i=0; i < ages.length; i++){
//     total += ages[i];
// }
// console.log(total);

// const sumage = ages.reduce(function(total,age){
//     return total+age;
// },0)
// console.log(sumage);

const sumage = ages.reduce((total,age)=> (total+age),0)
console.log(sumage);







