const HTML = {

  createElement: (element, classesArray) => {
    const elem = document.createElement(element);
    elem.setAttribute('class', element);
    classesArray.map(cl => elem.classList.add(cl));
    return elem;
  },

  a: (classesArray, href, text, wnd = '_self') => {
    const lnk = this.createElement('a', classesArray);
    lnk.setAttribute('href', href);
    lnk.setAttribute('target', wnd);
    lnk.innerText = text;
    return lnk;
  },

  button: (classesArray, text) => {
    const bttn = this.createElement('button', classesArray);
    bttn.innerText = text;
    return bttn;
  },

  div: (classesArray) => this.createElement('div', classesArray),

  li: (classesArray) => this.createElement('li', classesArray),

  nav: (classesArray) => this.createElement('nav', classesArray),

  p: (classesArray) => this.createElement('p', classesArray),

  ul: (classesArray) => this.createElement('ul', classesArray)

}

module.exports = HTML;