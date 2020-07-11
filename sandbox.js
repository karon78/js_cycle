"use strict";

/**
 *  Запросить 2 числа и найти все общие делители.
 */

const userNum1 = Math.floor(Number(prompt('Please input number')));
const userNum2 = Math.floor(Number(prompt('Please input number')));
if (isNaN(userNum1) || isNaN(userNum2)) {
    alert('incorrect value')
}
let min;
if (userNum1 < userNum2) {
    min = userNum1;
} else {
    min = userNum2;
}
let resultArr = [];
let i = 1;
while (i < min) {
    if (userNum1 % i === 0 && userNum2 % i === 0) {
        resultArr.push(i);
    }
    i++;
}
alert(resultArr);
