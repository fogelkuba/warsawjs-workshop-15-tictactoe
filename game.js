document.addEventListener('DOMContentLoaded', function() {

    let playerClasses = {
        playerA: 'x',
        playerB: 'o'
    };

    let currentPlayer;
    let emptyFields;

    function initGame() {
        const fields = document.querySelectorAll('.board > div');
        currentPlayer = 'playerA';
        emptyFields = 9;

        fields.forEach(field => {
            field.addEventListener('click', fieldClickHandler)
        })
        fields.forEach( field => field.removeAttribute('class'));
    };

    function fieldClickHandler() {
        var playerClass = playerClasses[currentPlayer];
        this.classList.add(playerClass);
        emptyFields--;
        console.log(emptyFields);

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
                initGame();
                return;
            }, 100);

        }
        if (boardCheck.includes('ooo')) {
            setTimeout( () => {
                alert('O wygrywa');
                initGame();
                return;
            }, 100);

        }
        if (!emptyFields) {
            setTimeout( () => {
                alert('Remis');
                initGame();
                return;
            }, 100);

        }
    };

    initGame();
});
