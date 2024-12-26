const bulmaContainer = (htmlcontent) => {
  const cont = document.createElement('div');
  cont.setAttribute('class', 'container');

  return cont;
}

module.exports = bulmaContainer;