const bulmaLevelItem = require('./levelitem');

const bulmaLevelLeft = (arrayItems) => {
  if (!arrayItems) {
    console.error('**bulmaLevelLeft** => the parameter arrayItems must be non-null.');
    return null;
  }
  if (arrayItems.length === 0) {
    console.error('**bulmaLevelLeft** => the parameter arrayItems must have at least one element.');
    return null;
  }
  const levelLeft = document.createElement('div');
  levelLeft.setAttribute('class','level-left');
  arrayItems.map(el => {
    levelLeft.appendChild(bulmaLevelItem(el));
  })
  return levelLeft;
}

module.exports = bulmaLevelLeft;

