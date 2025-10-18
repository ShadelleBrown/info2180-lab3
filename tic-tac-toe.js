document.addEventListener('DOMContentLoaded', function() {

    // all div elements inside the board
    const squares = document.querySelectorAll('#board div');
    
    // square class added to each square
    squares.forEach(square => {
        square.classList.add('square');
    });
});