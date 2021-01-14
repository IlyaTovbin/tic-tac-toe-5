import Matrix from './Matrix.js';

const defaultParameter = 3;

export class GameProcess{

    constructor(size = defaultParameter, condition = defaultParameter){
        this.size = size;
        this.condition = condition;
        this.turn = 'X';
        this.matrixObj = new Matrix(this.size);
    }

    nextTurn(){
        this.turn = this.turn === 'X' ? 'O' : 'X';
    }

    playerClick(i, j){
        if(this.matrixObj.getValueByIndexes(i, j) === ' '){
            this.matrixObj.updateMatrix(i, j, this.turn);
            this.checkWin(i, j);
            this.nextTurn();
        }
    }

    getMatrixObj(){
        return this.matrixObj;
    }

    checkWin(i, j){
        this.matrixObj.getValueByIndexes(i, j)
        
    }
}