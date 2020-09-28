class Game {
    constructor() {
        this.board = new Board;
        this.players = this.createPlayers(2);
        this.ready = false;
    }

    /**
     * Creates 2 player objects
     * @return  {array}  An array of 2 player objects
     */
    createPlayers() {
        const players = [
            new Player('Player A', 1, '#e15258', true),
            new Player('Player B', 2, '#e59a13')
        ];       
        return players;   
    }
    /**
     * begins game
     */
    startGame() {
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    /**
     * Returns active player
     * @return  {Object} player -The active player
     */

    get activePlayer() {
        return this.players.find(player => player.active);
    }

    

}