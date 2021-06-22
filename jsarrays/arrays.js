const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


//*Array Flter*/
//GET CHARACTER WITH MASS GREATER THAN 100
const massGreater100 = characters.filter(character => character.mass > 100);
console.log(massGreater100);

//GET CHARACTER WITH height shoter THAN 200
const heightLess200 = characters.filter(character => character.height <  200);
console.log(heightLess200);

//GET CHARACTER ALL MALE CHAR

//GET CHARACTER WALL FEMALE CHAR




//*REDUCE*/
//GET TOTAL MASS OF ALL CHARACTERS
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);
console.log(totalMass);
//GET THE TOTAL HIEGHT ALL THE CHARACTERS 
const totalHeight = characters.reduce((acc, cur ) => acc + cur.height, 0);
console.log(totalHeight);




//*every */

//GET ALL THE BLUE EYES
const allBlueEyes = characters.every((character) =>character.eye_color === 'blue');
console.log(allBlueEyes);

//DOES ALL THE CHARACTER HAS MASS GREATER THAN 40 ?
const allMassMoreThan40 = characters.every((character) => character.mass > 40);
console.log(allMassMoreThan40);

//Is every character shorter than 200?
const everyCharless200 = characters.every((character) => character.characters < 200);
console.log(everyCharless200);

//IS EVERY CHARACTER MALE ?

const everyCharMale = characters.every((character) => character.gender === 'male');
console.log(everyCharMale);


//*Array MAP()*/
//GET ARRAY OF NAMES 
const names = characters.map(character => character.name);
console.log(names);

//Get ARRAY OF HEIGHTS 
const heights = characters.map(character => character.height);
console.log(heights);

//GET ARRAY OF OBJECT WITH JUST NAMES AND HEIGHT 
const records = characters.map(character => ({
    name: character.name,
    height: character.height
    }));
console.log(records);

//GET ALL THE FIRST NAMES

const fNames = characters.map(character => character.name.split(" ")[0]);
console.log(fNames);