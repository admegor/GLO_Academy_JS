'use strict'

const money = +prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),

    income = 'фриланс', //Доход из lesson01
    mission = 1200000, //цель
    period = 12;



function showTypeOf(data) {
    console.log(typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// let expenses1 = prompt('Введите обязательную статью расходов?', 'Курсы GLO Academy'),
//     amount1 = +prompt('Во сколько это обойдется?', '1600'),
//     expenses2 = prompt('Введите обязательную статью расходов?', 'Поесть'),
//     amount2 = +prompt('Во сколько это обойдется?', '3000');

console.log(addExpenses.toLowerCase().split(','));

// Сумма всех обязательных расходов в месяц
function getExpensesMonth() {
    sum = 0;

    for (let i = 0; i < 2; i++) {
        sum += +prompt('Во сколько это обойдется?', '1600');
    }

    return sum;
}
console.log('Расходы в месяц: ', getExpensesMonth());

// Накопления за месяц - расходы
function getAccumulatedMonth() {
    return money - getExpensesMonth();
}

const accumulatedMonth = getAccumulatedMonth();

// За какой период будет достингута цель
function getTargetMonth() {
    return Math.ceil(mission / accumulatedMonth)
}

const budgetDay = Math.floor(accumulatedMonth / 30);


console.log('Цель будет достигнута: ', getTargetMonth());
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