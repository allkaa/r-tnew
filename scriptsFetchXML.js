// scriptsFetchXML.js
const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'
app.appendChild(logo)

const hdrMain = document.createElement('h2');
hdrMain.textContent = 'Fetch XMLHttpRequest Sample';
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
  FetchExecutor(1);
});
btn2.addEventListener('click', function (event) {
  console.log(event);
  FetchExecutor(2);
});

//return; // NB! return can not be used in browser DOM.

//FetchExecutor();

function FetchExecutor(props) {
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
  let crucialNetErr = true; // NB! Initially set crucial Net Error for request.
  //fetch('https://ghibliapi.herokuapp.com/films');
  //fetch('https://ghibliapi.herokuapp.com/films2');
  //fetch('http://10.8.194.3:13000/');
  //fetch('http://10.8.194.3:42001/?testDebian');
  /* Fetch with init object containing any custom settings that you want to apply to the request:
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/xml');
  fetch('http://10.8.194.3:42001/?testDebian', {method: 'GET', headers: myHeaders, mode: 'cors'}).then(function(response) {
  
  mode: The mode you want to use for the request are cors, no-cors, same-origin, or navigate. The default is cors.
  */
  console.log('===============> fetch begin');
  errorMessage.textContent = '';
  hdrWarn.textContent = 'Wait for fetch processing...';
  fetch(reqString)
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
    hdrWarn.textContent = '';
    console.log('===============> render fetched text in data object')
    console.log(data)
    hdr1.textContent = 'Text data reply received from server'
    // Create XML document from XML string using DOMParser().
    let oParser = new DOMParser();
    let oXmlDOM = oParser.parseFromString(data, "application/xml");
    //console.log(oXmlDOM.documentElement.nodeName === "parsererror" ? "error while parsing" : 'XML document name: ' + oXmlDOM.documentElement.nodeName);
    if (oXmlDOM.documentElement.nodeName === "parsererror") {
      hdr2.textContent = 'NB! Wrong format of XML sting received:';
      //container.appendChild(hdr2);
      p1.textContent = data; // set text content.
      //container.appendChild(p1);
    }
    else {
      let xmlS = new XMLSerializer();
      let xmlString = xmlS.serializeToString(oXmlDOM);
      p1.textContent = xmlString;
      //container.appendChild(p1);
      hdr2.textContent = '<result> tag:';
      //container.appendChild(hdr2);
      let nodeValue = oXmlDOM.getElementsByTagName("result")[0].childNodes[0].nodeValue; // get <result> tag text value.
      //const p2 = document.createElement('p');
      p2.textContent = nodeValue;
      //let nodeValue2 = docXml.getElementsByTagName("sum")[0].childNodes[0].nodeValue; // get <sum> tag text value.
      //container.appendChild(p2);
    }
  })
  .catch(err => { // catch network error and artificially thrown Error in very first then().
    // Do something for crucial or non-crucial error e.g. 404 here
    //const errorMessage = document.createElement('marquee') // obsolate.
    hdrWarn.textContent = 'NB! Network Error occured.';
    if (crucialNetErr) {
      console.log('=======================> fetch Crucial error: ' + err.message)
      errorMessage.textContent = 'Network crucial error - response NOT got: ' + err.message
    }
    else {
      console.log('=======================> fetch Non-crucial error: ' + err.message)
      //const errorMessage = document.createElement('marquee') // obsolate.
      //let errMsg = "Gah, it's not working!"
      //errorMessage.textContent = "Gah, it's not working!"
      errorMessage.textContent = 'Network response: ' + err.message
    }
  })
  /* NB! The fetch() promise will reject with a TypeError only when a crucial network error is encountered or 
      CORS is misconfigured on the server side, although this usually means permission issues or similar.
  */
 } // end of FetchExecutor()

