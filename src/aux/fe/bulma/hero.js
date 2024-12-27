const consoleOutput = require('../../dev/consoleoutput');

const bulmaHero = (classesList, htmlContent) => {
  if (!classesList) {
    consoleOutput('error', null, '**bulmaHero** => the parameter \'classesList\' nust be non-null;');
    return null;
  }
  if (typeof classesList !== 'Array') {
    consoleOutput('error', null, '**bulmaHero** => the parameter \'classesList\' must be of type array.');
    return null;
  }
  if (!htmlContent) {
    consoleOutput('error', null, '**bulmaHero** => the parameter \'htmlContent\' nust be non-null;');
    return null;
  }
  const hero = document.createElement('section');
  hero.setAttribute('class', 'hero');
  classesList.map(cl => {
    hero.classList.add(`is-${cl}`);
  })
  const heroBody = document.createElement('div');
  heroBody.setAttribute('class', 'hero-body');
  heroBody.appendChild(htmlContent);
  hero.appendChild(heroBody);
  return hero;
}

module.exports = bulmaHero;