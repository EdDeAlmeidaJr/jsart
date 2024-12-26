const path = require('path');
const fs = require('fs');

const loadEntries = () => {
  return JSON.parse(fs.readFileSync('./wpentries.json'));
}

module.exports = {
  entry: loadEntries(),
  output: {
    path: path.join(__dirname, 'public', 'js')
  }
}