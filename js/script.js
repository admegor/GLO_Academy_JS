'use strict'
const money = +prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = +prompt('Во сколько это обойдется?'),
    income = 99000, //Доход из lesson01
    mission = 1200000, //цель
    period = 12,
    budgetMonth = money - amount1 - amount2,
    budgetDay = Math.floor(budgetMonth / 30);
    
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log('addExpenses.length: ', addExpenses.length);
console.log('Период равен ' + period + 'месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');
console.log('addExpenses.toLowerCase(): ', addExpenses.toLowerCase().split(', '));
console.log('budgetDay: ', budgetDay);
console.log('budgetMonth: ', budgetMonth);
console.log('budgetDay: ', budgetDay);
console.log('Math.ceil(mission/budgetMonth): ', Math.ceil(mission/budgetMonth));

let message = (budgetDay >= 1200) ? 'У вас высокий уровень дохода' : 
(600 <= budgetDay) ? 'У вас средний уровень дохода' :
(0 <= budgetDay) ? 'К сожалению у вас уровень дохода ниже среднего' :
'Что-то пошло не так';

console.log(message);
