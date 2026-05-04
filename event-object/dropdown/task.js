let dropdown = document.querySelector('.dropdown');
let list = document.querySelector('.dropdown__list');
let currentValue = document.querySelector('.dropdown__value');

dropdown.addEventListener('click', () => { 
    list.classList.toggle('dropdown__list_active');
});

list.addEventListener('click', function(event) {
    let item = event.target.closest('.dropdown__link');

    event.preventDefault();
    event.stopPropagation();
    if(!item) return;

    if(list.classList.contains('dropdown__list_active')) {
        currentValue.textContent = item.textContent;
        list.classList.remove('dropdown__list_active'); 
    }   
})

 
