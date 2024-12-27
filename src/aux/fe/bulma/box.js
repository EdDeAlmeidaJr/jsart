const bulmaBox = (elem, htmlContent) => {
  if (!elem) {
    elem = "div"
  }
  if (!htmlContent) {
    console.error('**bulmaBox** => the \'htmlContent\' parameter must be non-null.');
    return null;
  }
  let bx = document.createElement(elem);
  bx.setAttribute('class','box');
  bx.appendChild(htmlContent);
  return bx;
}

module.exports = bulmaBox;