let num = 266219;
let arrNum = String(num).split('');
let summ = arrNum[0];

for (let i = 1; i < arrNum.length; i++) {
    summ *= Number(arrNum[i]);
}

summ = summ ** 3;

console.log('summ: ', summ);

console.log(String(summ).substr(0, 2));