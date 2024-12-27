const consoleOutput = require('../../dev/consoleoutput');
const bulmaTableContainer = require('./tablecontainer');

if (process.env.__TEST__) {

  (bulmaTableContainer() === null) ? consoleOutput('log', 'green', 'Ok!') : consoleOutput('error', null, 'Failed...');

}