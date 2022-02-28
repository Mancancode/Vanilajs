//chalage1
// your age in days

function ageInDays() {
  var birthYear = prompt("what year where you born?");
  var numberInDays = (2022 - birthYear) * 365;
  var h1 = document.createElement("h1"); //create an h1 element
  var textAnswer = document.createTextNode(
    "You are " + numberInDays + " days old today"
  );
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

//challenge 2;  Art generator

function generateArt() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-art-gen");
  image.src = "images/kodo.jpg";
  div.appendChild(image);
}


//Rock Paper  Scissors

function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randToRpsInt());
  console.log("Computer Choice", botChoice);
  result = decideWinner(humanChoice, botChoice); // [0, 1] + 'human lost' | 'bot won' ;
  console.log(result);
  massage = finalMassage(result)  //{'massage'; 'you won', color;'green'};
  console.log(massage); 
  rpsFrontEnd(yourChoice.id, botChoice, massage);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3); //this function will select a random number between 0 & 3
}

function numberToChoice(number) {
  return ["rock", "paper", "scissors"][number]; // this return any of the list item when a number is inputed
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0},
    'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
    'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMassage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { 'massage': "You lost!", 'color': "red" };
  } else if (yourScore === 0.5) {
    return { 'massage': "Is a draw!", 'color': "yellow" };
  } else {
    return { 'massage': "You Won!", 'color': "green" };
  }
}

function rpsFrontEnd(humanSelect, botSelect, finalMassage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // lets remove all the image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var massageDiv = document.createElement('div');


    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanSelect] + "' height=150 width=150 style=box-shadow: 0px 10px 50px rgba(37, 58, 233, 1);'>"
    humanDiv.innerHTML = "<h1 style='color: " + finalMassage['color'] + "'; font-size: 60px; padding: 30px; '>" + finalMassage['massage'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botSelect] + "' height=150 width=150 style=box-shadow: 0px 10px 50px rgba(243, 34, 233, 1);'>"


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(massageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}   

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButton = [];
for  ( let i=0; i < all_buttons.length; i++) {
    copyAllButton.push(all_buttons[i]);
}

console.log(copyAllButton);

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonRed();
    } else if (buttonThingy.value === 'green'){
        buttonGreen();
    } else if (buttonThingy.value === 'reset'){
        buttonReset();
    } else if (buttonThingy.value === 'random') {
        buttonRandom();
    }
}

function buttonRed () {
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen () {
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonReset () {
    for (let i=0; i < all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButton[i]);
    }
}

function buttonRandom () {
   let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

   for (let i=0; i < all_buttons.length; i++){
       let randomNumber = Math.floor(Math.random() * 4);
       all_buttons[i].classList.remove(all_buttons[i].classList());
       all_buttons[i].classList.add(choices[randomNumber]);
   }
}

//    Challenge 5: blackjack

let blackJackGame ={
  'you': {'scoreSpan': '#your-bj-result' , 'div': '#your-box', 'score': 0},
  'dealer': {'scoreSpan': '#dealer-bj-result' , 'div': '#dealer-box', 'score': 0},
  'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K ', 'J', 'Q', 'A'],
};

const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];

const hitSound = new Audio('bj/sound/soundNmae');

document.querySelector('#hit-btn').addEventListener('click', blackjackHit);

document.querySelector('#deal-btn').addEventListener('click', blackjackDeal);

function blackjackHit() {
  showCard(YOU);
}

function showCard(){
  let cardImg = document.createElement('img');
  cardImg.src = 'bj/images/2.png';
  document.querySelector(YOU['div']).appendChild(cardImg);
  
}

function blackjackDeal(){
  let yourImages = document.querySelector('#your-box').querySelectorAll('img');
  
  
for (i=0; i < yourImages.lenght; i++) {
  yourImages[i].romove();
}

for (i=0; i < dealerImages.lenght; i++) {
  dealerImages[i].remove();
}

}




