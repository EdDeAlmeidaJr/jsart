const bulmaCardHeader = (title) => {
  if (!title) {
    console.error('**bulmaCardHeader** => the parameter title must be non-null.');
    return null;
  }
  const cardHeader = document.createElement('div');
  cardHeader.setAttribute('class', 'card-header');
  const cardHeaderTitle = document.createElement('p');
  cardHeaderTitle.setAttribute('class', 'card-header-title');
  cardHeaderTitle.innerText = title;
  cardHeader.appendChild(cardHeaderTitle);
  return cardHeader;
}

module.exports = bulmaCardHeader;