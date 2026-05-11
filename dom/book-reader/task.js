let book = document.querySelector('.book');
let fontSize = book.querySelectorAll('.font-size');
let containerText = document.querySelector('.book__control_color');
let textColor = containerText.querySelectorAll('.color');
let containerBg = document.querySelector('.book__control_background');
let bgColor = containerBg.querySelectorAll('.color');
let fontActive;
let colorActive;
let bgColorActive;

fontSize.forEach((link) => {
    link.addEventListener('click', function() {
        event.preventDefault();
        if(link.classList.contains('.font-size_active')) return;
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        book.classList.remove(fontActive);
        link.classList.add('font-size_active');
        fontActive = 'book_fs-' + link.dataset.size;
        book.classList.add(fontActive);
    });
});

textColor.forEach((color) => {
    color.addEventListener('click', function() {
        event.preventDefault();
        if(color.classList.contains('.color_active')) return;
        document.querySelector('.color_active').classList.remove('color_active');
        book.classList.remove(colorActive);
        color.classList.add('color_active');
        colorActive = 'book_color-' + color.dataset.textColor;
        book.classList.add(colorActive);
    });
});

bgColor.forEach((color) => {
    color.addEventListener('click', function() {
        event.preventDefault();
        if(color.classList.contains('.color_active')) return;
        document.querySelector('.color_active').classList.remove('color_active');
        book.classList.remove(bgColorActive);
        color.classList.add('color_active');
        bgColorActive = 'book_bg-' + color.dataset.bgColor;
        book.classList.add(bgColorActive);
    });
});