const root : Element = document.getElementById('#root');

const newElement : Element = document.createElement('span');
const text : Text = document.createTextNode('The build is working');

newElement.appendChild(text);
root.appendChild(newElement);
