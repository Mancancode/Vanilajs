//function 
// function fun(){
//     alert('this is gonna be fun ');

// }
//  fun();

 //lets write a function that will take in a name and return "hello (the name)"
 // e.g Hello ebuka 


 //create function
 function greeting(){
    var name = prompt ('what is your name');
    var result = 'hello  ' + name;
    console.log(result);

 }

 //call function 

//  greeting();


 function greeting(yourName) {
     let result = 'hello' + ' ' + yourName; //string concatenation
     console.log(result);
 }
//    var name = prompt('whats the soup name ?');
//    greeting(name);

   //while loo
//    var num = 0;
//    while (num < 100) {
//        num += 1;
//        console.log(num);
//    }

   //for loop
   for (let num = 0; num <= 100; num++) {
       console.log(num);
   }


   //Javascript data types 
   let ypurAge = 18;     //number
   let yourName = 'bob';  //string
   let name = {first: 'jane', last: 'Doe'};  //object
   let truth = false;     //boolean
   let groceries = ['apple', 'banana', 'oranges']; //array
   let random;  //undefined
let nothing = null //value null

// String in Javascript (common method)
let fruit = 'banana, applle, orange, blackberry';
let moreFruit = 'banana\napple';

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); //split by coma
console.log(fruit.split(''));    //split by characters

//Array 
let fruits = ['banana', 'apple', 'orange', 'pineaples'];
fruit = new Array('banana', 'apple', 'orange', 'pineaples');
console.log(fruit[2]);  //access value at index 2end 

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruit[i]);
}

//array common methods
console.log('to string', fruits.toString());
console.log(fruits.join('--'));
 console.log(fruits, fruits.push('mangos'), fruits);

 let vagetables = ['cucumber', 'tomato', 'papper']
 let allGroceries = fruits.concat(vagetables);  //conbine arrays
 console.log(allGroceries);
 console.log(allGroceries.slice(1,4));
 console.log(allGroceries.reverse());
 console.log(allGroceries.sort());

 let someNumbers = [ 17, 8, 1, 12, 2, 5, 4, 3, 10, 14, 7, 9, 13, 6, 16, 11, 15, 12];
 console.log(someNumbers.sort());
 console.log(someNumbers.sort(function(a,b) {return a-b}));  // b-a turns the number to accending other

 let oldArray = new Array();
 for(let num = 0; num < 10; num++) {
    oldArray.push(num);
 }
 console.log(oldArray);

 //OBJECTS IN JAVASCRIPT 
 //dictionary in python 

 let personalInfo = { 
     firstName:'ebuka',
      lastName:'chris',
       height:170,
        Age:25,
         color:'black',
          state: 'imo',
          personFullName: function(){
             return this.firstName + ' ' + this.lastName + '\n' + this.Age
          }
    };
  console.log(personalInfo.Age);
  console.log(personalInfo.firstName)
  console.log(personalInfo.personFullName());

  //conditionals control flow 
  //18-35 are my friends 

//   var age = prompt('what is your age?');
//   if ((age >= 18) && (age <= 32)) {
//       result = 'we can be friends';
//       console.log(result);
//   } else {
//     result = 'sorry we can not be friends';
//       console.log(result);
//   };

  //diffrentiate between weekdays vs weekend


  const week = prompt(' Using the range 1 to 7, Monday is 1 and Sunday is 7, what day is today ? ')
   if ((week >= 1) && (week < 5) ) {
       result = 'today is weekday!';
       console.log(result);
   } else {
       result = 'hurrey today is weekend!';
       console.log(result);
   };

  //switch statemwnts 
    //diffrentiate between weekdays vs weekend

    switch(prompt('Using the range 1 to 7. Monday is 1 and Sunday is 7, what day is today ? ') ) {
        case 7:
           text = 'weekend';
           break;
        case 6:
           text = 'weekend';
           break;
        case 5:
            text = 'weekend';
            break;
        default:
            text = 'weekdays';  
    }

    console.log(text);
