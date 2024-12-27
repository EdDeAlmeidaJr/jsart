const consoleOutput = require('../../dev/consoleoutput');

const bulmaButton = (elem, text, classesArray) => {
  if (!elem) {
    elem = 'button';
  }
  const acceptedElems = ['a', 'button', 'input'];
  if (!acceptedElems.includes(elem)) {
    consoleOutput('error', null, '**bulmaButton** => the elem parameter must be \'a\', \'button\' or \'input\'.');
    return null;
  }
  if (!text) {
    consoleOutput('error', null, '**bulmaButton** => the parameter \'text\' must be non-null.');
    return null;
  }
  if (!classesArray) {
    consoleOutput('error', null, '**bulmaButton** => the parameter \'classesArray\' must be non-null.');
    return null;
  }
  if (typeof classesArray !== 'Array') {
    consoleOutput('error',null,'**bulmaButton** => the parameter \'classesArray\' must be of type Array.');
    return null;
  }
  const btn = document.createElement(elem);
  btn.setAttribute('class', 'button')
  classesArray.map(cl => {
    btn.classList.add(`is-${cl}`);
  })
  btn.innerText = text;
  return btn;
}

module.exports = bulmaButton;
