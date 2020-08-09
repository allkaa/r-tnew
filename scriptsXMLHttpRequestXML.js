// scriptsXMLHttpRequestXML.js
const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'
app.appendChild(logo)

const hdrMain = document.createElement('h2');
hdrMain.textContent = 'XMLHttpRequest Sample';
app.appendChild(hdrMain);
const hdrWarn = document.createElement('h3');
hdrWarn.textContent = '';
app.appendChild(hdrWarn);

const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

/*<button class="favorite" type="button">Search!</button>*/
const btn1 = document.createElement('button');
btn1.setAttribute('id', 'searchBtn1');
btn1.setAttribute('type', 'button');
btn1.textContent= 'Buy ticket';
container.appendChild(btn1);

const btn2 = document.createElement('button');
btn2.setAttribute('id', 'searchBtn2');
btn2.setAttribute('type', 'button');
btn2.textContent= 'Check ticket by number';
container.appendChild(btn2);

const inp1 = document.createElement('input');
inp1.setAttribute('id', 'searchInp1');
inp1.setAttribute('type', 'search');
inp1.setAttribute('name', 'q');
//inp1.setAttribute('onchange', 'FetchExecutor');
inp1.setAttribute('value', '');
inp1.setAttribute('placeholder', '123-12345678-1234567');
inp1.setAttribute('aria-label', 'Check ticket by number');
container.appendChild(inp1);

// Create headers and paratraphs.
const hdr1 = document.createElement('h3');
hdr1.textContent = '';
container.appendChild(hdr1);
const p1 = document.createElement('p');
p1.textContent = ''; // clear text content.
container.appendChild(p1);
const hdr2 = document.createElement('h4');
hdr2.textContent = '';
container.appendChild(hdr2);
const p2 = document.createElement('p');
p2.textContent = '';
container.appendChild(p2);
const errorMessage = document.createElement('p');
errorMessage.textContent = '';
container.appendChild(errorMessage);

let txn_id = 10000000;

//inp1.addEventListener('change', FetchExecutor); // works ok thru ENTER.
//btn1.addEventListener('click', FetchExecutor);
//btn2.addEventListener('click', FetchExecutor);
// Add a handler for the 'click' event by providing a callback function.
btn1.addEventListener('click', function (event) {
  console.log(event);
  XMLHttpExecutor(1);
});
btn2.addEventListener('click', function (event) {
  console.log(event);
  XMLHttpExecutor(2);
});

//return; // NB! return can not be used in browser DOM.

//XMLHttpExecutor();

function XMLHttpExecutor(props) {
  console.log('props='+props);
  hdr1.textContent = '';
  p1.textContent = ''; // clear text content.
  hdr2.textContent = '';
  p2.textContent = '';
  console.log('inp1.value: ')
  console.log(inp1.value);
  // project UnlCashExTEST ver. 3.8
  // http://10.8.194.3:10064/?agent=65&type=2&command=pay&date=20200808&txn_id=10000001&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0
  // 004-12345678-1234567
  //let reqString = 'http://10.8.194.3:10064/?agent=65&type=2&command=checkval&ticket_number=' + inp1.value ;
  let reqString = '';
  if (props === 1) {
    txn_id = txn_id + 1;
    reqString = 'http://10.8.194.3:10064/?agent=65&type=2&command=pay&date=20200808&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0';
  }
  else if (props === 2) {
    reqString = 'http://10.8.194.3:10064/?agent=65&type=2&command=checkval&ticket_number=' + inp1.value ;
  }
  else {
    hdrWarn.textContent = 'NB! Internal error - wrong props: ' + props;
    return;
  }
  console.log('reqString: ' +reqString);
  console.log('===============> new XMLHttpRequest begin');
  errorMessage.textContent = '';
  hdrWarn.textContent = 'Wait for new XMLHttpRequest processing...';
  let xhr = new XMLHttpRequest();
  // project UnlCashExTEST ver. 3.8
  xhr.open('GET', reqString, true);
  
  // If specified, responseType must be empty string or "document"
  //xhr.responseType = 'document';
  
  // Force the response to be parsed as XML
  xhr.overrideMimeType('text/xml');
  
  xhr.onload = function () {
    console.log('===============> XMLHttpRequest response got response')
    hdrWarn.textContent = '';
    let docXml;
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
      hdr2.textContent = `Request onload error status ${xhr.status}`;
    }
    // Append the container element with p.
    hdr2.textContent = 'result tag:';
  }
  
  xhr.onerror = () => {
    hdrWarn.textContent = 'NB! Network Error occured.';
    errorMessage.textContent = `Request failed -> onerror event occured, server does not respond.`;
  }
  
  xhr.ontimeout = () => {
    hdrWarn.textContent = 'NB! Network Error occured.';
    errorMessage.textContent = `Request failed -> ontimeout event occured, server does not respond.`;
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
}

