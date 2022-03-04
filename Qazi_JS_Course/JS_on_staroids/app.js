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
  massage = finalMassage(result); //{'massage'; 'you won', color;'green'};
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
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMassage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { massage: "You lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { massage: "Is a draw!", color: "yellow" };
  } else {
    return { massage: "You Won!", color: "green" };
  }
}

function rpsFrontEnd(humanSelect, botSelect, finalMassage) {
  var imagesDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  // lets remove all the image
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var massageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imagesDatabase[humanSelect] +
    "' height=150 width=150 style=box-shadow: 0px 10px 50px rgba(37, 58, 233, 1);'>";
  humanDiv.innerHTML =
    "<h1 style='color: " +
    finalMassage["color"] +
    "'; font-size: 60px; padding: 30px; '>" +
    finalMassage["massage"] +
    "</h1>";
  botDiv.innerHTML =
    "<img src='" +
    imagesDatabase[botSelect] +
    "' height=150 width=150 style=box-shadow: 0px 10px 50px rgba(243, 34, 233, 1);'>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(massageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

var all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

var copyAllButton = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButton.push(all_buttons[i]);
}

console.log(copyAllButton);

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === "red") {
    buttonRed();
  } else if (buttonThingy.value === "green") {
    buttonGreen();
  } else if (buttonThingy.value === "reset") {
    buttonReset();
  } else if (buttonThingy.value === "random") {
    buttonRandom();
  }
}

function buttonRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function buttonGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}
function buttonReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButton[i]);
  }
}

function buttonRandom() {
  let choices = ["btn-primary", "btn-danger", "btn-success", "btn-warning"];

  for (let i = 0; i < all_buttons.length; i++) {
    let randomNumber = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList());
    all_buttons[i].classList.add(choices[randomNumber]);
  }
}

//    Challenge 5: blackjack

let blackJackGame = {
  you: { scoreSpan: "#your-bj-result", div: "#your-box", score: 0 },
  dealer: { scoreSpan: "#dealer-bj-result", div: "#dealer-box", score: 0 },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K ", "J", "Q", "A"],
  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    K: 10,
    J: 10,
    Q: 10,
    A: [1, 11],
  },
  'wins': 0,
  'losses': 0,
  'draws': 0,
  'isStand': false,
  'turnsOver': false,
};

const YOU = blackJackGame["you"];
const DEALER = blackJackGame["dealer"];

const hitSound = new Audio("bj/sounds/swish.m4a");
const winSound = new Audio("bj/sounds/cash.mp3");
const lossSound = new Audio("bj/sounds/aww.mp3");

document.querySelector("#hit-btn").addEventListener("click", blackjackHit);
document.querySelector("#stand-btn").addEventListener("click", dealerLogic);
document.querySelector("#deal-btn").addEventListener("click", blackjackDeal);

function blackjackHit() {
  if (blackJackGame['isStand'] === false) {
  let card = randomCard();
  console.log(card);
  showCard(card, YOU);
  updateScore(card, YOU);
  showScore(YOU);
  console.log(YOU["score"]);
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13);
  return blackJackGame["cards"][randomIndex];
}

function showCard(activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImg = document.createElement("img");
    cardImg.src = `bj/images/${card}.png`;
    console.log('cardImg');
    document.querySelector(activePlayer["div"]).appendChild(cardImg);
    hitSound.play(); 
  }
}

function blackjackDeal() {
  if (blackJackGame['turnsOver'] === true) {
  //showResult(computeWinner());

    blackJackGame['isStand'] = false;
    let yourImages = document.querySelector("#your-box")
    .querySelectorAll('image');
    let dealerImages = document
      .querySelector("#dealer-box")
      .querySelectorAll("image");

    for (i = 0; i < yourImages.lenght; i++) {
      yourImages[i].romove();
    }

    for (i = 0; i < dealerImages.lenght; i++) {
      dealerImages[i].remove();
    }

    YOU["score"] = 0;
    DEALER["score"] = 0;

    document.querySelector("#your-bj-result").textContent = 0; 
    document.querySelector("#dealer-bj-result").textContent = 0;

    document.querySelector("#your-bj-result").style.color = '#ffffff';
    document.querySelector("#dealer-bj-result").style.color = 'ffffff';
    
    document.querySelector("#bj-result").textContent = "lets play";
    document.querySelector('#bj-result').style.color = 'black';

    blackJackGame['turnsOver'] = true;
  }  

}

function updateScore(card, activePlayer) {
  if (card === 'A') {
    //if adding 11 keeps me below 21, add 11 otherwise add 1.
    if (activePlayer["score"] + blackJackGame["cardsMap"][card][1] <= 21) {
      activePlayer["score"] += blackJackGame["cardsMap"][card][1];
    } else {
      activePlayer["score"] += blackJackGame["cardsMap"][0];
    }
  } else {
    activePlayer["score"] += blackJackGame["cardsMap"][card];
  }
}

function showScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BAST!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
  blackJackGame['isStand'] = true;

  while (DEALER['score'] < 16 && blackJackGame['isStand'] === true){

  let card = randomCard();
  showCard(card, DEALER);
  updateScore(card, DEALER);
  showScore(DEALER);
  await sleep(1000);
  }

  
    blackJackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
    
}


// compute winner and update who just won 
// update the wins, draws and losses
function computeWinner() {
  let winner;

  if (YOU["score"] <= 21) {
    //condition higher score than dealer or when dealer busts but you dont
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      blackJackGame["wins"]++;
      console.log("win!");

      winner = YOU;
    } else if (YOU["score"] < DEALER["score"]) {
      blackJackGame["losses"]++;
      console.log("loss!");

      winner = DEALER;
    } else if (YOU["score"] === DEALER["score"]) {
      blackJackGame["draw"]++;
      console.log("draw!");
    }

    //condition: when user busts but dealer doesnt
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    blackJackGame["losses"]++;
    console.log("You lost!");
    winner = DEALER;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    blackJackGame["draw!"]++;
    console.log("you drew!");
  }

  console.log(blackJackGame);
  return winner;
}

function showResult(winner) {
  let message, messageColor;
    if (blackJackGame['turnsOver'] === true) {
      if (winner === YOU) {
        document.querySelector('#wins').textContent = blackjackGame['wins'];
        message = "You won!";
        messageColor = "green";
        winSound.play();
      } else if (winner === DEALER) {
        document.querySelector('#losses').textCcontent = blackjackGame['losses'];
        message = "You lost, Dealer Won!";
        messageColor = "red";
        lossSound.play();
      } else {
        document.querySelector('#draws').textContent = blackjackGame['draws'];

        message = "you drew!";
        messageColor = "yellow";
      }

      document.querySelector("#bj-result").textContent = message;
      document.querySelector("#bj-result").style.color = messageColor;

    }  
}
