let block = document.querySelectorAll('.reveal');

function checkVisible() {
    block.forEach((item) => {
        if(!item) return;
        const {top, bottom} = item.getBoundingClientRect();
        if(bottom > 0 && top < window.innerHeight) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }
    })
}

window.addEventListener('scroll', checkVisible);