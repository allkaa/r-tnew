console.log('===============> scripts.js started...')
const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

//const container = document.createElement('div')
//container.setAttribute('class', 'container')

app.appendChild(logo)
//app.appendChild(container)

//return; // NB! return can not be used in browser DOM.

console.log('===============> scripts.js ended.')
