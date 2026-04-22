let dropdown = document.querySelector('.dropdown');
let list = document.querySelector('.dropdown__list');
let links = document.querySelectorAll('.dropdown__link');
let currentValue = document.querySelector('.dropdown__value');
let items = document.querySelectorAll('.dropdown__item');

links.forEach((item) => item.addEventListener('click', link => {
    link.preventDefault();
    link.stopPropagation();
    if(list.classList.contains('dropdown__list_active')) {
        currentValue.textContent = item.textContent;
        list.classList.remove('dropdown__list_active'); 
    }
}));

dropdown.addEventListener('click', () => { 
    list.classList.add('dropdown__list_active');
});

 
