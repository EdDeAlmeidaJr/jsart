const consoleOutput = require('../../dev/consoleoutput');

const bulmaBlock = (htmlContent) => {
  if (!htmlContent) {
    consoleOutput('error', null, '**bulmaBlock** => the \'htmlContent\' parameter must be non-null.');
    return null;
  }
  let bl = document.createElement('div');
  bl.setAttribute('class', 'block');
  bl.appendChild(htmlContent);
  return bl;
}

module.exports = bulmaBlock;