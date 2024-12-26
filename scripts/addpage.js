const fs = require('fs');

console.log("Performing validations...");

if (!process.argv[2]) {
  console.error('ERROR => addpage.js => You must specify a page name.');
  process.kill(process.pid, 'SIGKILL');
}

if (!process.argv[3]) {
  console.error('ERROR => addpage.js => Is this page open or private?');
  process.kill(process.pid, 'SIGKILL');
}

const validTypes = ['open', 'private'];

if (!validTypes.includes(process.argv[3])) {
  console.error('ERROR => addpage.js => Page type must be open or private.');
  process.kill(process.pid, 'SIGKILL');
}

let wpEntries = JSON.parse(fs.readFileSync('./wpentries.json'));

const currentPages = Object.keys(wpEntries);

if (currentPages.includes(process.argv[2])) {
  console.error('ERROR => addpages.js => A page with this name already exists.');
  process.kill(process.pid, 'SIGKILL');
}

const behaviorFile = `./src/behaviors/${process.argv[2]}.js`;

wpEntries[process.argv[2]] = behaviorFile;

let splitFileName = process.argv[2].split('');
let firstLetter = splitFileName.shift();
firstLetter = firstLetter.toUpperCase();
let capitalizedFileName = firstLetter + splitFileName.join('');

console.log("Rewriting Webpack entries...");

fs.writeFileSync('./wpentries.json', JSON.stringify(wpEntries));

console.log("Writing behaviors\' file...");

fs.writeFileSync(behaviorFile, "const bulma = require(\'../aux/fe/bulma/bulma\');\n");
fs.appendFileSync(behaviorFile, "const fillablePageAreas = require(\'../aux/fe/fillablePageAreas\');\n\n");
fs.appendFileSync(behaviorFile, `const ${capitalizedFileName} = {` + "\n\n");
fs.appendFileSync(behaviorFile, "\t" + `pageAreas: fillablePageAreas(),` + "\n\n");
fs.appendFileSync(behaviorFile, "\t" + 'run: function () {' + "\n");
fs.appendFileSync(behaviorFile, "\t\t" + 'console.log(this.pageAreas);' + "\n");
fs.appendFileSync(behaviorFile, "\t" + '}' + "\n\n");
fs.appendFileSync(behaviorFile, "}\n\n");
fs.appendFileSync(behaviorFile, `${capitalizedFileName}.run();` + "\n\n");
fs.appendFileSync(behaviorFile, `module.exports = ${capitalizedFileName};` + "\n");

const pugFile = `./src/views/${process.argv[2]}.pug`;

console.log("Writing PUG file...");

fs.writeFileSync(pugFile, `extends ${process.argv[3]}` + "\n\n");
fs.appendFileSync(pugFile, "block content\n");
fs.appendFileSync(pugFile, "\t" + `script(defer src=\'\/js\/${process.argv[2]}.js\')`);

console.log("Rewriting routes to add this page...");

const routesFile = `./src/routes/v1/${process.argv[3]}.js`;

const routesContent = fs.readFileSync(routesFile).toString();

let routesArray = routesContent.split("\n");

routesArray.map((ln, ind) => {
  if (ind === 0) {
    fs.writeFileSync(routesFile, ln + "\n");
  } else {
    if (ln !== 'module.exports = router;') {
      fs.appendFileSync(routesFile, ln + "\n");
    }
  }
})

fs.appendFileSync(routesFile, `router.get(\'\/${process.argv[2]}.html\', function(req, res, next) {` + "\n");
fs.appendFileSync(routesFile, "\t" + `res.render(\'${process.argv[2]}\');` + "\n");
fs.appendFileSync(routesFile, "});\n\n");
fs.appendFileSync(routesFile, "module.exports = router;\n");

console.log("Done!");