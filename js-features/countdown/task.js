let begin = document.getElementById('timer');
let time = begin.textContent;
let currentSecond;
let timer;
let str;

let [hour, minute, second] = time.split(':');
currentSecond = hour * 60 * 60 + minute * 60 + Number(second);
console.log(currentSecond);

timer = setInterval(() => {
    
    if (currentSecond === 0) {
        clearInterval(timer);
        window.location.href = 'https://vk.com/doc135663820_691162049?hash=yMP2K9SLZ9eO2fzoJKcVhSSJzzYaSzcZV35gVqMiKYs&dl=vEz4rWZ9KP1aZEmPlitIU0KhlvztuvF2ZWBYzIc8Mxw&from_module=vkmsg_desktop';
        window.alert('Вы победили в конкурсе!');
    }
    currentSecond -= 1;
    hour = Math.floor(currentSecond / 3600);
    minute = Math.floor((currentSecond % 3600) / 60);
    second = Math.floor(currentSecond % 60);
    str = String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0') + ':' + String(second).padStart(2, '0');
    begin.innerText = str;
}, 1000);