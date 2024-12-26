const bulmaButton = (text, classesArray) => {
  if (!text) {
    console.error("**bulmaButton** => the parameter text must be non-null.");
    return null;
  }
  if (!classesArray) {
    console.error("**bulmaButton** => the parameter classesArray must be non-null.");
    return null;
  }
  if (typeof classesArray !== 'Array') {
    console.error("**bulmaButton** => the parameter classesArray must be of type Array.");
    return null;
  }
  if (classesArray.length === 0) {
    console.error("**bulmaButton** => the parameter classesArray must have at least one element.");
    return null;
  }
  const btn = document.createElement('button');
  btn.setAttribute('class', 'button')
  classesArray.map(cl => {
    btn.classList.add(`is-${cl}`);
  })
  btn.innerText = text;
  return btn;
}

module.exports = bulmaButton;