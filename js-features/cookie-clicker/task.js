let clickCounter = document.getElementById('clicker__counter');
let clickSpeed = document.getElementById('clicker__speed');
let cookie = document.getElementById('cookie');
let lastClickTime = 0;

cookie.addEventListener('click', clicker);


function clicker() {
    clickCounter.innerText = Number(clickCounter.textContent) + 1;
    cookie.style.width = cookie.offsetWidth  === 200 ? '230px' : '200px'; 

    clickSpeed.innerText = (1 / ((Date.now() - lastClickTime) / 1000)).toFixed(2);
    lastClickTime = Date.now();
};
