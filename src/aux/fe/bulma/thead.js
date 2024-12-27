const bulmaThead = (htmlContentArray) => {
  if (!htmlContentArray) {
    console.error('\x1b[31m**bulmaThead** => the parameter \'htmlContentArray\' must be non-null.');
    return null;
  }
  if (typeof (htmlContentArray) !== 'Array') {
    console.error('\x1b[31m**bulmaThead** => the parameter \'htmlContentArray\' must be of type Array.');
    return null;
  }
  const thead = document.createElement('thead');
  htmlContentArray.map(el => thead.appendChild(el));
  return thead
}

module.exports = bulmaThead;