var scores, roundScore, activePlayer, gamePlaying, ach99, ach50;

init();

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        document.querySelector('.roll-1').style.display = 'none';
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
    
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer(); 
            document.querySelector('.roll-1').style.display = 'block';
        }

        if (roundScore >= 50) {
            ach50 = false;
        }
    }
});
    
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
        if (scores[0] == 99 || scores[1] == 99) {
            ach99 = false
        }
    
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
})

function nextPlayer () {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init)

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.inst-panel').style.display = 'none';
    document.querySelector('.btn-back').style.display = 'none';
    document.querySelector('.roll-1').style.display = 'none';
    document.querySelector('.ach-99-panel').style.display = 'none';
    document.querySelector('.ach-99-panel-done').style.display = 'none';
    document.querySelector('.btn-reset').style.display = 'none';
    document.querySelector('.ach-50-panel').style.display = 'none';
    document.querySelector('.ach-50-panel-done').style.display = 'none';
}

document.querySelector('.btn-inst').addEventListener('click', function () {
    document.querySelector('.dice').style.display = 'none';
    document.querySelector("#name-0").style.display = 'none';
    document.querySelector("#name-1").style.display = 'none';
    document.querySelector("#score-0").style.display = 'none';
    document.querySelector("#score-1").style.display = 'none';
    document.querySelector("#current-0").style.display = 'none';
    document.querySelector("#current-1").style.display = 'none';
    document.querySelector(".btn-hold").style.display = 'none';
    document.querySelector(".btn-roll").style.display = 'none';
    document.querySelector(".btn-new").style.display = 'none';
    document.querySelector(".player-current-label").style.display = 'none';
    document.querySelector(".player-current-label").style.display = 'none';
    document.querySelector(".player-current-box").style.display = 'none';
    document.getElementById("label").style.display = 'none';
    document.getElementById("box").style.display = 'none';
    document.querySelector(".btn-inst").style.display = 'none';
    document.querySelector('.btn-ai').style.display = 'none';
    document.querySelector('.roll-1').style.display = 'none';
    document.querySelector('.btn-back').style.display = 'block';
    document.querySelector('.inst-panel').style.display = 'block';
})

document.querySelector('.btn-back').addEventListener('click', function () {
    document.querySelector('.btn-back').style.display = 'block';
    document.querySelector('.inst-panel').style.display = 'block';
    document.querySelector("#name-0").style.display = 'block';
    document.querySelector("#name-1").style.display = 'block';
    document.querySelector("#score-0").style.display = 'block';
    document.querySelector("#score-1").style.display = 'block';
    document.querySelector("#current-0").style.display = 'block';
    document.querySelector("#current-1").style.display = 'block';
    document.querySelector(".btn-hold").style.display = 'block';
    document.querySelector(".btn-roll").style.display = 'block';
    document.querySelector(".btn-new").style.display = 'block';
    document.querySelector(".player-current-label").style.display = 'block';
    document.querySelector(".player-current-label").style.display = 'block';
    document.querySelector(".player-current-box").style.display = 'block';
    document.getElementById("label").style.display = 'block';
    document.getElementById("box").style.display = 'block';
    document.querySelector(".btn-inst").style.display = 'block';
    document.querySelector('.btn-inst').style.display = 'block';
    document.querySelector('.btn-ai').style.display = 'block';
    document.querySelector('.btn-back').style.display = 'none';
    document.querySelector('.inst-panel').style.display = 'none';
    document.querySelector('.ach-99-panel').style.display = 'none';
    document.querySelector('.ach-99-panel-done').style.display = 'none';
    document.querySelector('.btn-reset').style.display = 'none';
    document.querySelector('.ach-50-panel').style.display = 'none';
    document.querySelector('.ach-50-panel-done').style.display = 'none';
})

document.querySelector('.btn-ai').addEventListener('click', function () {
    document.querySelector('.dice').style.display = 'none';
    document.querySelector("#name-0").style.display = 'none';
    document.querySelector("#name-1").style.display = 'none';
    document.querySelector("#score-0").style.display = 'none';
    document.querySelector("#score-1").style.display = 'none';
    document.querySelector("#current-0").style.display = 'none';
    document.querySelector("#current-1").style.display = 'none';
    document.querySelector(".btn-hold").style.display = 'none';
    document.querySelector(".btn-roll").style.display = 'none';
    document.querySelector(".btn-new").style.display = 'none';
    document.querySelector(".player-current-label").style.display = 'none';
    document.querySelector(".player-current-label").style.display = 'none';
    document.querySelector(".player-current-box").style.display = 'none';
    document.getElementById("label").style.display = 'none';
    document.getElementById("box").style.display = 'none';
    document.querySelector(".btn-inst").style.display = 'none';
    document.querySelector('.btn-ai').style.display = 'none';
    document.querySelector('.roll-1').style.display = 'none';
    document.querySelector('.btn-back').style.display = 'block';
    document.querySelector('.btn-reset').style.display = 'block';
    if (ach99 == false) {
        document.querySelector('.ach-99-panel').style.display = 'none';
        document.querySelector('.ach-99-panel-done').style.display = 'block';
    } else {
        document.querySelector('.ach-99-panel').style.display = 'block';
    }
    if (ach50 == false) {
        document.querySelector('.ach-50-panel').style.display = 'none';
        document.querySelector('.ach-50-panel-done').style.display = 'block';
    } else {
        document.querySelector('.ach-50-panel').style.display = 'block';
    }
})

document.querySelector('.btn-reset').addEventListener('click', function () {
    document.querySelector('.ach-99-panel').style.display = 'block';
    document.querySelector('.ach-99-panel-done').style.display = 'none';
    document.querySelector('.ach-50-panel').style.display = 'block';
    document.querySelector('.ach-50-panel-done').style.display = 'none';
    showAch();
})

function showAch () {
    document.querySelector('.ach-99-panel-done').style.display = 'none';
    document.querySelector('.ach-99-panel').style.display = 'block';
}

