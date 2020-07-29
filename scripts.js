console.log('===============> scripts.js started...');
const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'external-link-52.png';
logo.style = "margin-top: 10px";

//const container = document.createElement('div')
//container.setAttribute('class', 'container')

app.appendChild(logo)
//app.appendChild(container)

//return; // NB! return can not be used in browser DOM.

console.log('===============> scripts.js created footer logo and ended.')
