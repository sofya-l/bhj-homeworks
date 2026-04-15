let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let hole;

for (let i = 1; i < 10; i ++) {
    let str = 'hole' + i;
    hole = document.getElementById(str);
    hole.addEventListener('click', hit);
}

function hit() {
    if(this.className.includes( 'hole_has-mole' )) {
        dead.innerText = Number(dead.textContent) + 1;
        check();
    } else {
        lost.innerText = Number(lost.textContent) + 1;
        check();
    }
}

function check() {
    if(dead.textContent === '10') {
        window.alert('Победа!');
        dead.innerText = '0';
        lost.innerText = '0';
    } else if (lost.textContent === '5') {
        window.alert('Вы проиграли:(');
        dead.innerText = '0';
        lost.innerText = '0';
    }
}


