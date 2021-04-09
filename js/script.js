'use strict'

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function numberRandomFoo() {
    let numberRandomFloat = Math.random() * 100;
    return Math.ceil(numberRandomFloat);
}

function roll() {
    let numberRandom = numberRandomFoo();
    
    function result() {
        let number = prompt('Угадай число от 1 до 100');

        if (number === null) {
            console.log('Игра окончена');
            return;
        }

        if (isNumber(number)) {

            if (number < numberRandom) {
                console.log('Загаданное число больше');
                roll();
            } else if (number > numberRandom) {
                console.log('Загаданное число меньше');
                roll();
            } else if (number == numberRandom) {
                    alert('Поздравляю, Вы угадали!!!');
                    return;
                }
        } else {
            number = prompt('Введите число!')
            roll();
        }
    }   
    result(); 
}

roll();

