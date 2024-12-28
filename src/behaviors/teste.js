const {
	bulmaHero,
	bulmaLevel
} = require('../aux/fe/bulma/bulma');

const fillablePageAreas = require('../aux/fe/fillablePageAreas');

const Teste = {

	pageAreas: fillablePageAreas(),

	run: function () {
		let f1 = document.createElement()
		const hero = bulmaHero(['medium'], document.createElement('h1'));
		console.log(this.pageAreas);
		this.pageAreas.root.appendChild(hero);
	}

}

Teste.run();

module.exports = Teste;
