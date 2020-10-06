'use strict';

let leapYearCount = 0;
let firstYear;
let secondYear;

function isLeapYear(year) {
  return new Date(year, 1, 29).getMonth() == 1;
}

do {
  firstYear = parseFloat(prompt('введите первый год', ''));
  
  if (isNaN(firstYear)) {
    alert('год указан не правильно, введите первый год еще раз')
  }
} while (isNaN(parseFloat(firstYear) && isFinite(firstYear)))

do {
  secondYear = parseFloat(prompt('введите второй год', ''));

  if (isNaN(secondYear)) {
    alert('год указан не правильно')
  }
} while (isNaN(parseFloat(secondYear) && isFinite(secondYear)));

if (firstYear > secondYear) {
  secondYear = [firstYear, firstYear = secondYear][0];
}

for (let i = firstYear; i <= secondYear; i++) {
  if (isLeapYear(i)) {
    console.log(i);
    leapYearCount++;
  }
}

alert( 'В заданном диапазоне найдено ' + leapYearCount + ' високосных лет, они записаны в консоли.' );