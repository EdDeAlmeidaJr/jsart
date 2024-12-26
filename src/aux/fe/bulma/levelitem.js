const bulmaLevelItem = (htmlContent) => {
  if (!htmlContent) {
    console.error('**bulmaLevelItem** => the parameter htmlContent must be non-null.');
    return null;
  }
  const levelItem = document.createElement('div');
  levelItem.setAttribute('class', 'level-item');
  levelItem.appendChild(htmlContent);
  return levelItem;
}

module.exports = bulmaLevelItem;