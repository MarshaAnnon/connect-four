const newGame = new Game()

document.findElementById('begin-game').addEventListener('click', () => {
    Game.startGame();
    
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1'
})
