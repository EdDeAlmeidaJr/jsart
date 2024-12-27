const bulmaTbody = (tableData) => {
  if (!tableData) {
    console.error('**bulmaTbody** => the parameter \'tableData\' must be non-null.');
    return null;
  }
  if (typeof (tableData) !== 'Array') {
    console.error('**bulmaTbody** => the parameter \'tableData\' must be of type Array.');
    return null;
  }
  const tbody = document.createElement('tbody');
  tableData.map(rc => {
    const tr = document.createElement('tr');
    rc.map(fld => {
      const td = document.createElement('td');
      td.innerText = fld;
      tr.appendChild(td);
    })
    tbody.appendChild(tr);
  });
  return tbody
}

module.exports = bulmaTbody;