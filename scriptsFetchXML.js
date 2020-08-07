const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const h2 = document.createElement('h2');
h2.textContent = 'Fetch XMLHttpRequest reply:';

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(h2);
app.appendChild(container)

//return; // NB! return can not be used in browser DOM.

let crucialNetErr = true // NB! Initially set crucial Net Error for request.
console.log('===============> fetch begin')
//fetch('https://ghibliapi.herokuapp.com/films')
//fetch('https://ghibliapi.herokuapp.com/films2')
//fetch('http://10.8.194.3:13000/')
//fetch('http://10.8.194.3:42001/?testDebian')
/* Fetch with init object containing any custom settings that you want to apply to the request:
let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/xml');
fetch('http://10.8.194.3:42001/?testDebian', {method: 'GET', headers: myHeaders, mode: 'cors'}).then(function(response) {

mode: The mode you want to use for the request are cors, no-cors, same-origin, or navigate. The default is cors.
*/
// project UnlCashExTEST ver. 3.8
fetch('http://10.8.194.3:10064/?agent=65&type=2&command=checkval&ticket_number=004-12345678-1234567')
.then(response => {
  crucialNetErr = false
    console.log('===============> fetch response got response.ok as ' + response.ok)
    //return response.json()
    if(response.ok) {
      //console.log(response.text())
      return response.text() // or use return response.json() for JSON data.
    }
    /*
      response.status 404
      response.statusText: "Not Found"
    */
   throw new Error(`${response.status} - ${response.statusText}`) // will be catche by final .catch().
   //throw new Error('Network response was not ok.') // will be catche by final .catch().
  })
.then(data => {
    console.log('===============> render fetched text in data object')
    console.log(data)
    // Work with JSON data here
    //const card = document.createElement('div')
    //card.setAttribute('class', 'card')
    //let docXml;
    // Create <h4> and <p>
    const hdr1 = document.createElement('h3')
    hdr1.textContent = 'Text data reply received from server'
    container.appendChild(hdr1);

    const p1 = document.createElement('p');
    //p1.textContent = data; // set text content.
    //container.appendChild(p1);

    // Create XML document from XML string using DOMParser().
    let oParser = new DOMParser();
    let oXmlDOM = oParser.parseFromString(data, "application/xml");
    //console.log(oXmlDOM.documentElement.nodeName === "parsererror" ? "error while parsing" : 'XML document name: ' + oXmlDOM.documentElement.nodeName);
    const hdr2 = document.createElement('h4');
    if (oXmlDOM.documentElement.nodeName === "parsererror") {
      hdr2.textContent = 'NB! Wrong format of XML sting received:';
      container.appendChild(hdr2);
      p1.textContent = data; // set text content.
      container.appendChild(p1);
    }
    else {
      let xmlS = new XMLSerializer();
      let xmlString = xmlS.serializeToString(oXmlDOM);
      p1.textContent = xmlString;
      container.appendChild(p1);
      hdr2.textContent = '<result> tag:';
      container.appendChild(hdr2);
      let nodeValue = oXmlDOM.getElementsByTagName("result")[0].childNodes[0].nodeValue; // get <result> tag text value.
      const p2 = document.createElement('p');
      p2.textContent = nodeValue;
      //let nodeValue2 = docXml.getElementsByTagName("sum")[0].childNodes[0].nodeValue; // get <sum> tag text value.
      container.appendChild(p2);
    }

})
.catch(err => { // catch network error and artificially thrown Error in very first then().
    // Do something for crucial or non-crucial error e.g. 404 here
    //const errorMessage = document.createElement('marquee') // obsolate.
      const errorMessage = document.createElement('p')
    if (crucialNetErr) {
      console.log('=======================> fetch Crucial error: ' + err.message)
      errorMessage.textContent = 'Network crucial error response NOT got: ' + err.message
    }
    else {
      console.log('=======================> fetch Non-crucial error: ' + err.message)
      //const errorMessage = document.createElement('marquee') // obsolate.
      //let errMsg = "Gah, it's not working!"
      //errorMessage.textContent = "Gah, it's not working!"
      errorMessage.textContent = 'Network response: ' + err.message
    }
    app.appendChild(errorMessage)
  })
/* NB! The fetch() promise will reject with a TypeError only when a crucial network error is encountered or 
    CORS is misconfigured on the server side, although this usually means permission issues or similar.
*/