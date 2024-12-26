const bulmaLevelItem = require('./levelitem');

const bulmaLevel = (arrayItems) => {
  if (!arrayItems) {
    console.error('**bulmaLevel** => the parameter arrayItems must be non-null.');
    return null;
  }
  if (arrayItems.length === 0) {
    console.error('**bulmaLevel** => the parameter arrayItems must have at least one element.');
    return null;
  }
  const level = document.createElement('nav');
  level.setAttribute('class', 'level');
  arrayItems.map(el => {
    level.appendChild(bulmaLevelItem(el));
  })
  return level;
}

module.exports = bulmaLevel;

