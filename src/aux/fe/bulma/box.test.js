const consoleOutput = require('../../dev/consoleoutput');

const bulmaBox = require('./box');

if (process.env.__TEST__) {

  (bulmaBox(null, null) === null) ? consoleOutput('log', 'green', 'Ok!') : consoleOutput('error', null, 'Failed...');

}