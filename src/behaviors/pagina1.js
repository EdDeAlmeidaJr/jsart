const bulma = require('../aux/fe/bulma/bulma');
const fillablePageAreas = require('../aux/fe/fillablePageAreas');

const Pagina1 = {

	pageAreas: fillablePageAreas(),

	run: function () {
		console.log(this.pageAreas);
	}

}

Pagina1.run();

module.exports = Pagina1;
