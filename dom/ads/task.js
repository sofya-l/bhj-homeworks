let allCase = document.querySelectorAll('.rotator__case');
let counter = 0;
allCase[counter].style.color = allCase[counter].dataset.color;

function rotator() {
    allCase[counter].classList.remove('rotator__case_active');
    counter = (counter + 1) % allCase.length;
    allCase[counter].classList.add('rotator__case_active');
    allCase[counter].style.color = allCase[counter].dataset.color;
    setTimeout(rotator, Number(allCase[counter].dataset.speed));
}

setTimeout(rotator, Number(allCase[counter].dataset.speed));

