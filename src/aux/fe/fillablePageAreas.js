const fillablePageAreas = () => {
  const areas = document.getElementsByClassName('fillable');
  let fillableAreas = {};
  Array.from(areas).map(area => {
    if (area.hasAttribute('id')) {
      fillableAreas[area.getAttribute('id')] = area;
    } else {
      console.error('Area ', area, ' is marked fillable but has no ID attribute.');
    }
  })
  return fillableAreas;
}

module.exports = fillablePageAreas;