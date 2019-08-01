
var dice = "dice";

function rollDice(){

  document.querySelector("#player1 h2").classList.remove("winnerText");
  document.querySelector("#player2 h2").classList.remove("winnerText");

  var diceOneValue = Math.random() * 6;
  diceOneValue = Math.floor(diceOneValue) + 1;
  var diceOneImage = dice.concat(diceOneValue, ".png");

  var diceTwoValue = Math.random() * 6;
  diceTwoValue = Math.floor(diceTwoValue) + 1;
  var diceTwoImage = dice.concat(diceTwoValue + ".png");

  document.querySelector(".diceOneImage").setAttribute("src", "images/" + diceOneImage);
  document.querySelector(".diceTwoImage").setAttribute("src", "images/" + diceTwoImage);

  if (diceOneValue > diceTwoValue){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
    document.querySelector("#player1 h2").classList.add("winnerText");
  } else if (diceOneValue < diceTwoValue){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
    document.querySelector("#player2 h2").classList.add("winnerText");
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
