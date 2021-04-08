'use strict'

const argument = '    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis vitae dignissimos     ';
let message;

function foo(argument) {
    if (typeof argument !== 'string') {
        message = alert('Не строка');
    }
    else {
        message = argument.trim().substr(0, 30) + '...';
    }
    return message;
}

foo(argument);

console.log(message);