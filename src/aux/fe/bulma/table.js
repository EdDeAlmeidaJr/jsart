const bulmaTable = (classesArray, thead, tbody, tfoot) => {
  if (!classesArray) {
    classesArray = [];
  }
  if (typeof (classesArray) !== 'Array') {
    console.error('**bulmaTable** => the parameter \'classesArray\' must be of type Array.');
    return null;
  }
  if (!tbody) {
    console.error('**bulmaTable** => the parameter \'tbody\' must be non-null.');
    return null;
  }
  const tbl = document.createElement('table');
  tbl.setAttribute('class', 'table');
  classesArray.map(cl => tbl.classList.add(`is-${cl}`));
  if (thead) tbl.appendChild(thead);
  tbl.appendChild(tbody);
  if (tfoot) tbl.appendChild(tfoot);
  return tbl;
}

module.exports = bulmaTable;