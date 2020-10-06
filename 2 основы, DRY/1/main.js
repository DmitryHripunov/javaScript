'use strict';

let firstNumber,
    secondNumber;

do {
  firstNumber = parseFloat(prompt('введите первое число:', ''));

  if (isNaN(firstNumber)) {
    alert("вы не ввели число");
  }
} while (isNaN(parseFloat(firstNumber) && isFinite(firstNumber)));

do {
  secondNumber = parseFloat(prompt('введите второе число:', ''));

  if (isNaN(secondNumber)) {
    alert("вы не ввели число");
  }
} while (isNaN(parseFloat(secondNumber) && isFinite(secondNumber)));


if(firstNumber > secondNumber) {
  alert('Первое число больше второго');
}

if(firstNumber < secondNumber) {
  alert('Второе число больше первого');
}

if(firstNumber === secondNumber) {
  alert('Числа равны');
}

