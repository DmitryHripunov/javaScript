'use strict'
const timeElem = document.querySelector('.title_time-js');
const FORM_DATE = {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
};
const DECL_YEAR = ['годов', 'года', 'год'];
const DECL_HOUR = ['час', 'часа', 'часов'];
const DECL_MINUTE = ['минута', 'минуты', 'минут'];
const DECL_SECOND = ['секунда', 'секунды', 'секунд'];
const INTERVAL = 1000;

setInterval(() => {
  console.log(printDate());

  timeElem.innerHTML = printDate();
}, INTERVAL);

function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};  

function printDate() {
  const date = new Date();
  const hours = date.getHours();
  const year = date.getFullYear();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const stringYear = declOfNum(year, DECL_YEAR);
  const stringHours = declOfNum(hours, DECL_HOUR);
  const stringMinutes = declOfNum(minutes, DECL_MINUTE);
  const stringSeconds = declOfNum(seconds, DECL_SECOND);
  
  return 'Сегодня' + 
    ' ' + date.toLocaleString('ru-RU', FORM_DATE) +
    ' ' + year +
    ' ' + stringYear +
    ' ' + hours + 
    ' ' + stringHours + 
    ' ' + minutes +
    ' ' + stringMinutes +
    ' ' + seconds +
    ' ' + stringSeconds;
  };




 


























//  ****************************************************************
// const STRING_MONTH = [
//   'января',
//   'февраля',
//   'марта',
//   'апреля',
//   'мая',
//   'июня',
//   'июля',
//   'августа',
//   'сентября',
//   'октября',
//   'ноября',
//   'декабря'
// ];

// const DAY_OF_WEEK = [
//   'воскресенье',
//   'понедельник',
//   'вторник',
//   'среда',
//   'четверг',
//   'пятница',
//   'суббота'
// ];

// function getDeclineStr(number, titles) { // склонение слов
//   const cases = [2, 0, 1, 1, 1, 2];
//   return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
// };

// function getDate(arryDay, arryMonth) {  // возвращаем  год, месяц, день, час, минуту, секунду 
//   const currentDate = new Date();

//   const date = currentDate.getDate();
//   const month = arryMonth[currentDate.getMonth()];
//   const year = currentDate.getFullYear();
//   const day = arryDay[currentDate.getDay()];
//   const hours = currentDate.getHours();
//   const minutes = currentDate.getMinutes();
//   const seconds = currentDate.getSeconds();
//   const stringYear = getDeclineStr(year, ['годов', 'года', 'год']);
//   const stringHours = getDeclineStr(hours, ['час', 'часа', 'часов']);
//   const stringMinutes = getDeclineStr(minutes, ['минута', 'минуты', 'минут']);
//   const stringSeconds = getDeclineStr(seconds, ['секунда', 'секунды', 'секунд']);

//   return 'Сегодня' + ' ' 
//           + date + ' ' 
//           + month + ' ' 
//           + year + ' ' 
//           + stringYear + ', ' 
//           + day + ',' 
//           + ' ' + hours + ' ' 
//           + stringHours + ' ' 
//           + minutes + ' ' 
//           + stringMinutes + ' ' 
//           + seconds + ' ' 
//           + stringSeconds;
// };

// setInterval(() => {
//   console.log(getDate(DAY_OF_WEEK, STRING_MONTH));
// }, 1000);