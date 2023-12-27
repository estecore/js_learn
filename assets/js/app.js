/*

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

alert('метод alert'); // в комментарий, чтоб не бесил
let data = confirm('метод confirm'); // в комментарий, чтоб не бесил
console.log(data); // можно определить, что нажал пользователь
prompt('Введите что-то', 'То, что будет введено по умолчанию') // окно с полем ввода



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



// управление элементами и обработка форм

// let pText = document.getElementById('p__text');
// pText.title = 'New__p__title';
// console.log(pText.title); // обращение к атрибутам
// pText.style.color = '#FF0000';
// pText.style.backgroundColor = 'black';
// pText.innerHTML = 'New <br> text';

// let spans = document.getElementsByTagName('span');

// for (let i = 0; i < spans.length; i++) {
//     console.log(spans[i].innerHTML);
// }


// document.getElementById('form').addEventListener('submit', checkForm); // вешаем обработчик событий, чтобы в HTML не было Js-кода

// function checkForm(event) {
//     event.preventDefault();

//     let el = document.getElementById('form');

//     let name = el.name.value,
//         pass = el.pass.value,
//         repass = el.repass.value,
//         state = el.state.value,
//         submit = el.submit.value;

//     let fail = '';

//     if (name == '' || pass == '' || repass == '' || state == '') {
//         fail = 'Заполните все поля!';
//     } else if (name.length <= 1 || name.length > 50) {
//         fail = 'Введите корректное имя';
//     } else if (pass != repass) {
//         fail = 'Пароли не совпадают!';
//     }

//     if (fail != '') {
//         document.getElementById('fail').innerHTML = fail;
//     } else {

//         alert('Все данные заполнены корректно!');
//         // window.location = 'https://estecore.ru'; можно перенаправлять пользователя
//         // return false; но нужно вернуть false
//     }

//     // return false; // чтобы страница не перезагружалась во время любой отправки формы
     
// }



// таймеры и интервалы 

let id = setInterval(my__func, 1000);

let counter = 0;
function my__func() {
    counter++;

    console.log(counter);

    if (counter == 5) {
        clearInterval(id); // останавливает определённый интервал
    }
}

// setInterval(function(){
//     // console.log('interval')
// }, 1000)

setTimeout(function() {
    console.log('timer');
}, 5100);



// создание классов и объектов

let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);

let arr = [39, 4, 1, 2, 0, 3, 4, -49, 5];
console.log(arr.join(', '));
console.log(arr.sort());
console.log(arr.reverse().join(' | '));

let stroka = arr.join(' | ');
console.log(stroka.split(' | '));

class Person {

    constructor(name, age, happinies) {
        this.name = name;
        this.age = age;
        this.happinies = happinies;
    }

    info() {
        console.log('Человек: ' + this.name + '. Возраст: ' + this.age + '. Счастливый? ' + this.happinies);
    }
}

let imya = new Person('Imya', '5', 'yes');
console.log(imya);
imya.info();

*/



// calculator

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
let action = '+';

// console.log(resultElement.textContent);  // textContent

plusBtn.onclick = function () {
    action = '+' 
}
minusBtn.onclick = function () {
    action = '-'
}

function printResult(res) {
    if (res < 0) {
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'green';
    }
    
    resultElement.textContent = res;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);

    // if (actionSymbol == '+') {
    //     return num1 + num2;
    // } else {
    //     return num1 - num2;
    // }

    return actionSymbol == '+' ? num1 + num2 : num1 - num2;
}

submitBtn.onclick = function() {

    const result = computeNumbersWithAction(input1, input2, action);
    printResult(result);

    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value);
    //     printResult(sum);
    // } else {
    //     const sum = Number(input1.value) - Number(input2.value);
    //     printResult(sum);
    // }
    
}