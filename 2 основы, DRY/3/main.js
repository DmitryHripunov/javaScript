'use strict';

let sum = 0;
let value;

do {
  value = prompt('Введите число', '');

  if (!isNaN(parseFloat(value) && isFinite(value))) {
    sum += +value;
  }
} while (value !== null)

alert('Сумма: ' + sum);
