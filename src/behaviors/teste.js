const bulma = require('../aux/fe/bulma/bulma');
const fillablePageAreas = require('../aux/fe/fillablePageAreas');

const Teste = {

	pageAreas: fillablePageAreas(),

	run: function () {
		console.log(this.pageAreas);
	}

}

Teste.run();

module.exports = Teste;
