document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    const status = document.getElementById('status');
    const newGameButton = document.querySelector('.btn');
    let currentPlayer = 'X';
    const gameState = ['', '', '', '', '', '', '', '', ''];
    
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    
    function checkWinner() {
        for (let pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                status.textContent = `Congratulations! ${gameState[a]} is the Winner!`;
                status.classList.add('you-won');
                return true;
            }
        }
        return false;
    }
    
    squares.forEach((square, index) => {
        square.classList.add('square');
        
        square.addEventListener('mouseenter', function() {
            square.classList.add('hover');
        });
        
        square.addEventListener('mouseleave', function() {
            square.classList.remove('hover');
        });
        
        square.addEventListener('click', function() {
            if (square.textContent === '') {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer;
                
                if (!checkWinner()) {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });
    
    
    newGameButton.addEventListener('click', function() {
        squares.forEach((square, index) => {
            square.textContent = '';
            square.classList.remove('X', 'O');
            gameState[index] = '';
        });
        
        status.textContent = 'Move your mouse over a square and click to play an X or an O.';
        status.classList.remove('you-won');
        currentPlayer = 'X';
    });
});