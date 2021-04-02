let money = 100000,
    income = 99000,
    addExpenses = 'Проезд, Обед, Подписка, Обучение',
    deposit = false,
    mission = 15000000,
    period = 12,
    budgetDay = 4000;
    
console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log('addExpenses.length: ', addExpenses.length);
console.log('Период равен ' + period + 'месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

addExpenses = addExpenses.toLowerCase().split(', ');

console.log('addExpenses.toLowerCase(): ', addExpenses);
console.log('budgetDay: ', budgetDay);
