import Matrix from './Matrix.js';
import GameLogic from './GameLogic.js';

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
            if( GameLogic.checkWin(i, j, this) ){
                console.log(GameLogic.getWinnerParams());
            }else{
                this.nextTurn();
            }
        }
    }

    getMatrixObj(){
        return this.matrixObj;
    }
}