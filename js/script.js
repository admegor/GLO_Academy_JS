let num = 266219;
let arrNum = String(num).split('');
let summ = arrNum[0];

for (let i = 1; i <= arrNum.length - 1; i++) {
    summ *= Number(arrNum[i]);
}

summ = summ ** 3;

console.log('summ: ', summ);

let arrSumm = String(summ).split('');

console.log(String(summ).substr(0, 2));