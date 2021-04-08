'use strict'

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let money,
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    income = 'фриланс',
    mission = 1200000, //цель
    period = 12;

const start = function() {
    money = prompt('Ваш месячный доход?');

    while (!isNumber(money)) {
        money = prompt('Ваш месячный доход?(Укажите число)');
    }
}

start();

function showTypeOf(data) {
    console.log(typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(','));

let expenses = [];

// Сумма всех обязательных расходов в месяц
let sum = 0;
let getExpensesMonth = function() {

    for (let i = 0; i < 2; i++) {

        expenses[i] = prompt('Введите обязательную статью расходов?', 'Курсы GLO Academy')

        sum += +prompt('Во сколько это обойдется?');

        while (!isNumber(sum)) {
            sum += prompt('Во сколько это обойдется?(Укажите число)');
        }
    }

    console.log('Статья расхода: ', expenses);
    return sum;
}

let expensesAmount = getExpensesMonth();

console.log('Расходы в месяц: ', expensesAmount);

// Накопления за месяц - расходы
function getAccumulatedMonth() {
    return money - expensesAmount;
}

const accumulatedMonth = getAccumulatedMonth();

// За какой период будет достингута цель
function getTargetMonth() {
    return Math.ceil(mission / accumulatedMonth)
}


const budgetDay = Math.floor(accumulatedMonth / 30);


if (getTargetMonth() < 0) {
    console.log('Цель не будет достигнута');
} else {
    console.log('Цель будет достигнута: ', getTargetMonth());
}

console.log('Дневной бюджет: ', budgetDay);

let getStatusIncome = function() {
    const message = (budgetDay >= 1200) ? 'У вас высокий уровень дохода' :
        (600 <= budgetDay) ? 'У вас средний уровень дохода' :
        (0 < budgetDay) ? 'К сожалению у вас уровень дохода ниже среднего' :
        (budgetDay === 0) ? 'Ваш доход ' + budgetDay + ' рублей в мясяц, вы что-то делаете не так.' :
        'Что-то пошло не так';

    return message;
};

console.log('Ваш статус: ', getStatusIncome());