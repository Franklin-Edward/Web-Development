var randDice1=Math.floor(Math.random()*6);
var randDice2=Math.floor(Math.random()*6);
var diceImages=["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var draw=["Good game😎", "Its a Draw😁"];
var randDice1Title=["Player 1 Wins 🚩", "👻Player 2 Loses", "Win Win Chicken🍗 Dinner Player 1", "You are Looser Player 2", "The Winner is Player 1", "Player 1 is greater than player 2"];
var randDice2Title=["Player 2 Wins 🚩", "👻Player 1 Loses", "Win Win Chicken🍗 Dinner Player 2", "You are Looser Player 1", "The Winner is Player 2", "Player 2 is greater than player 1"];
if (window.performance){
  if(randDice1>randDice2){
    var msg1=randDice1Title[Math.floor(Math.random()*6)];
    document.querySelector("h1").innerHTML=msg1;
    document.querySelector(".dice-1").src=diceImages[randDice1];
    document.querySelector(".dice-2").src=diceImages[randDice2];
  }
  else if(randDice1<randDice2){
    var msg2=randDice2Title[Math.floor(Math.random()*6)];
    document.querySelector("h1").innerHTML=msg2;
    document.querySelector(".dice-1").src=diceImages[randDice1];
    document.querySelector(".dice-2").src=diceImages[randDice2];
  }
  else{
    var drawmsg=draw[Math.floor(Math.random()*2)];
    document.querySelector("h1").innerHTML=drawmsg;
    document.querySelector(".dice-1").src=diceImages[randDice1];
    document.querySelector(".dice-2").src=diceImages[randDice2];
  }
}
