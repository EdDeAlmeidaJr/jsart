const fillArea = (id, fn) => {
  let contentArea = fn();
  this.pageAreas[id].innerHTML = contentArea;
}

module.exports = fillArea;