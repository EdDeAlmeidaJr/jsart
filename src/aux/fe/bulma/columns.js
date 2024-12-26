const bulmaColumn = require('./column');

const bulmaColumns = (sizesArray, contentsArray) => {
  if (sizesArray.length !== contentsArray.length) {
    console.error('**bulmaColumns** => parameters sizesArray and contentsArray should have the same length.');
    return null;
  }
  const totalSize = 0;
  sizesArray.map(el => totalSize += el);
  if (totalSize > 12) {
    console.error('**bulmaColumns** => the sum of the sizes in sizesArray parameter should not exceed 12.');
    return null;
  }
  const columns = document.createElement('div');
  columns.setAttribute('class', 'columns');
  sizesArray.map((size, ind) => {
    columns.appendChild(bulmaColumn(size, contentsArray[ind]));
  })
  return columns;
}

module.exports = bulmaColumns; 