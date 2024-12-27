const consoleOutput = require('../../dev/consoleoutput');

const bulmaBreadcrumb = require('./breadcrumb');

if (process.env.__TEST__) {

  (bulmaBreadcrumb() === null) ? consoleOutput('log', 'green', 'Ok!') : consoleOutput('error', null, 'Failed...');

  (bulmaBreadcrumb("alfa") === null) ? consoleOutput('log', 'green', 'Ok!') : consoleOutput('error', null, 'Failed...');

}
