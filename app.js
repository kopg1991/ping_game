/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore , activePlayer ,game ; 

init();

rollBtn = document.querySelector('.btn-roll');
holdBtn = document.querySelector('.btn-hold');
newBtn = document.querySelector('.btn-new');

//document.querySelector('#current-' + activePlayer).textContent = dice;

document.querySelector('.dice').style.display = 'none';

rollBtn.addEventListener('click',function() {
    if(game){
    //Random Number
 let dice = Math.floor(Math.random() * 6) + 1;

    //Display result
    let diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //update the round score IF the rolled number was not 1 

    if (dice !== 1){
        //Add score      
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore
    }
    else
    {
     //next player
     nextPlayer();
        
    }
    }
    
} )

    function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

    }

 holdBtn.addEventListener('click', function(){
     if (game){
     // update current score 
     scores[activePlayer] += roundScore;

     //update the UI

    let score0 = document.querySelector('#score-0');
    let score1 = document.querySelector('#score-1');
    score0.textContent = scores[0];
    score1.textContent = scores[1];
    
     if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        game = false;
        
    }
    else{
    //Next Player 
    nextPlayer();
     //Check how wins
    }
}
 })

newBtn.addEventListener('click', init);
 


function init(){
    scores = [0 , 0];
    roundScore = 0;
    activePlayer = 0;
    game = true;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#score-0').textContent = 0;;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
 }









