const game = new Game();

document.getElementById('begin-game').addEventListener('click', (event) => {
    game.startGame();
    
    event.target.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1'
})
// may need to change arrow function to: function(e) { game.handleKeydown(e) })
document.addEventListener('keydown', () => game.handleKeydown(e))