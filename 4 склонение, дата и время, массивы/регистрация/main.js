'use strict';
const users = [
  {
    name: 'Дмитрий',
    login: 'dmitr',
    password: 1,
  },
  {
    name: 'Сергей',
    login: 'серж',
    password: 11,
  },
  {
    name: 'Владимир',
    login: 'vdm',
    password: 111,
  },
  {
    name: 'Антон',
    login: 'onin',
    password: 1111,
  },
  {
    name: 'Мария',
    login: 'маша',
    password: 1111,
  },
  {
    name: 'Иван',
    login: 'Ивan',
    password: 111,
  },
  {
    name: 'Катерина',
    login: 'Katya',
    password: 11,
  },
  {
    name: 'Ольга',
    login: 'ol',
    password: 1,
  },
];

function getUserCheck(arrNames) {
  const enterLogin = prompt('введте логин');
  const enterPassword = prompt('введите пароль');

  for (let i = 0; i < arrNames.length; i++) {
    if (arrNames[i].login == enterLogin && arrNames[i].password == enterPassword) {
      return alert('Здравствуй,' + ' ' + arrNames[i].name + '!')    
    };
  };
  return alert('ошибка!')
};

getUserCheck(users);


























  // *****************************************************
// const dmitry = { name: 'Дмитрий', login: 'dmitr', password: 1 };  // каждый элемент – это объект типа  
// const sergey = { name: 'Сергей', login: 'серж', password: 1 };    // “пользователь” со свойствами
// const vladimir = { name: 'Владимир', login: 'vdm', password: 1 }; // “имя”, “логин” и “пароль
// const anton = { name: 'Антон', login: 'onin', password: 1 };
// const masha = { name: 'Мария', login: 'маша', password: 1 };
// const ivan = { name: 'Иван', login: 'Ивan', password: 1 };
// const katya = { name: 'Катерина', login: 'Katya', password: 1 };
// const olga = { name: 'Ольга', login: 'ol', password: 1 };

// const users = [sergey, dmitry, vladimir, anton, masha, ivan, katya, olga];  // Создать массив users