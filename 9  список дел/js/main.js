'use strict';

const emptyListElem = document.querySelector('.list-empty-js'),
      textElem = document.querySelector('.case-js'),
      orderedListElem = document.querySelector('.ordered-list-js'),
      submitElem = document.querySelector('.filling-in-date-js'),
      attrObj = {class: 'list-item list-item-js',};

submitElem.addEventListener('submit', function (e) {
  e.preventDefault();
  emptyListElem.classList.add('hidden-text');
  orderedListElem.appendChild(createNodeEl('li', textElem, attrObj));
  this.reset();
});

orderedListElem.addEventListener('click', function (e) {
  // if(e.target.closest('.remove-case-js')) {
  // 	e.target.closest.remove();
  // 	if(!orderedListElem.children.length) {
  // 		emptyListElem.classList.remove();
  // 	}
  // }

  if (e.target.classList.contains('list-item-js')) {
    e.target.classList.toggle('text-decoration');
  }
});

function createNodeEl(tagName, content, obj) {
  const item = document.createElement(tagName);
  const inputValue = content.value;

  item.textContent = inputValue;

  for (let key in obj) {
    item.setAttribute(key, obj[key]);
  }

  return item;
}
