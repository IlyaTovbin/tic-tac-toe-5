import {WinnerParams, Point} from './WinnerParams.js';

export default class GameLogic {


    static checkWin(startI, startJ, gameProcess){
        this.gameProcess = gameProcess;
        this.currentI = startI;
        this.currentJ = startJ;
        this.winnerParams;

        if(
            this.checkVertical() ||
            this.checkHorizontal() ||
            this.checkDiagonal()
        ){
            return true;
        }

        return false;
    }

    static checkVertical(){
        let i = this.currentI - 1;
        let startI = this.currentI;
        let startJ = this.currentJ;
        let endI = this.currentI;
        let endJ = this.currentJ;
        let count = 1;

        while(
            i >= 0 &&
            this.gameProcess.matrixObj.getValueByIndexes(i, this.currentJ) === this.gameProcess.turn
        ){
            count++;
            if(count >= this.gameProcess.condition){
                startI = i;
                this.winnerParams = new WinnerParams(new Point(startI, startJ), new Point(endI, endJ));
                return true;
            } 
            i--;
        }

        startI = i + 1;

        i = this.currentI + 1;

        while(
            i < this.gameProcess.size &&
            this.gameProcess.matrixObj.getValueByIndexes(i, this.currentJ) === this.gameProcess.turn
        ){
            count++;
            if(count >= this.gameProcess.condition){
                endI = i;
                this.winnerParams = new WinnerParams(new Point(startI, startJ), new Point(endI, endJ));
                return true;
            } 
            i++;
        }


        return false;
    }

    static checkHorizontal(){
        let j = this.currentJ - 1;
        let startI = this.currentI;
        let startJ = this.currentJ;
        let endI = this.currentI;
        let endJ = this.currentJ;
        let count = 1;

        while(
            j >= 0 &&
            this.gameProcess.matrixObj.getValueByIndexes(this.currentI, j) === this.gameProcess.turn
        ){
            count++;
            if(count >= this.gameProcess.condition){
                startJ = j;
                this.winnerParams = new WinnerParams(new Point(startI, startJ), new Point(endI, endJ));
                return true;
            } 
            j--;
        }

        startJ = j + 1;
        j = this.currentJ + 1;

        while(
            j < this.gameProcess.size &&
            this.gameProcess.matrixObj.getValueByIndexes(this.currentI, j) === this.gameProcess.turn
        ){
            count++;
            if(count >= this.gameProcess.condition){
                endJ = j;
                this.winnerParams = new WinnerParams(new Point(startI, startJ), new Point(endI, endJ));
                return true;
            } 
            j++;
        }
        return false;
    }

    static checkDiagonal(){
        let j = this.currentJ - 1;
        let i = this.currentI - 1;
        let startI = this.currentI;
        let startJ = this.currentJ;
        let endI = this.currentI;
        let endJ = this.currentJ;
        let count = 1;

        while(
            j >= 0 && i >= 0 &&
            this.gameProcess.matrixObj.getValueByIndexes(i, j) === this.gameProcess.turn
        ){
            count++;
            if(count >= this.gameProcess.condition){
                startI = i;
                startJ = j;
                this.winnerParams = new WinnerParams(new Point(startI, startJ), new Point(endI, endJ));
                return true;
            } 
            j--;
            i--;
        }
        startI = i + 1;
        startJ = j + 1;
        j = this.currentJ + 1;
        i = this.currentI + 1

        while(
            j < this.gameProcess.size && i < this.gameProcess.size &&
            this.gameProcess.matrixObj.getValueByIndexes(i, j) === this.gameProcess.turn
        ){
            count++;
            if(count >= this.gameProcess.condition){
                endJ = j;
                endI = i;
                this.winnerParams = new WinnerParams(new Point(startI, startJ), new Point(endI, endJ));
                return true;
            } 
            j++;
            i++;
        }
        
        return false;
    }

    static getWinnerParams(){
        return this.winnerParams;
    }
}
