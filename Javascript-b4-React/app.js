
//Aray functions 

var companies = [
    {name: "Company one", owner: 'frank', staffs: 300,  start: 2004, end: 2007 },
    {name: "Company two", owner: 'john', staffs: 400,  start: 2000, end: 2006 },
    {name: "Company three", owner: 'kenny', staffs: 600,  start: 2011, end: 2017 },
    {name: "Company four", owner: 'mack', staffs: 500,  start: 2003, end: 2009 },
    {name: "Company five", owner: 'mike', staffs: 200,  start: 2018, end: 2021 }
];

let ages =[12, 14, 10, 17, 15, 23, 20, 25, 22, 28, 20, 34, 39,32,43,47,49,41, 50, 53, 58, 55 ];

//foreach 
companies.forEach(function(company){
    // console.log(company.name)
})

// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i])
//     }
// }

//================ filter ================ //

// const canDrink =ages.filter(function(age)
// {
//     if(age >= 21){
//         return true;
//     }
// });
// console.log(canDrink);


// ======= 21 and older === //
const canDrink = ages.filter(age => age >= 21);

console.log(canDrink);

// ======== bellow 21 =====//
const noDrinking = ages.filter(age => age < 21);
// const noDrinking = ages.filter(function(age){
//     if(age < 21){
//         return true;
//     }
// });

console.log(noDrinking);