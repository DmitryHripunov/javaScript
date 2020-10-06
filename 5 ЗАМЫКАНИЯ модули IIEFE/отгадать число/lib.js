// 'use strict'

(function() {
  const MAX_NUMBER = 1000;
  const DECL_ATTEMPT = ['попытка', 'попытки', 'попыток'];
  let randomNumber = getRandomNumber(MAX_NUMBER);
  let attempt = 10;

  function declOfNum(number, titles) {
    const cases = [0, 1, 1, 1, 2,];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  };

  function restart() {
    if (confirm('начать сначала?')) {
      attempt = 10;
      randomNumber = getRandomNumber(MAX_NUMBER);
      start();
    };
  };

  window.start = function() {
    const userNumber = getUserNumber();
    
    if (!userNumber && userNumber != 0)  {
      return
    };

    if (randomNumber === userNumber) {
      alert('правильно!')
      restart();
    };

    if (userNumber > randomNumber) {
      alert('меньше')
    } else {
      alert('больше')
    };

    for (let i = attempt; i > 0; i++) {
     alert('Осталось' + ' ' + (attempt--) +
        ' ' + declOfNum(attempt, DECL_ATTEMPT));
      return start()
    };
    
    alert('вы проиграли, было загаданно число' + 
          ' ' + randomNumber);
    restart();
  };
})();
