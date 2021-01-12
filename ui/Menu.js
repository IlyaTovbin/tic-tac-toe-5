import { BoardView } from './BoardView.js';
import { GameProcess } from '../service/GameProcess.js';

export class Menu {
    constructor(){
        this.createMenuView()
    }

    createMenuView(){
        let element = document.getElementById('view');
        this.menu = document.createElement('div');

        this.addInput('Size:', 'size-input');
        this.addInput('Win condition(number):', 'condition-input');

        let btn = document.createElement('button');
        btn.innerHTML = 'Start';
        btn.setAttribute('id', 'btn-start');
        btn.addEventListener('click', () => this.startGame());

        this.menu.appendChild(btn);
        element.appendChild(this.menu);
    }

    startGame(){
        let size = parseInt(document.getElementById('size-input').value);
        let condition = parseInt(document.getElementById('condition-input').value);

        let gameProc;
        if(size && condition){
            gameProc = new GameProcess(size, condition);
        }else{
            gameProc = new GameProcess();
        }

        let boardView = new BoardView(gameProc);
    }


    addInput(labelValue, inputId){
        let label = document.createElement('label');
        label.innerHTML = labelValue;
        label.setAttribute('for', inputId);

        let input = document.createElement('input');
        input.setAttribute('id', inputId);
        input.setAttribute('type', 'number');

        this.menu.appendChild(label);
        this.menu.appendChild(input);
    }
    
}