const bulmaColumn = (size, htmlContent) => {
  if (!htmlContent) {
    console.error('**bulmaColumn => the prameter htmlContent must be non-null');
    return null;
  }
  if (size === 0) {
    console.error('**bulmaColumn => the parameter size must be greater than zero.');
    return null;
  }
  if (size > 12) {
    console.error('**bulmaColumn => the parameter size must be smaller or equal to 12.');
    return null;
  }
  const column = document.createElement('div');
  column.setAttribute('class', `column is-${size}`);
  column.appendChild(htmlContent);
  return column;
}

module.exports = bulmaColumn;