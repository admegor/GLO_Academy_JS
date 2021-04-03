let num = 266219;
let arrNum = String(num).split('');
let summ = arrNum[0];

for (let i = 1; i <= arrNum.length - 1; i++) {
    summ *= Number(arrNum[i]);
};

summ = summ ** 3;

let arrSumm = String(summ).split('');

console.log(arrSumm[0] + arrSumm[1]);