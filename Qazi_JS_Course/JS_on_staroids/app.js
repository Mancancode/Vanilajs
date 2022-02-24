//chalage1 
// your age in days 

function ageInDays(){
    var birthYear= prompt('what year where you born?');
    var numberInDays = (2022 - birthYear) * 365;
    var h1  = document.createElement('h1'); //create an h1 element
    var textAnswer = document.createTextNode('You are ' + numberInDays + ' days old today');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}


//challenge 2;  Art generator

function generateArt(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-art-gen');
    image.src = "images/kodo.jpg";
    div.appendChild(image);
}

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    // humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt()) ;
    console.log(botChoice);
    // result = decideWinner(humanChoice, botChoice) [0, 1] + 'human lost' | 'bot won' ;
    // massage = finalMassage(result)  {'massage'; 'you won', color;'green'};
    // rpsFrontEnd(yourChoice, botChoise, massage);

}

function randToRpsInt(){
    return Math.floor (Math.random() * 3);   //this function will select a random number between 0 & 3
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors' ][number]    // this return any of the list item when a number is inputed 
}

 