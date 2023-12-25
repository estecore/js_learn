// вывод информации

document.write('Hello World! document.write()'); // устаревший метод?

console.log('Hello World! console.log())'); // вывод в консоль
console.info('Hello World! console.log())'); // тоже вывод в консоль
console.error('Hello World! console.log())'); // тоже вывод в консоль, но в формате ошибки
console.warn('Hello World! console.log())'); // тоже вывод в консоль, но в формате уведомления



// переменные

var num; // var – устаревшее

let n; // объявление переменной

const USER1 = 'имя константы'; // константу нельзя переобъявлять, менять значение 



// условия switch - case

let stroke1 = 1;

switch(stroke1) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log('default')
        break;
}



// всплывающие окна (невозможно задать стили)

/* 
alert('метод alert'); // в комментарий, чтоб не бесил
let data = confirm('метод confirm'); // в комментарий, чтоб не бесил
console.log(data); // можно определить, что нажал пользователь
prompt('Введите что-то', 'То, что будет введено по умолчанию') // окно с полем ввода
*/



// обработчики событий

let count = 0;
function btnClick(el) {
    count++;
    // el.innerHTML = 'Click on button: ' + count;
    // el.style.background = 'black';
    el.style.cssText = 'border-radius: 5px; border: 0; font-size: 18px;';
}

function btnDblClick() {
    alert('Double click!');
}

function mouseOver() {
    alert('Mouse over!!');
}

function mouseOut() {
    alert('Mouse out!');
}

function onInput(el) {
    console.log(el.value);
}