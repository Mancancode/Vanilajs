

// prompt('hello');

// const x = 9;

// const color = x > 9 ? "red":"green";

// switch (color) {
//   case "red":
//     console.log("this is red");
//     break;
//   case "blue":
//     console.log("this is blue");
//     break;
//   default:
//     console.log("color is not blue or green ");
//     break;
// }

// function numbers(num1,num2){

//   console.log(num1 + num2)
// }

// numbers(3,4);
 
// console.log(window);
// window.alert(1);

// console.log(navigator.appVersion);

const book1 ={
    title: 'Black life matters ',
    price: '$'+300,
    pages: 259,
    year: 2019,
    Author: 'Gorge Floyd',
    getSummary: function() {
        return `${book1.title} was written in the year ${book1.year} by ${book1.Author}`;
    }

};

const book2 ={
    title: 'Black life matters ',
    price: '$'+300,
    pages: 259,
    year: 2019,
    Author: 'Gorge Floyd',
    getSummary: function() {
        return `${book2.title} was written in the year ${book2.year} by ${book2.Author}`;
    }

};

// console.log(book2.getSummary());

// console.log(Object.values(book2));
// console.log(Object.keys(book2));

//=========== CONSTRUCKTOR JS ES5 ==========

function Books (Author, Title, Year, Pages) {
    this.Author = Author;
    this.Title = Title;
    this.Year =Year;
}

//getSummary
Books.prototype.getSummary = function() {
    return `${book1.title} was written in the year ${book1.year} by ${book1.Author}`;
}


//getAge
Books.prototype.geTAge = function() {
    const years =  new Date().getFullYear() - this.year;
    return `${this.title} is ${years} year old`;
}
//=== Instantiate an Object i constructor

const book01 = new Books ( 'Barack Obama', 'Black man in White House', '2014', '261');
const book02 = new Books ( 'Donal Trumph', 'Presidents Business', '2019', '191');

// console.log(book01.getSummary());



// ======= Inheritance ======================  //

function Books (Author, Title, Year) {
    this.Author = Author;
    this.Title = Title;
    this.Year =Year;
}


Books.prototype.getSummary = function() {
    return `${Books.Title} was written in the year ${Books.Year} by ${Books.Author}`;
}

//Magazine constructor 
 function Magazine(Title, Autor, Year, month){
     Books.call(this,Title, Autor, Year, );

     this.month =  month;
}

//inherit prototype 
Magazine.prototype = Object.create(Books.prototype); 

//Instanciate Magazine
const mag1 = new Magazine ('Arrows', 'Chris Bands', '2018', ('Feb '+24+'th'));

// console.log(mag1.getSummary());



// ========== ===============  ES6 Type =======  =========  ============  //

class Book6 {
    constructor(title, author, year ) {
        this.title = title;
        this.author = author;
        this.year = year;

    }

    getSummary(){
        return (`${this.title} was written by ${this.author} in ${this.year}` );
    }  
}

//instantiate 
const Book1 = new Books ('Wallows', 'Ric Bono','1991');

    // console.log(Book1);

    // ========= ========   ======== SubClasses ======= ======== ======= //

    class Book7 {
        constructor(title, author, year ) {
            this.title = title;
            this.author = author;
            this.year = year;
    
        }
    
        getSummary(){
            return (`${this.title} was written by ${this.author} in ${this.year}` );
        }  

    }    

    class Magaziner extends Book7 {
        constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
        }
    }

    //instanciate 

    const mag2  = new magazines ('Winnercul', 'Rich wales', '2019', 'March');  

    console.log(mag1.getSummary);