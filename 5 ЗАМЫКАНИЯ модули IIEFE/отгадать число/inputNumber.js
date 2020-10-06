// 'use strict'

(function () {
  let input;

  window.getUserNumber = function() {
  do {
    input = prompt('введите число');

    if (input === null) {
      return 
    };

    if (!isNumber(input)) {
      alert('ошибка! введите число')
    };

    } while (!isNumber(input)) {
      return parseInt(input)
    };
  }
}) ();