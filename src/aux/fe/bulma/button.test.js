const consoleOutput = require('../../dev/consoleoutput');
const bulmaButton = require('./button');

if (process.env.__TEST__) {

  (bulmaButton('div', 'Any etxt', ['dark', 'rounded']) === null) ? consoleOutput('log', 'green', 'Ok!') : consoleOutput('error', null, 'Failed...');

  (bulmaButton('a', null, ['dark', 'rounded']) === null) ? consoleOutput('log', 'green', 'Ok!') : consoleOutput('error', null, 'Failed...');

  (bulmaButton('button', 'Any text', null) === null) ? consoleOutput('log', 'green', 'Ok!') : consoleOutput('error', null, 'Failed...');

  (bulmaButton('button', 'Any test', 'rounded') === null) ? consoleOutput('log', 'green', 'Ok!') : consoleOutput('error', null, 'Failed...');

}