class Game {
    constructor(container) {
        this.container = container;
        this.word = container.querySelector('.word');
        this.statusWin = container.querySelector('.status__wins');
        this.statusLoss = container.querySelector('.status__loss');
        this.timer = container.querySelector('.status__timer');
        this.timerID;

        this.reset();
        this.checkKey();
    }

    reset() {
        this.setWord();
        this.statusWin.textContent = '0';
        this.statusLoss.textContent = '0';
    }

    checkKey() {
        let check = (e) => {
            let symbol = this.currentSymbol.textContent;
            if(e.key.toLowerCase() === symbol.toLowerCase()) {
                this.succes();
                return;
            } else if (e.key === 'Shift' || e.key === 'Enter' || e.key === 'Alt' || e.key === 'Control' || e.key === 'CapsLock') {
                return;
            }
            this.fail();
        }
        document.addEventListener('keyup', check);
    }

    setTimer(second) {
        this.timer.textContent = second;
        clearInterval(this.timerID);
        this.timerID = setInterval(() => {
            second -= 1;
            this.timer.textContent = second;
            if(second === 0) {
                this.fail();
            }
        }, 1000);
    }

    succes() {
        if(this.currentSymbol.classList.contains('current_symbol')) {
            this.currentSymbol.classList.remove('current_symbol');
        }
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol = this.currentSymbol.nextElementSibling;

        if(this.currentSymbol !== null) {
            this.currentSymbol.classList.add('current_symbol');
            return;
        }

        this.statusWin.textContent = Number(this.statusWin.textContent) + 1;

        if (Number(this.statusWin.textContent) === 10) {
            alert('Вы победили'); 
            this.reset();
        }

        this.setWord();
    }

    fail() {
        this.statusLoss.textContent = Number(this.statusLoss.textContent) + 1;
        if (Number(this.statusLoss.textContent) === 5) {
            alert('Вы проиграли');
            this.reset();
        }

        this.setWord();
    }

    setWord() {
        const words = [
        'bob',
        'awesome',
        'netology',
        'hello мир',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript',
        'милый kitty',
        'я люблю kitkat'
      ];
      let currentWord = words[Math.floor(Math.random() * words.length)];
      console.log(currentWord);

      this.word.innerHTML = '';
      for (let i = 0; i < currentWord.length; i++) {
        this.word.insertAdjacentHTML('beforeend', `<span class="symbol">${currentWord[i]}</span>`);
        if (i === 0) {
            document.querySelector('.symbol').classList.add('current_symbol');
            this.currentSymbol = this.word.querySelector('.current_symbol');
        }
      }
      this.setTimer(currentWord.length);
    }
}

new Game(document.getElementById('game'));