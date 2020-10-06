'use strict';
let userNum;

let randomNum = parseInt(Math.random().toFixed(2) * 10); 
 alert('игра угадай число, от 0 до 10');

function numbersGame(userNum) {

  userNum = prompt('введи вариант отгадки', '');
 
  if (userNum === null) {
    return;
  }

  if (isNaN(parseFloat(userNum) && isFinite(userNum))) {
    alert('введи число');
    return numbersGame(userNum); 
  }

  if (userNum > randomNum) {
    alert('меньше');
    return numbersGame(userNum);
  }

  if (userNum < randomNum) {
    alert('больше');
    return numbersGame(userNum);
  }

  if (userNum == randomNum) {
    alert('Правильно!');
  }
}

numbersGame(userNum);
