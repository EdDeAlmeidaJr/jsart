const bulmaBreadcrumb = (items) => {
  if (!items) {
    console.error('**bulmaBreadcrumb** => the parameter items must be non-null.');
    return null;
  }
  if (typedef(items) !== 'Array') {
    console.error('**bulmaBreadcrumb** => the parameter items must be of type array');
    return null;
  }
  const bc = document.createElement('nav');
  bc.setAttribute('class', 'breadcrumb');
  bc.setAttribute('aria-label', 'breadcrumbs');
  const ul = document.createElement('ul');
  bc.appendChild(ul);
  items.map(it => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.innerText = it;
    li.appendChild(a);
    ul.appendChild(li);
  })
  return bc;
}

module.exports = bulmaBreadcrumb;