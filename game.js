document.addEventListener('DOMContentLoaded', function() {

    function initGame() {
        const fields = document.querySelectorAll('.board > div');
        fields.forEach(field => {
            field.addEventListener('click', fieldClickHandler)
        })
    };

    function fieldClickHandler() {
        console.log('hello', this)
    };

    initGame();
});
