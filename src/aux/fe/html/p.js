const paragraph = (classesList, text) => {
  let par = document.createElement('p');
  par.setAttribute('class', 'paragraph');
  classesList.map(cl => par.classList.add(cl));
  par.innerText = text;
  return par;
}