class Board {
    constructor(row, column, spaces) {
        this.row = 6;
        this.column = 7;
        this.spaces = this.createSpaces();
    }

    /** 
        * Generate 2D array of spaces
        * @return  {Array}  An array os space objects
    */
    createSpaces() {
        const spaces = [];

        for(let x = 0; x < this.columns; x++) {
            const column = []
            for(let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                column.push(space);
            }
            spaces.push(column);
        }
        return spaces;
    }
}