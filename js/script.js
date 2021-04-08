'use strict'

let arr = ['23465', '156634', '75923', '4458', '623', '8765', '452877'];


//Часть #1

for (let i = 0; i < arr.length; i++) {
    if (+arr[i][0] === 2 || +arr[i][0] === 4) {
        arr[i]
        console.log('arr[i]: ', arr[i]);
    }
}

//Часть #2

for (let i = 2; i < 100; i++) {
    let k = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            k++;
        }
    }
    if (k <= 2) {
        console.log(i);
    }
}