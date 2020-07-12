"use strict";

/**
 * Вывести # столько раз, сколько указал пользователь.
 */

const userNumber = Number(prompt('Please input number'));
let i = 0;
while (i < userNumber) {
    alert('#');
    i++;
}

/**
 * Пользователь ввел число, а на экран вывелись все числа
 * от введенного до 0.
 */

const userNumber1 = Number(prompt('Please input number'));
i = userNumber1;
while (i >= 0) {
    alert(i);
    i--;
}

/**
 *  Запросить число и степень. Возвести число в указанную
 *  степень и вывести результат.
 */

const userBase = Number(prompt('Please input number'));
const userPower = Math.floor(Number(prompt('Please input number')));
if (isNaN(userBase) || isNaN(userPower)) {
    alert('incorrect value')
}
i = 0;
let result = 1;
if (userPower === 0) {
    alert(result);
} else if (userPower > 0) {

    while (i < userPower) {
        result *= userBase;
        i++;
    }
    alert(result);
} else if (userPower < 0) {

    while (i < Math.abs(userPower)) {
        result *= (1 / userBase);
        i++;
    }
    alert(result);
}

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
i = 1;
while (i < min) {
    if (userNum1 % i === 0 && userNum2 % i === 0) {
        resultArr.push(i);
    }
    i++;
}
alert(resultArr);

/**
 *Посчитать факториал введенного пользователем числа.
 */

const userFactor = Number(prompt('Please input number'))
i = userFactor;
let factorial = 1;
while (i > 0) {
    factorial *= i;
    i--;
}
alert(factorial);

/**
 *  Предлагать пользователю решить пример 2 + 2 * 2 до тех
 *  пор, пока он не решит его правильно.
 */
let res;
do {
    res = Number(prompt('2 + 2 * 2 = '))
    if (isNaN(res)) {
        alert('incorrect value')
    }
} while (res !== 6)

/**
 * Делить число 1000 на 2 до тех пор, пока не получится число
 * меньше 50. Вывести это число и сколько делений произвели.
 */
res = 1000;
i = 0;
do {
    res /= 2;
    i++

} while (res > 50);
alert(`${res}, ${ i}`);


