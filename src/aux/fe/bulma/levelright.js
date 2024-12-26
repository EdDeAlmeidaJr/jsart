const bulmaLevelItem = require('./levelitem');

const bulmaLevelRight = (arrayItems) => {
  if (!arrayItems) {
    console.error('**bulmaLevelRight** => the parameter arrayItems must be non-null.');
    return null;
  }
  if (arrayItems.length === 0) {
    console.error('**bulmaLevelRight** => the parameter arrayItems must have at least one element.');
    return null;
  }
  const levelRight = document.createElement('div');
  levelRight.setAttribute('class', 'level-right');
  arrayItems.map(el => {
    levelRight.appendChild(bulmaLevelItem(el));
  })
  return levelRight;
}

module.exports = bulmaLevelRight;

