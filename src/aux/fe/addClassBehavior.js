const addClassBehavior = (cl, tp, fn) => {
  const classElements = document.getElementsByClassName(cl);
  Array.from(classElements).map(el => {
    el.addEventListener(tp, (ev) => fn(ev))
  })
}

module.exports = addClassBehavior;