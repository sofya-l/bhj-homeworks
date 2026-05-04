let container = document.getElementById('tabs1');
let tab = container.querySelectorAll('.tab');
let content = container.querySelectorAll('.tab__content');


for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', function() {
        let currentTab = container.querySelector('.tab_active');
        let currentContent = container.querySelector('.tab__content_active');

        if(currentTab) {
            currentTab.classList.remove('tab_active');
        }
        tab[i].classList.add('tab_active');

        if(currentContent) {
            currentContent.classList.remove('tab__content_active');
        }
        content[i].classList.add('tab__content_active');
    });
}
