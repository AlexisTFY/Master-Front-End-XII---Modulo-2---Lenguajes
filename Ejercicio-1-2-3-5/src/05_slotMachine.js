class SlothMachine {
    constructor() {
        this._machineMessage = {
            LOSE: `Good luck next time!!`,
            WIN: `Congratulations!!!. You won <coinsNumber> coins!!`,
        }
        this._coinsNumber = 1
    }

    winSlot = () => Math.random() >= 0.5;

    winGame = () => this.winSlot() && this.winSlot() && this.winSlot();

    win = () => {
        console.log(this._machineMessage.WIN.replace('<coinsNumber>', this._coinsNumber))
        this._coinsNumber = 1
    }

    lose = () => {
        console.log(this._machineMessage.LOSE)
        this._coinsNumber++
    }
    
    play = () => this.winGame() ? this.win() : this.lose();
}

const machine1 = new SlothMachine();
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 