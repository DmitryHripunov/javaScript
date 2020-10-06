'use strict';

// 1) константы с данными (если есть)
const SUCCESS_RESPONSE = 200;
const NO_RSULTS = 0;
const SWAPI = 'https://swapi.dev/api/people/?search=';

// 2) получаем элементы с DOM
const orderedListEl = document.querySelector('.search_result-js');
const searchEl = document.getElementById('search_request');
const searchInputEl = document.getElementById('person_search_input');
const personObj = {
  idName: document.getElementById('name'),
  idHeight: document.getElementById('height'),
  idMass: document.getElementById('mass'),
  idBirth_year: document.getElementById('birth_year'),
  idFilms: document.getElementById('films_count'),
};
const attrObj = { class: 'list-item', };

// 3) функции es6
/**
 * Функция createEl() создает элемент
 * @param {string} tagName - название тега
 * @param {string} content - содержимое тега
 * @param {object} attrObj - аттрибуты тега 
 */
const createEl = (tagName, content, attrObj) => {
  const item = document.createElement(tagName);
  item.textContent = content;

  for (let key in attrObj) {
    item.setAttribute(key, attrObj[key]);
  };
  return item
};

  /**
  * Функция httpRequest() создает запрос fetch()
  * @param {string} url - api сайта
  * @param {string} searchInput - введенные данные в поле поиска
  */
const httpRequest = (url, searchInput) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        alert(
          'Произошла ошибка при получении ответа от сервера:\n\n' +
            response.message
        );
        return
      } else {
        return response.json(); // парсим из JSON-строки в JavaScript-объект
      }
    })

    .then((data) => {
      if (data.count === NO_RSULTS) {
        alert('К сожалению, ничего не найдено по запросу: ' + searchInput);
        return
      }

      const responseArr = data.results;

      responseArr.forEach((result) => { 
        const generateEl = createEl('li', result.name, attrObj);
  
        generateEl.addEventListener('click', () => {
          personObj.idName.textContent = result.name;
          personObj.idHeight.textContent = result.height;
          personObj.idMass.textContent = result.mass;
          personObj.idBirth_year.textContent = result.birth_year;
          personObj.idFilms.textContent = result.films.length;
        });
  
        orderedListEl.append(generateEl);
      });
    });

  // Удаляем последний запрос
  while (orderedListEl.firstChild) {
    orderedListEl.removeChild(orderedListEl.firstChild);
  }
};

/**
 * Функция searhRequest() возвращает результат поиска
  введеных данных
*/
const searhRequest = () => {
  searchEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchInput = searchInputEl.value
    let url = SWAPI + searchInput;

    if (!searchInput.length) {
      alert('Не введены данные поиска');
      return;
    }

    // fetch
    httpRequest(url, searchInput);

    searchEl.reset();
  });
};

searhRequest();



