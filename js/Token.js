class Token {
    constructor(owner, id, dropped) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`
        this.dropped = false;
    }

    get htmlToken() {
        return document.getElementById()
    }

    drawHTMLToken() {
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id', this.id);
        token.setAttribute('class', 'token');
        token.style.backgroundColor = this.owner.color;            
    }
    


}