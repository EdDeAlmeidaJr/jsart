const bulmaHero = (classesList, htmlContent) => {
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