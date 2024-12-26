const bulma = require('../aux/fe/bulma/bulma');
const fillablePageAreas = require('../aux/fe/fillablePageAreas');
const addClassBehavior = require('../aux/fe/addClassBehavior');

const Index = {

  pageAreas: fillablePageAreas(),

  showClickedButton: function (ev) {
    console.log(ev.target.dataset.valor);
  },

  run: function () {
    console.log(this.pageAreas);
    addClassBehavior('clickable', 'click', this.showClickedButton);
  }

}

Index.run();