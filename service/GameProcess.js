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
}