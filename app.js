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
let playerScore1 = 0;
let playerScore2 = 0;

const resetScores = () => {
  score1.textContent = "0";
  currentScore1.innerHTML = "0";
  score2.textContent = "0";
  currentScore2.innerHTML = "0";
  totalScore = 0;
  playerScore1 = 0;
  playerScore2 = 0;
  rollDice.style.display = 'block';
};




const resetDice = () => {
  for (let i = 0; i < allDice.length; i++) {
    allDice[i].style.display = "none";
  };
 };

 const swapPlayers = () => {
    statusPlayer1 = !statusPlayer1;
    statusPlayer2 = !statusPlayer2; 
 };
  
//Game Starts
newGame.addEventListener('click', () => {
  resetDice();
  resetScores();
  player1Pane[0].classList.add('active');
  player2Pane[0].classList.remove('active');
  player1.textContent = "Player 1";
  player2.textContent = "Player 2";
});
  
 
  // player1 turn
rollDice.addEventListener('click', () => {
  resetDice();

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
      playerScore1 = totalScore;
      currentScore1.textContent = playerScore1;
     } else {
      playerScore2 = totalScore;
      currentScore2.textContent = playerScore2;
     }
    
     hold.style.display = 'block';

    console.log(roll);
    console.log(`totalsc ${totalScore}`);
    console.log(`playerScore1 ${playerScore1}`);
    console.log(`playerScore2 ${playerScore2}`);
    console.log(`status1 ${statusPlayer1}`);
    console.log(`status2 ${statusPlayer2}`)
   
  
    switch (true) {
      case (statusPlayer1 && (roll == 1)):
        playerScore1 = 0;
        currentScore1.textContent = playerScore1;
        score1.textContent = playerScore1;
        swapPlayers();
        totalScore = 0;
        break;
      case (statusPlayer2 && (roll == 1) && (playerScore1 != 0)):
        playerScore2 = 0;
        currentScore2.textContent = playerScore2;
        score2.textContent = playerScore2;
        player1.textContent = "WINNER";
        break;
      case (statusPlayer2 && (roll == 1)):
        playerScore2 = 0;
        currentScore2.textContent = playerScore2;
        score2.textContent = playerScore2;
        swapPlayers(); 
        totalScore = 0;
        break;
        
      default:
        swapPlayers();
        break;
    }

    if (statusPlayer2 && (playerScore1 < playerScore2)) {
      player2.textContent = "WINNER";
      score2.textContent = playerScore2;
      rollDice.style.display = 'none';
      hold.style.display = 'none';
      swapPlayers(); 
    };
});




hold.addEventListener('click', () => {
  player1Pane[0].classList.toggle('active');
  player2Pane[0].classList.toggle('active');
  
  swapPlayers();

  totalScore = 0;
  score1.textContent = playerScore1;
  score2.textContent = playerScore2;
});



