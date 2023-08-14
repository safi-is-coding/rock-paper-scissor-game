


let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    looses : 0,
    ties : 0,
};



// this localStorage.getItem() help us to get the elements out from the local storage
console.log(JSON.parse(localStorage.getItem('score')));

//updateScore();


function resetScore() {
    score.wins = 0;
    score.looses = 0;
    score.ties = 0;

    localStorage.removeItem('score');
    console.log('Reset Done');
    
    updateScore();

    document.querySelector('.js-result')
        .innerHTML = `RESULT = ${result = 'NONE'} `;

    document.querySelector('.js-moves')
        .innerHTML = 'NO MOVES';
    

}

/*
if (score === null) {
    score = {
        wins: 0,
        looses: 0,
        ties: 0
    }
}
*/

// document.querySelector('.js-scores') 
//    .innerHTML = 'Wins = ${score.wins} , Looses = ${score.looses} , Ties = ${score.//ties}';



function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'tie';
        } else if (computerMove === 'paper') {
            result = 'you loose';
        } else if (computerMove === 'scissor') {
            result = 'you win';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'paper') {
            result = 'tie';
        } else if (computerMove === 'scissor') {
            result = 'you loose';
        } else if (computerMove === 'rock') {
            result = 'you win';
        }
    }
    else if (playerMove === 'scissor') {
        if (computerMove === 'scissor') {
            result = 'tie';
        } else if (computerMove === 'rock') {
            result = 'you loose';
        } else if (computerMove === 'paper') {
            result = 'you win';
        }
    }

    if (result === 'you win') {
        score.wins = score.wins + 1;
    }
    else if (result === 'you loose') {
        score.looses = score.looses + 1;
    }
    else if (result === 'tie') {
        score.ties += 1;    // shorthand operator +=

    }


    // it will help to store the elements in the locak storage which means that it will remain same even when we refresh the page.
    // setItem(' ',' ') helps to store the elements but only in the string form therefore we are using JSON in our program 
    localStorage.setItem('score', JSON.stringify(score));

    
    

    document.querySelector('.js-result')
        .innerHTML = `RESULT = ${result} `;

    document.querySelector('.js-moves')
        .innerHTML = ` Your move ${playerMove} - Computer's move ${computerMove}`;

    
    // alert(`You choose ${playerMove}, computer choose ${computerMove} = ${result} 
    // Wins = ${score.wins} , Looses = ${score.looses} , Ties = ${score.ties} `);


    updateScore()

    document.classList.add('display');

}

function updateScore() {

    //document.classList.add('display');

        document.querySelector('.js-scores') 
        .innerHTML = ` Wins = ${score.wins} , Looses = ${score.looses} , Ties = ${score.ties} `;
        
    }

function pickComputerMove() {
    let word = ['rock', 'paper', 'scissor'];

    const randomNumber = Math.floor(Math.random() * word.length);

    let computerMove = '';

    if (randomNumber === 0) {
        computerMove = 'rock';
        console.log(randomNumber);
    }
    else if (randomNumber === 1) {
        computerMove = 'paper';
        console.log(randomNumber);
    }
    else if (randomNumber === 2) {
        computerMove = 'scissor';
        console.log(randomNumber);
    }

    return computerMove;
}