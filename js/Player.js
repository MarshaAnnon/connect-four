class Player {
    constructor(id, name, color, active = false) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
                    // ^ this indicates that the method I am calling is available on the object that's being initialized.
    }

    /**
     * Creates token objects for player
     * @param  {integer} num - Number of tokens to be created
     */ 
    createTokens(num) {
        const tokens = [];

        for(let i = 0; i < num; i++) {
            let token = new Token(i, this);
            tokens.push(token)
        }
        return tokens;
    }

    /**
     * Gets all tokens that haven't been dropped
     * @return  {array}  Array of unused tokens
     */
    get unusedTokens() {
        return this.tokens.filter(token => !token.dropped);
    }


    // how would you display the remaining number of tokens a given player has?
    /**
     * Gets the active token by returning the first token in the array of unused tokens
     * @return  {Object}  First token object in the array of unused tokens
     */
    get activeToken() {
       return this.unusedTokens[0];
    }
}