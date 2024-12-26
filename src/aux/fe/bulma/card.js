const bulmaCardContent = require('./cardcontent');
const bulmaCardHeader = require('./cardheader');

const bulmaCard = (title, htmlContent) => {
  if (!htmlContent) {
    console.error('**bulmaCard** => the parameter htmlContent must be non-null.');
    return null;
  }
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  if (title) {
    card.appendChild(bulmaCardHeader(title));
  }
  card.appendChild(bulmaCardContent(htmlContent));
  return card;
}

module.exports = bulmaCard;