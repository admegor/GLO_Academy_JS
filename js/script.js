'use strict'

// Часть #1

let lang = prompt('Если вы прочитали эту надпись и поняли ее, введите ваш язык: ru \nIf you read this inscription and understood it, enter the language: en');

const weekRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
weekEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if ( lang !== 'ru' && lang !== 'en') {
    alert('Ошибка в программе: неверые данные.\nError: invalid data.');
}

if (lang === 'ru') console.log(weekRu);
    else if (lang === 'en') console.log(weekEn);

switch (lang) {
    case 'ru':
        console.log(weekRu);
        break;
    case 'en': 
        console.log(weekEn);
        break;
}

const langArr = {
    'ru': weekRu,
    'en': weekEn
};

console.log(langArr[lang]);

// Часть #2

let namePerson = prompt('Введите имя:');

const message = (namePerson ==='Артем') ? 'директор' : 
    (namePerson ==='Максим') ? 'преподаватель' : 
     'студент';

console.log(message);