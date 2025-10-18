document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    const gameState = ['', '', '', '', '', '', '', '', ''];
    
    squares.forEach((square, index) => {
        square.classList.add('square');
        
        // click event
        square.addEventListener('click', function() {
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer;
                
                // player switched
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});