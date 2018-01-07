document.addEventListener('DOMContentLoaded', function() {

    var playerClasses = {
        playerA: 'x',
        playerB: 'o'
    };
    var playerNames = {
        playerA: 'player - X',
        playerB: 'player - O'
    }
    var playerResults={
        playerA: 0,
        playerB: 0
    }
    var resultPlayerA = document.querySelector('.resultPlayerA');
    var namePlayerA = document.querySelector('.namePlayerA');
    var resultPlayerB = document.querySelector('.resultPlayerB');
    var namePlayerB = document.querySelector('.namePlayerB');

    let currentPlayer;
    var nextPlayer;
    let emptyFields;
    let roundCounter = 0;

    var resetGame = document.querySelector('.resetGame');
    console.log(resetGame)
    resetGame.addEventListener('click', resetGameHandler);
    function resetGameHandler(){
        playerNames = {
            playerA: 'player - X',
            playerB: 'player - O'
        };
        playerResults={
            playerA: 0,
            playerB: 0
        };
        roundCounter = 0;
        console.log('resetGame');
        initGame();
    }

    initGame();

    var changeNameForA = document.querySelector('.changePlayerNamesA');
    changeNameForA.addEventListener('click', changeNameA);
    var changeNameForB = document.querySelector('.changePlayerNamesB');
    changeNameForB.addEventListener('click', changeNameB);

    function changeNameA(){
        var A = prompt('Type players name A:', '');
        if (A != null) {
            playerNames['playerA'] = A;
        }
        initGame() ;
    };
    function changeNameB(){
        var B = prompt('Type players name B:', '');
        if (B != null) {
            playerNames['playerB'] = B;
        }
        initGame() ;
    };

    function initGame() {
        roundCounter++;
        document.querySelector('.roundCounter').innerHTML = `Round: ${roundCounter}`;

        namePlayerA.innerHTML = `${playerNames['playerA']}`
        resultPlayerA.innerHTML = `${playerResults['playerA']}`
        namePlayerB.innerHTML = `${playerNames['playerB']}`
        resultPlayerB.innerHTML = `${playerResults['playerB']}`


        const fields = document.querySelectorAll('.board > div');
        currentPlayer = 'playerA';
        nextPlayer = 'Start Game';
        emptyFields = 9;

        fields.forEach(field => {
            field.addEventListener('click', fieldClickHandler)
        })
        fields.forEach( field => field.removeAttribute('class'));
    };

    function displyPlayer(){
        if (currentPlayer === 'playerA') {
            nextPlayer = playerNames['playerB'];
            // nextPlayer = 'playerB';
        }else{
            nextPlayer = playerNames['playerA'];
            // nextPlayer = 'playerA';
        };
        document.querySelector('.nextPlayer').innerHTML = `Now ${nextPlayer}`
    }

    function fieldClickHandler() {
        displyPlayer();

        var playerClass = playerClasses[currentPlayer];
        this.classList.add(playerClass);
        emptyFields--;
        // console.log(emptyFields);

        currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA';
        this.removeEventListener('click', fieldClickHandler);

        checkWinner();
    };



    function checkWinner(){
        const fields = document.querySelectorAll('.board > div');

        /*
            +---+---+---+
            | 0 | 1 | 2 |
            +---+---+---+
            | 3 | 4 | 5 |
            +---+---+---+
            | 6 | 7 | 8 |
            +---+---+---+
        */

        //horizontal winning configurations
        var row1 = fields[0].className + fields[1].className + fields[2].className;
        var row2 = fields[3].className + fields[4].className + fields[5].className;
        var row3 = fields[6].className + fields[7].className + fields[8].className;

        //vertical winning configurations
        var column1 = fields[0].className + fields[3].className + fields[6].className;
        var column2 = fields[1].className + fields[4].className + fields[7].className;
        var column3 = fields[2].className + fields[5].className + fields[8].className;

        //diagonal winning configurations
        var diagonal1 = fields[0].className + fields[4].className + fields[8].className;
        var diagonal2 = fields[2].className + fields[4].className + fields[6].className;

        var boardCheck = [
            row1,
            row2,
            row3,
            column1,
            column2,
            column3,
            diagonal1,
            diagonal2
        ];

        if (boardCheck.includes('xxx')) {
            setTimeout( () => {
                alert('X wygrywa');
                playerResults['playerA']++
                initGame();
            }, 100);
            return;
        }
        if (boardCheck.includes('ooo')) {
            setTimeout( () => {
                alert('O wygrywa');
                playerResults['playerB']++
                initGame();
            }, 100);
            return;
        }
        if (!emptyFields) {
            setTimeout( () => {
                alert('Remis');
                initGame();
                return;
            }, 100);

        }
    };


});
