'use strict';
const randomNumber = getRandomNumber(1, 10); //глобальная переменная случайного числа 

function getRandomNumber(min, max) { //  генерируем случайное число от 1...9
  return parseInt(Math.random() * (max - min) + min);  
};

function isNumber(n) { // проверка на число(булево значение)
  return !isNaN(parseFloat(n) && isFinite(n)); 
};

function getUserNumber() { //проверяет на ввод числа, преобразум в число
  let thisNumber = prompt('введите число'); 

  if (thisNumber === null) { // отмена ввода
    return;
  };

  if (!isNumber(thisNumber)) { // проверка на  число
    alert('ошибка! введите число'); 
    return getUserNumber();        
  };

  if (isNumber(thisNumber)) { // преобразуем в чило
    return parseInt(thisNumber)
  };  
};

function compareNumbers(mathRandomNumber) { // сравниваем числа 
  let userNumber = getUserNumber();           

  while (userNumber === mathRandomNumber) { // цикл условие выхода совпадение 2х чисел
    alert('правильно');
    return;
  };

  if (userNumber > mathRandomNumber) {     
    alert('меньше');                         
    return compareNumbers(mathRandomNumber);
  };

  if (userNumber < mathRandomNumber) {
    alert('больше');
    return compareNumbers(mathRandomNumber);
  };
};

compareNumbers(randomNumber); // вызоваем бота


