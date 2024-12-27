const bulmaButton = (elem, text, classesArray) => {
  if (!elem) {
    elem = 'button';
  }
  const acceptedElems = ['a', 'button', 'input'];
  if (!acceptedElems.includes(elem)) {
    console.error('\x1b[31m**bulmaButton** => the elem parameter must be \'a\', \'button\' or \'input\'.\x1b[37m');
    return null;
  }
  if (!text) {
    console.error("\x1b[31m**bulmaButton** => the parameter \'text\' must be non-null.\x1b[37m");
    return null;
  }
  if (!classesArray) {
    console.error("\x1b[31m**bulmaButton** => the parameter \'classesArray\' must be non-null.\x1b[37m");
    return null;
  }
  if (typeof classesArray !== 'Array') {
    console.error("\x1b[31m**bulmaButton** => the parameter \'classesArray\' must be of type Array.\x1b[37m");
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
