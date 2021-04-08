'use strict'

const money = +prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов?', 'Курсы GLO Academy'),
    amount1 = +prompt('Во сколько это обойдется?', '1600'),
    expenses2 = prompt('Введите обязательную статью расходов?', 'Поесть'),
    amount2 = +prompt('Во сколько это обойдется?', '3000'),
    income = 'фриланс', //Доход из lesson01
    mission = 1200000, //цель
    period = 12,
    accumulatedMonth = getAccumulatedMonth(), // В переменной результат свободных средств в месяц после вычислений
    budgetDay = Math.floor(accumulatedMonth / 30);
    
let getStatusIncome = function() {
    const message = (budgetDay >= 1200) ? 'У вас высокий уровень дохода' :
        (600 <= budgetDay) ? 'У вас средний уровень дохода' :
        (0 < budgetDay) ? 'К сожалению у вас уровень дохода ниже среднего' :
        (budgetDay === 0) ? 'Ваш доход ' + budgetDay + ' рублей в мясяц, вы что-то делаете не так.' :
        'Что-то пошло не так';

    return message;
};

function showTypeOf(data) {
    console.log(typeof(data));
}

// Сумма всех обязательных расходов в месяц
function getExpensesMonth() {
    return amount1 + amount2;
}

// Накопления за месяц - расходы
function getAccumulatedMonth() {
    return money - amount1 - amount2;
}

// За какой период будет достингута цель
function getTargetMonth() {
    return Math.ceil(mission / accumulatedMonth)
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log('getExpensesMonth: ', getExpensesMonth());
console.log('addExpenses.toLowerCase(): ', addExpenses.toLowerCase().split(', '));
console.log('getTargetMonth(): ', getTargetMonth());
console.log('budgetDay: ', budgetDay);
console.log('getStatusIncome(): ', getStatusIncome());