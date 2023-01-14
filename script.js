let roundScoreOne = 0;
let roundScoreTwo = 0;
let globalScoreOne = 0;
let globalScoreTwo = 0;
let diceNumber = 0;
let FlagPlayer = 1;

function init() {
  FlagPlayer = 1;
  roundScoreOne = 0;
  roundScoreTwo = 0;
  globalScoreOne = 0;
  globalScoreTwo = 0;
  document.getElementById('RoundScoreOne').innerHTML = roundScoreOne;
  document.getElementById('RoundScoreTwo').innerHTML = roundScoreTwo;
  document.getElementById('GlobalScoreOne').innerHTML = globalScoreOne;
  document.getElementById('GlobalScoreTwo').innerHTML = globalScoreTwo;
  document.getElementById("FlagPlayerOne").setAttribute("style", "display: inline-block");
  document.getElementById("FlagPlayerTwo").setAttribute("style", "display:none");
}

function TogglePlayer() {
  if (FlagPlayer == 1) {
    document.getElementById("FlagPlayerOne").setAttribute("style", "display: inline-block");
    document.getElementById("FlagPlayerTwo").setAttribute("style", "display:none");
  }
  else if (FlagPlayer == 2) {
    document.getElementById("FlagPlayerOne").setAttribute("style", "display:none");
    document.getElementById("FlagPlayerTwo").setAttribute("style", "display: inline-block");
  }
}


function rollDice() {
  document.getElementById("hold-button").setAttribute("disabled", "");

  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
    die.dataset.roll = getRandomNumber(1, 6);
  });

  setTimeout(() => {
    addRound();
  }, 1500);
  

}

function addRound() {
  let boolScore = VerifDiceScore();
  if (!boolScore) {
    if (FlagPlayer == 1) {
      roundScoreOne += diceNumber;
      document.getElementById('RoundScoreOne').innerHTML = roundScoreOne;
    }
    else if (FlagPlayer == 2) {
      roundScoreTwo += diceNumber;
      document.getElementById('RoundScoreTwo').innerHTML = roundScoreTwo;
    }
  }
  document.getElementById("hold-button").removeAttribute("disabled", "");
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  diceNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return diceNumber;
}

function VerifDiceScore() {
  if (diceNumber == 1) {
    if (FlagPlayer == 1) {
      initRoundScoreOne();
    }
    else if (FlagPlayer == 2) {
      initRoundScoreTwo();
    }
    return 1;
  }
  else
    return 0;
}

function addGlobalScore() {
  if (FlagPlayer == 1) {
    globalScoreOne += roundScoreOne;
    document.getElementById('GlobalScoreOne').innerHTML = globalScoreOne;
    initRoundScoreOne();
    verifGlobaleScore();
  }
  else if (FlagPlayer == 2) {
    globalScoreTwo += roundScoreTwo;
    document.getElementById('GlobalScoreTwo').innerHTML = globalScoreTwo;
    initRoundScoreTwo();
    verifGlobaleScore();
  }

}
function verifGlobaleScore() {
  if (globalScoreOne >= 100) {
    alert('Winner is the player 1 Good Game');
    init();
  }
  if (globalScoreTwo >= 100) {
    alert('Winner is the player 2 Good Game');
    init();
  }
}

function initRoundScoreOne() {
  roundScoreOne = 0;
  document.getElementById('RoundScoreOne').innerHTML = roundScoreOne;
  FlagPlayer = 2;
  TogglePlayer();
}
function initRoundScoreTwo() {
  roundScoreTwo = 0;
  document.getElementById('RoundScoreTwo').innerHTML = roundScoreTwo;
  FlagPlayer = 1;
  TogglePlayer();
}

function newGame(){
  
  let reponse = window.confirm("Are you sure to start a new game?"); 
  if (reponse)
    init();
}