
//Aray functions 

var companies = [
    {name: "Company one", owner: 'male', staffs: 300,  start: 2004, end: 2007 },
    {name: "Company two", owner: 'female', staffs: 400,  start: 2000, end: 2022 },
    {name: "Company three", owner: 'female', staffs: 600,  start: 2011, end: 2017 },
    {name: "Company four", owner: 'male', staffs: 500,  start: 2003, end: 2009 },
    {name: "Company five", owner: 'female', staffs: 200,  start: 2018, end: 2021 }
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
console.log(noDrinking);
// const noDrinking = ages.filter(function(age){
//     if(age < 21){
//         return true;
//     }
// });


// const genderOwner = companies.filter(function(company){
//     if(company.owner === 'female'){
//         return true;
//     }
// });

// console.log(genderOwner);

const genderOwner = companies.filter(company => company.owner === 'female');
console.log(genderOwner);

// Early 2000's companies
const earlyTwentiesCompany = companies.filter( company => (company.start < 2009));
console.log(earlyTwentiesCompany);

const lastTen = companies.filter(company => ( company.end - company.start > 10) )
console.log(lastTen);


// ================== MAP ===========================//

 //=== Map out the year the company started =====//
const yearMap = companies.map( company => `${company.name} [${company.start} - ${company.end}]`);
console.log(yearMap);


// =========== SORT ===================================//

//=== SORTING COMPANY BY OLDEST ====//
const sortedCompanies = companies.sort( (a,b) => (a.start > b.start ? 1 : -1) )
console.log(sortedCompanies);

//========= REDUCE =====================//
//== total number of years ofany of the company 

const totalYear = companies.reduce((total, company) => total  + (company.end - company.start), 0);
console(totalYear);