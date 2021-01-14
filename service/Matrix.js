export default class Matrix {

    constructor(size){
        this.size = size;
        this.createMatrix();
    }

    createMatrix(){
        this.matrix = new Array(this.size);
        for(let i = 0; i < this.size; i++){ 
            this.matrix[i] = new Array(this.size);
            for(let j = 0; j < this.size; j++){
                this.matrix[i][j] = ' ';
            }
        }
    }

    updateMatrix(i, j, turn){
        this.matrix[i][j] = turn;
    }

    getValueByIndexes(i, j){
        return this.matrix[i][j];
    }

}