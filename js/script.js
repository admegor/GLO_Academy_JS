'use strict'

const argument = prompt('Введите данные', '     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis vitae    ');
let message;

function foo(argument) {
    if (typeof argument !== 'string') {
        message = alert('Не строка');
    }
    else if (argument.trim().length > 30) {
        message = argument.trim().substr(0, 30) + '...';
    } else {
        message = argument;
    }
    return message;
}

foo(argument);

console.log(message);