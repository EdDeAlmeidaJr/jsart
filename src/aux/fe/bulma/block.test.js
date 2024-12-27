const consoleOutput = require('../../dev/consoleoutput');

const bulmaBlock = require('./block');

if (process.env.__TEST__) {

  (bulmaBlock() === null) ? consoleOutput('log', 'green', 'Ok!') : consoleOutput('error', null, 'Failed...');

}