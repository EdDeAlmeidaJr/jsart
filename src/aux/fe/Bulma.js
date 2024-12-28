const HTML = require('./HTML');


const Bulma = {

  semanticCategories: () => ['primary', 'link', 'info', 'success', 'warning', 'danger'],

  colorCategories: () => ['white', 'light', 'dark', 'black', 'text', 'ghost'],

  sizeCaetgories: () => ['samll', 'normal', 'medium', 'large'],

  block: (domContent) => {
    const blk = HTML.div(['block']);
    blk.appendChild(domContent);
    return blk;
  },

  box: (element, domContent) => {
    const bx = HTML.createElement(element, ['box']);
    bx.appendChild(domContent);
    return bx;
  },

  breadcrumb: (pathsArray) => {
    const brdcrmb = HTML.createElement('nav', ['breadcrumb']);
    const ul = HTML.ul([]);
    brdcrmb.appendChild(ul);
    pathsArray.map(item => {
      let li = HTML.li([]);
      let a = HTML.a([], '#', item);
      li.appendChild(a);
      ul.appendChild(li);
    });
    return brdcrmb;
  },

  button: (classesArray, text) => {
    return HTML.createElement('button', classesArray, text);
  }

}