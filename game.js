document.addEventListener('DOMContentLoaded', function() {

    let playerClasses = {
        playerA: 'red',
        playerB: 'blue'
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
    };

    function fieldClickHandler() {
        var playerClass = playerClasses[currentPlayer];
        this.classList.add(playerClass);
        emptyFields--;
        console.log(emptyFields);

        if (!emptyFields) {
            console.log('Koniec Gry');
            alert('Koniec Gry!');
        }

        currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA';
        this.removeEventListener('click', fieldClickHandler);
    };

    initGame();
});
