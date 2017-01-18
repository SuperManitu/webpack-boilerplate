const root = document.getElementById('#root');

const newElement = document.createElement('span');
const text = document.createTextNode('The build is working');

newElement.appendChild(text);
root.appendChild(newElement);
