const consoleOutput = (tp, cl, msg) => {
  const colors = {
    'red': '\x1b[31m',
    'green': '\x1b[32m',
    'yellow': '\x1b[33m',
    'blue': '\x1b[34m',
    'magenta': '\x1b[35m',
    'cyan': '\x1b[36m',
    'white': '\x1b[37m',
    'reset': '\x1b[0m'
  }
  switch (tp) {
    case 'error': console.error(colors.red + msg + colors.reset);
            break;
    case 'log': console.log(colors[cl] + msg + colors.reset);
            break;
  }
}

module.exports = consoleOutput;