//constructing a dice stored in array
const die1 = document.getElementById('die1');
const die2 = document.getElementById('die2');
const die3 = document.getElementById('die3');
const die4 = document.getElementById('die4');
const die5 = document.getElementById('die5');
const die6 = document.getElementById('die6');
const allDice = [die1, die2, die3, die4, die5, die6];

//importing Player1 parts
const sectionPlayer1 = document.getElementsByClassName('player-current-1');
const player1 = document.getElementById('player1');
const score1 = document.getElementById('score1');
const currentScore1 = document.getElementById('current-score-1');
const player1Pane = document.getElementsByClassName('player-1-section');


//importing Player2 parts
const sectionPlayer2 = document.getElementsByClassName('player-current-2');
const player2 = document.getElementById('player2');
const score2 = document.getElementById('score2');
const currentScore2 = document.getElementById('current-score-2');
const player2Pane = document.getElementsByClassName('player-2-section');

//importing menu parts
const newGame = document.getElementById('reset');
const rollDice = document.getElementById('roll');
const hold = document.getElementById('hold');

let totalScore = 0;
let statusPlayer1 = true;
let statusPlayer2 = false;
//Game Starts
newGame.addEventListener('click', () => {
 //clearing die image from last game
  for (let i = 0; i < allDice.length; i++) {
    allDice[i].style.display = "none";
  };
  

  score1.textContent = "0";
  currentScore1.innerHTML = "0";
  score2.textContent = "0";
  currentScore2.innerHTML = "0";
  totalScore = 0;
// getting roll button back
  rollDice.style.display = 'block';

  

});
  
 
  // player1 turn
  rollDice.addEventListener('click', () => {
  
  // clearing die image from last turn
    for (let i = 0; i < allDice.length; i++) {
      allDice[i].style.display = "none";
    };

   //  deactivating player2
    

   //  rolling the die
    let roll = Math.floor((Math.random() * 6 )+ 1);
    let nextDie = allDice[(roll - 1)];
    if (nextDie.style.display == 'none') {
      nextDie.style.display = 'block';
    
    } else {
      nextDie.style.display = 'none';
    
    };
  // awarding score to active player
    totalScore += roll;
     if (statusPlayer1) {
      currentScore1.textContent = totalScore;
     } else {
      currentScore2.textContent = totalScore;
     }
    
    
    hold.style.display = 'block';
    

    if (roll == 1) {
     player1Score = 0;
     currentScore1.textContent = player1Score;
     player2Score = totalScore;
     
    };
    
    console.log(roll);
    console.log(totalScore)
   
});

hold.addEventListener('click', () => {
  player1Pane[0].classList.toggle('active');
  player2Pane[0].classList.toggle('active');

 statusPlayer1 = !statusPlayer1;
 statusPlayer2 = !statusPlayer2;
  
})