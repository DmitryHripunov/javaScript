'use strict';

const editElem = document.querySelector('.editBtn-js');
const saveElem = document.querySelector('.saveBtn-js');
const resetElem = document.querySelector('.resetBtn-js');
const contentElem = document.querySelector('.content-js');

// при нажатии на кнопку «Редактировать» блок с текстом становится редактируемым(contenteditable = true),
//  кнопки «Сохранить» и «Отмена» становятся активными, а сама кнопка «Редактировать» — неактивной;
editElem.addEventListener('click', function() {
  switchingDisableAttr(editElem, saveElem, resetElem);
  contentElem.toggleAttribute('contenteditable');
  populateStorage() 
});

// при нажатии на кнопку «Сохранить» содержимое блока с текстом сохраняется в LocalStorage, а режим 
//редактирования  отключается(кнопки возвращаются в исходное состояние);
saveElem.addEventListener('click', function () {
  switchingDisableAttr(editElem, saveElem, resetElem);
  contentElem.toggleAttribute('contenteditable');
  populateStorage()
});

// при нажатии на кнопку «Отмена» содержимое блока с текстом заменяется на последний сохраненный вариант
//  из LocalStorage, режим редактирования отключается;
resetElem.addEventListener('click', function() {
  switchingDisableAttr(editElem, saveElem, resetElem);
  contentElem.toggleAttribute('contenteditable');
  return setText()
});

// При следующих перезагрузках страницы содержимое блока с текстом автоматически подтягивается из
//  LocalStorage(последний сохраненный вариант).
document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('text') && !localStorage.length) {
    contentElem.textContent;
  } else {
    setText()
  }
});

function populateStorage() {
  localStorage.setItem('text', contentElem.textContent);
  setText();
}

function setText() {
  const currentText = localStorage.getItem('text');
  contentElem.textContent = currentText;
};

function switchingDisableAttr() {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].toggleAttribute('disabled');
  }
};
