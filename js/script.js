'use strict'

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let money;

const start = function() {
    do {
        money = prompt('Ваш месячный доход?(Укажите число)')
    }
    while (!isNumber(money))
}

start();

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    income = 'фриланс',
    mission = 1200000, //цель
    period = 12;

function showTypeOf(data) {
    console.log(typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let expenses = [];

// Сумма всех обязательных расходов в месяц
let getExpensesMonth = function() {
    let sum = 0;
    let question;
    
    for (let i = 0; i < 2; i++) {
        
        expenses[i] = prompt('Введите обязательную статью расходов?', 'Курсы GLO Academy')
        
        do {
            question = prompt('Во сколько это обойдется?');
            if (typeof question === 'number') {
                sum += question;
            }
        }
        while (!isNumber(question))
    }
    
    console.log('Статья расхода: ', expenses);
    return sum;
}

let expensesAmount = getExpensesMonth();


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

let getStatusIncome = function() {
    const message = (budgetDay >= 1200) ? 'У вас высокий уровень дохода' :
    (600 <= budgetDay) ? 'У вас средний уровень дохода' :
    (0 < budgetDay) ? 'К сожалению у вас уровень дохода ниже среднего' :
    (budgetDay === 0) ? 'Ваш доход ' + budgetDay + ' рублей в мясяц, вы что-то делаете не так.' :
    'Что-то пошло не так';
    
    return message;
};

console.log(addExpenses.toLowerCase().split(','));
console.log('Расходы в месяц: ', expensesAmount);
console.log('Дневной бюджет: ', budgetDay);
console.log('Ваш статус: ', getStatusIncome());