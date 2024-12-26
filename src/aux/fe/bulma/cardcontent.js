const bulmaCardContent = (htmlContent) => {
  if (!htmlContent) {
    console.error('**bulmaCardHeader** => the parameter htmlContent must be non-null.');
    return null;
  }
  const cardContent = document.createElement('div');
  cardContent.setAttribute('class', 'card-content');
  const content = document.createElement('div');
  content.setAttribute('class', 'content');
  content.appendChild(htmlContent);
  cardContent.appendChild(content);
  return cardContent;
}

module.exports = bulmaCardContent;