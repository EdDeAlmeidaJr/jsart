const consoleOutput = require('../../dev/consoleoutput');

const bulmaTableContainer = (tbl) => {
  if (!tbl) {
    consoleOutput('error', null, '**bulmaTableContainer** => the \'tbl\' parameter must be non-null.');
    return null;
  }
  const tc = document.createElement('div');
  tc.setAttribute('class', 'table-container');
  tc.appendChild(tbl);
  return tc;
}

module.exports = bulmaTableContainer;