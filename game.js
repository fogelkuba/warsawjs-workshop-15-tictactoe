document.addEventListener('DOMContentLoaded', function() {

    let playerClasses = {
        playerA: 'red',
        playerB: 'blue'
    };

    let currentPlayer;

    function initGame() {
        const fields = document.querySelectorAll('.board > div');

        currentPlayer = 'playerA';
        fields.forEach(field => {
            field.addEventListener('click', fieldClickHandler)
        })
    };

    function fieldClickHandler() {
        var playerClass = playerClasses[currentPlayer];
        this.classList.add(playerClass);

        currentPlayer = currentPlayer === 'playerA' ? 'playerB' : 'playerA';
        this.removeEventListener('click', fieldClickHandler);
    };

    initGame();
});
