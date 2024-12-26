const bulmaNotification = (text, tp) => {
  if (!text) {
    console.error('**bulmaNotification** => the parameter text must be non-null.');
    return null;
  }
  if (!tp) {
    console.error('**bulmaNotification** => the parameter tp must be non-null.');
    return null;
  }
  const validTypes = ['danger', 'info', 'warning'];
  if (!validTypes.includes(tp)) {
    console.error('**bulmaNotification** => unknown type in paramter tp.');
    return null;
  }
  const notification = document.createElement('div');
  notification.setAttribute('class', `notification is-${tp}`);
  notification.innerText = text;
  return notification;
}

module.exports = bulmaNotification;