export default class GameLogic {

    static checkWin(startI, startJ, gameProcess){
        this.gameProcess = gameProcess;
        this.startI = startI;
        this.startJ = startJ;

        if(
            this.checkVertical() ||
            this.checkHorizontal() ||
            this.checkDiagonal()
        ){
            return true;
        }
    }

    checkVertical(){
        let i = this.startI - 1;
        let count = 1;

        while(
            i >= 0 &&
            this.gameProcess.matrixObj.getValueByIndexes(i, this.startJ) === this.gameProcess.turn
        ){
            i--;
            count++;
            if(count >= this.gameProcess.condition) return true;
            
        }

        i = this.startI + 1;

        while(
            i < this.gameProcess.size &&
            this.gameProcess.matrixObj.getValueByIndexes(i, this.startJ) === this.gameProcess.turn
        ){
            i++;
            count++;
            if(count >= this.gameProcess.condition) return true;
            
        }
        return false;
    }

    checkHorizontal(){
        let j = this.startJ - 1;
        let count = 1;

        while(
            j >= 0 &&
            this.gameProcess.matrixObj.getValueByIndexes(this.startI, j) === this.gameProcess.turn
        ){
            j--;
            count++;
            if(count >= this.gameProcess.condition) return true;
            
        }

        j = this.startJ + 1;

        while(
            j < this.gameProcess.size &&
            this.gameProcess.matrixObj.getValueByIndexes(this.startI, j) === this.gameProcess.turn
        ){
            j++;
            count++;
            if(count >= this.gameProcess.condition) return true;
        }
        return false;
    }

    checkDiagonal(){
        let j = this.startJ - 1;
        let i = this.startI - 1
        let count = 1;

        while(
            j >= 0 && i >= 0 &&
            this.gameProcess.matrixObj.getValueByIndexes(i, j) === this.gameProcess.turn
        ){
            j--;
            i--
            count++;
            if(count >= this.gameProcess.condition) return true;
        }

        j = this.startJ + 1;
        i = this.startI + 1

        while(
            j < this.gameProcess.size && i < this.gameProcess.size &&
            this.gameProcess.matrixObj.getValueByIndexes(i, j) === this.gameProcess.turn
        ){
            j++;
            i++;
            count++;
            if(count >= this.gameProcess.condition) return true;
            
        }
        
        return false;
    }
}
