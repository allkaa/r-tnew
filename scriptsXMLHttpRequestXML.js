const app = document.getElementById('root')
console.log(document.domain);

const logo = document.createElement('img')
logo.src = 'logo.png'

const h2 = document.createElement('h2');
h2.textContent = 'XMLHttpRequest reply:';

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo);
app.appendChild(h2);
app.appendChild(container);

//return; // NB! return can not be used in browser DOM.

//*
var xhr = new XMLHttpRequest();
// project UnlCashExTEST ver. 3.8
xhr.open('GET', 'http://10.8.194.3:10064/?agent=65&type=2&command=checkval&ticket_number=004-12345678-1234567', true);

// If specified, responseType must be empty string or "document"
//xhr.responseType = 'document';

// Force the response to be parsed as XML
xhr.overrideMimeType('text/xml');

xhr.onload = function () {
  let docXml;
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    //console.log(xhr.response);
    docXml = xhr.responseXML;
    //console.log(docXml);
    let xmlS = new XMLSerializer();
    let xmlString = xmlS.serializeToString(docXml);
    p1.textContent = xmlString;
    let nodeValue = docXml.getElementsByTagName("result")[0].childNodes[0].nodeValue; // get <result> tag text value.
    p2.textContent = nodeValue;
    //let nodeValue2 = docXml.getElementsByTagName("sum")[0].childNodes[0].nodeValue; // get <sum> tag text value.
}
  else {
    p1.textContent = `Request onload error status ${xhr.status}`;
  }
  // Append the container element with p.
  container.appendChild(p1);
  const h3 = document.createElement('h3');
  h3.textContent = 'result tag:';
  container.appendChild(h3);
  container.appendChild(p2);
}

xhr.onerror = () => {
  const p = document.createElement('p');
  p.textContent = `Request failed -> onerror event occured.`;
  container.appendChild(p);
}

xhr.ontimeout = () => {
  const p = document.createElement('p');
  p.textContent = `Request failed -> ontimeout event occured`;
  container.appendChild(p);
}

xhr.send();
//*/

/*
var request = new XMLHttpRequest()
console.log('===============> request.readyState: ' + request.readyState)

request.onreadystatechange = () => {
  console.log('===============> request.readyState: ' + request.readyState)
}
console.log('===============> request.open begin')
//request.open('GET', 'https://ghibliapi.herokuapp.com/films', true) // true is for asyn open mode, false for syn but depricated.
request.open('GET', 'http://10.8.194.3:42000/?testDebian', true) // true is for asyn open mode, false for syn but depricated.
console.log('===============> request.open done')
console.log('===============> request.send() begin')
request.send() // if syn open case, takes long time up to onreadystatechange = 4.
console.log('===============> request.send() done')
//*/

/* Syn open/send case (depricated):
console.log('===============> Syn Begin of this.responseText <=================')
//console.log(request.responseText)
console.log('===============> Syn End of this.responseText <=================')
// Begin accessing JSON data here
var dataSyn = JSON.parse(request.response)

console.log('=======================> Syn request.status: ' + request.status)
if (request.status >= 200 && request.status < 400) {
  dataSyn.forEach(movie => {
    console.log(movie.title)
  })
} else {
  console.log('=======================> Syn request.status: ' + request.status)
}
console.log('===============> Syn request finished')
*/

/*
// NB! request.onload works only with asyn requsest open mode.
request.onload = function() {
  console.log('===============> request.onload event activated')
  console.log('===============> Begin of this.responseText <=================')
  //console.log(this.responseText)
  console.log('===============> End of this.responseText <=================')
  // Begin accessing JSON data here
  //var data = JSON.parse(this.response)
  var data = request.XMLHttpRequest

  console.log('=======================> request.onload event this.status: ' + this.status)
  if (this.status >= 200 && this.status < 400) {
    data.forEach(movie => {
      // Create a div with a card class
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      // Create an h1 and set the text content to the film's title
      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      // Create a p and set the text content to the film's description
      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300) // Limit to 300 chars
      p.textContent = `${movie.description}...` // End with an ellipses

      // Append the cards to the container element
      container.appendChild(card)

      // Each card will contain an h1 and a p
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    console.log('=======================> request.onload event error in this.status: ' + this.status)
    const errorMessage = document.createElement('marquee')
    //let errMsg = "Gah, it's not working!"
    errorMessage.textContent = "Gah, it's not working!"
    app.appendChild(errorMessage)
  }
  console.log('===============> request.onload event finished')
}
*/