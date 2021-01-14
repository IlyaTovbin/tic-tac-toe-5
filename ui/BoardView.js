
import { Menu } from './Menu.js';

export class BoardView {
    element = document.getElementById('view');
    container = document.createElement('div');
    constructor(game){
        this.game = game;
        this.updateBoard(game);
        this.appendEndBtn();
        this.element.replaceChild(this.container, this.element.childNodes[0]);
    }

    updateBoard(){
        let table = document.createElement('table');
        for( let i = 0; i < this.game.size; i++){
            let tr = document.createElement('tr');
            for(let j = 0; j < this.game.size; j++){
                let td = document.createElement("td");
                td.setAttribute('id', 'xo-' + i + '-' + j);
                td.value = this.game.matrixObj.matrix[i][j];
                td.addEventListener('click', () => this.playerClick(i, j));
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        this.container.appendChild(table);
    }

    playerClick(i, j){
        this.game.playerClick(i, j);
        document.getElementById('xo-' + i + '-' + j)
        .innerText = this.game.getMatrixObj().getValueByIndexes(i, j);
    }

    appendEndBtn(){
        let backBtn = document.createElement('button');
        backBtn.innerHTML = 'End Game';
        backBtn.setAttribute('id', 'btn-back');
        backBtn.addEventListener('click', () => this.onClickEndBtn());
        this.container.appendChild(backBtn);
    }

    onClickEndBtn(){
        this.element.removeChild(this.element.childNodes[0]);
        let x = new Menu();
    }
}