const consoleOutput = require('../../dev/consoleoutput');
const bulmaHero = require('./hero');

if (process.env.__TEST__) {

  (bulmaHero(null, null) === null) ? consoleOutput('log', 'green', 'Ok!') : consoleOutput('error', null, 'Failed...');

  (bulmaHero('teste', null) === null) ? consoleOutput('log', 'green', 'Ok!') : consoleOutput('error', null, 'Failed...');

  (bulmaHero([], null) === null) ? consoleOutput('log', 'green', 'Ok!') : consoleOutput('error', null, 'Failed...');
}