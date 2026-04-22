let tab = document.getElementsByClassName('tab');
let content = document.getElementsByClassName('tab__content');

for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function() {
        let currentTab = document.querySelector('.tab_active');
        let currentContent = document.querySelector('.tab__content_active');

        currentTab.classList.remove('tab_active');
        tab[i].classList.add('tab_active');
        currentContent.classList.remove('tab__content_active');
        content[i].classList.add('tab__content_active');

    });
}

