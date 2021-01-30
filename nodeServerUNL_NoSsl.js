// nodeServerUNL viewport svg 1020
'use strict'; // is unnecessary inside of modules.
// Using special formName  /formAKchk?q=123-12345678-1234567 /formAKval?q=123-12345678-1234567 or /formAKpay?q=xxx
//file:///home/akaarna/react-tutorial/build/index.html

/*
Standard dirs should be:
images
pages
scripts
styles
*/

/*
Can be started as parent in build subdir:

  >node ..\nodeServerUNL.js

*/

//let typeProj =  ''; // 'build';
const dirName = 'build'; // React build dir as root dir.
//let dirName = ''; // root dir.
//let methodType = 'get'; // 'post' or 'get' for secure server.
//let formNameIni = 'submitFormAK-Ini';
//let formName = 'submitFormAK';
//let dirName = 'arch'; // root dir
const formNameIni = 'index.html';
//let formNameIni = 'indexForm.html';

const fs = require('fs');
let addon;
let linux = false;
try {
  let dir = fs.opendirSync('./build');
  let dirEnt;
  while (true) {
    dirEnt = dir.readSync();
    if (dirEnt === null) break;
    if (dirEnt.name === 'addon.node') { // asset-manifest.json for test, for real addon.node
      linux = true;
      break;
    }
  }
  dir.closeSync();
} catch (error) {
  linux = false;
}

console.log('Debian linux type: ' + linux);
if (linux) { // Debian linux addon.node.
  addon = require('./build/addon');
}
else {
  addon = require('./addon'); // Windows addnon.node
}

const http = require('http');
const urlval = 'http://10.8.194.3:9994/'; // project WinTicsCheckNoSslTEST new at 'http://10.8.194.3:9994/'
//let reqString = urlval + '?agent=58&type=2&command=checkval&ticket_number=225-13818091-1101234';
let reqStringVal = urlval + '?agent=58&type=2&command=checkval&ticket_number='; // + search;

//const urlpay = 'http://10.8.194.3:10064/'; // project UnlCashExTEST ver. 3.8
const urlpay = 'http://10.8.194.3:38000/'; // project PayTest ver. 4.0 NoSsl.
let txn_id = 10000000;

let rawData = '';

const parseString = require('xml2js').parseString;
//const https = require('https');
const https = require('http');
//const { StrictMode } = require('react');
const urlLegacy = require('url'); // Legacy url module.
//const { URL } = require('url'); // ES6 url module
// The querystring module provides utilities for parsing and formatting URL query strings.
//const qs = require('querystring'); // used as let objBody = qs.parse(body, "\r\n", "=");
//const formidable = require('formidable');
//const {userInfo} = require('./appWeb.js');

let dtVar = new Date();
console.log('Server starts ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
/*
//var envObj = process.env;
for (let prop in process.env) {
  //console.log(prop + ": " + process.env[prop]);
}
dtVar = new Date();
console.log('==================================== ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
*/

// https://localhost:8081
//const hostname = 'localhost';
// https://unl.test:8081
const hostname = 'unl.test';
//const port = process.env.PORT; //  Windows - default port is 1337 for WebApp and 1542 for ConsoleApp;
const port = 8081; // for Linux must be set manually;

dtVar = new Date();
console.log('Before https.createServer() ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

/*
let optSsl;
if (typeProj === 'build') {
  optSsl = {
    pfx: fs.readFileSync('../unl.test.pfx'), // '../../unl_works.pfx'
    passphrase: 'unl'
  };
}
else {
  optSsl = {
    pfx: fs.readFileSync('./unl.test.pfx'), // '../../unl_works.pfx'
    passphrase: 'unl'
  };
}
let options = optSsl;
*/

//const server = http.createServer((req, res) => { // request is <http.IncomingMessage>, response is <http.ServerResponse> ...}
//const server = https.createServer(options);
const server = https.createServer();

server.on('error', (err) => {
  var dtVar = new Date();
  //throw err;
  console.log(`httpsServer 'error' event - error code: ==> ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(err.code);
  console.log('httpsServer error stack:');
  console.log(err.stack);
});

/*
server.on('connection', (socket) => {
  var dtVar = new Date();
  console.log(`httpsServer 'connection' event - client connected at + ==> ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
  console.log(socket.remoteAddress + ' ' + socket.remoteFamily + ' ' + socket.remotePort);
});
*/

server.on('request', (req, res) => { // request is <http.IncomingMessage>, response is <http.ServerResponse>
  req.on('error', (err) => {
    // This prints the error message and stack trace to `stderr`.
    console.log(`httpsServer request 'error' event - error stack: ==> ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.error(err.stack);
  });
  res.on('error', (err) => {
    console.log(`httpsServer response 'error' event - error code: ==> ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
    console.error(err);
  });
  // The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
  // or properties from objects, into distinct variables.
  //const { method, url, headers } = req;
  //let aaa = new Object();
  // req.url if GET "/" for very initial and for next  e.g. "styles/style.css" or "/submitFormAK?fname=Alex&sname=Raven"
  // if POST then e.g. "/submitformAK"
  let objUrl = urlLegacy.parse(req.url, true, true); // non standard object.
  //console.log(objUrl.pathname); // "/formAKpay"
  //console.log(objUrl.search); // "?q=ticreq"
  // Verify that it is very first page request or rendering page after GET or POST form submit processed.
  // After POST form submit will be processed rendering page will be as GET.
  // In req.headers Object property host: "unl.test:8081"
  // <==================== Begin of GET method form submit case ====================================================>
  if ((req.method === "GET")) {
    // for req.method === "GET" objUrl.search is ? + query e.g. "?q=123-12345678-1234567" or Null
    // req.url = "/" or e.g. "styles/style.css" or "/formAK?q=123-12345678-1234567"
    // if req.method === "POST" then ObjUrl.search will be "" always.
    /*
    req.url = "/" or e.g. "/submitformAK?fname=al&sname=kaa"
    ObjUrl {
      href: = path: "/ or e.g. "/submitformAK?fname=al&sname=kaa"
      pathname: "/" or e.g. "/submitformAK"
      search: null or  "?fname=al&sname=kaa"
      query: Object {} or {fname: "al", sname: "kaa"}
    }
    */
    if (objUrl.search === null) { // very initial request https://unl.test:8081/
      let contType = '';
      if (objUrl.pathname.endsWith('.css')) {
        contType = 'text/css';
      }
      else if (objUrl.pathname.endsWith('.js')) {
        contType = 'application/javascript';
      }
      else if (objUrl.pathname.endsWith('.json')) {
        contType = 'application/json';
      }
      else if (objUrl.pathname.endsWith('.map')) {
        contType = 'application/map';
      }
      else if (objUrl.pathname.endsWith('.ico')) {
        contType = 'image/bmp';
      }
      else if (objUrl.pathname.endsWith('.png')) {
        contType = 'image/png';
      }
      else if (objUrl.pathname.endsWith('.svg')) {
        contType = 'image/svg+xml';
      }
      else if (objUrl.pathname.endsWith('.jpg') || objUrl.pathname.endsWith('.jpeg')) {
        contType = 'image/jpeg';
      }
      else if (objUrl.pathname.endsWith('.htm') || objUrl.pathname.endsWith('.html')) {
        contType = 'text/html';
      }
      else if (objUrl.pathname !== '/') {
        contType = 'application/octet-stream';
      }
      //console.log('contType: [' + contType + '] <==============================');
      //console.log('objUrl.pathname: ' + objUrl.pathname);
      //console.log('objUrl.path: ' + objUrl.path);
      if (contType === '') {  // default formNameIni e.g. indexForm.html.
        contType = 'text/html';
        console.log('Empty contType read file: ./' + dirName + '/' + formNameIni);
        fs.readFile('./' + dirName + '/' + formNameIni, (err, data) => {
          if (err) {
            res.writeHead(200, { 'Content-Type': `${contType}` });
            res.write(`Empty contType as ${dirName}/${formNameIni} not found!`);
            return res.end();
              } // throw err;
          else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
          }
        });
      }
      else {
        console.log('Non empty contType read file: ./' + dirName + objUrl.pathname);
        fs.readFile('./' + dirName + objUrl.pathname, (err, data) => { // './' + dirName  + "/path/name.type"
        if (err) {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.write(`Non empty contType ${contType} as ${dirName + objUrl.pathname} not found!`);
          return res.end();
            } // throw err;
        else {
            res.writeHead(200, { 'Content-Type': `${contType}` });
            res.write(data);
            return res.end();
          }
        });
      }
    } // end of objUrl.search === null -> no ? in GET request.
    else { // objUrl.search !== null, there is ? in GET request.
      // for req.method === "GET" objUrl.search is ? + query e.g. "?q=123-12345678-1234567" or Null if no ? in GET request.
      // req.url = "/formAK?q=123-12345678-1234567"
      /*
      req.url = "/formAK?q=123-12345678-1234567"
      ObjUrl {
      href: = path: /formNameIni?fname=al&sname=kaa"
      pathname: /formNameIni"
      search: "?fname=al&sname=kaa"
      query: {fname: "al", sname: "kaa"}
      }
      */
      // HACKER ATTACK OR FAULTY CLIENT.
      //req.connection.destroy();
      //req.url = "/formAKval?q=123-12345678-1234567"
      //console.log(objUrl.pathname); // "/formAKval"
      //console.log(objUrl.search); // "?q=123-12345678-1234567"
      if (req.url.indexOf('/formAKchk?') >= 0) {
        /*
        res.writeHead(200, { 'Content-Type': 'text/xml' });
        //res.write('');
        res.write('<?xml version="1.0" encoding="UTF-8"?>');
        res.write('<response>');
        res.write('<ticket>225-13818091-1101234</ticket>');
        res.write('<game>2</game>');
        res.write('<sum>10.00</sum>');
        res.write(`<result>0</result>`);
        res.write('</response>');
        */
        /*
        ElseIf (InStrRev(strBuf, "PPAY", -1, CompareMethod.Text) > 0) Then
        ReqStruct.sum = -1
        ElseIf (InStrRev(strBuf, "CASH", -1, CompareMethod.Text) > 0) Then
        ReqStruct.sum = -2
        ElseIf (InStrRev(strBuf, "CSHX", -1, CompareMethod.Text) > 0) Then
        ReqStruct.sum = -3
        ElseIf (InStrRev(strBuf, "VCAN", -1, CompareMethod.Text) > 0) Then
        ReqStruct.sum = -4
        ElseIf (InStrRev(strBuf, "VDEL", -1, CompareMethod.Text) > 0) Then
        ReqStruct.sum = 0
        */
        //ValTicket('225-13818091-1101234', res);
        let ticnum = '';
        //objUrl.search is e.g. "?q=123-12345678-1234567"
        ticnum = objUrl.search.slice(objUrl.search.indexOf('=') + 1);
        rawData = '';
        CheckValTicket(ticnum, res);
        //console.log(`rawData in server.on('request', (req, res) ...) event :`)
        //console.log(rawData); // will be empy ''.
        //res.write(rawData);
      } // end of if (req.url.indexOf('/formAK?') >= 0)
      //req.url = "/formAKpay?q=ticreq"
      //console.log(objUrl.pathname); // "/formAKpay"
      //console.log(objUrl.search); // "?q=ticreq"
      else if (req.url.indexOf('/formAKpay?') >= 0) {
        let ticreq = '';
        //objUrl.search is e.g. "?q=5_1_1_a_16_27_31_34_43"
        ticreq = objUrl.search.slice(objUrl.search.indexOf('=') + 1); // "5_1_1_a_16_27_31_34_43"
        rawData = '';
        //let result = -1000;
        BuyTicket(ticreq, res); // result = BuyTicket(ticreq, res); // result is not from events!!!
      }
      else if (req.url.indexOf('/formAKresults?') >= 0) {
        let game = '',  draw = '',  drawnum = -1, begpos, endpos;
        //objUrl.search is e.g. "?g=2&q="
        //                        012345
        begpos = objUrl.search.indexOf('g=');
        endpos = objUrl.search.indexOf('&q=');
        if (begpos === -1 || endpos === -1 || (endpos <= begpos + 2)) game = -1;
        else {
          game = objUrl.search.substring(begpos+2,endpos);
          draw = objUrl.search.substring(endpos+3);
          console.log('game=' + game + ', draw=[' + draw + ']');
          if (game !== '2' && game !== '4' && game !== '5' && game !== '6') game = -1;
          else game = Number(game);
          if (draw === '') drawnum = 0;
          else {
            drawnum = Number(draw);
            if (Number.isNaN(drawnum)) drawnum = -1;
            else if (!Number.isInteger(drawnum)) drawnum = -1;
            else if (drawnum < 1)  drawnum = -1;
          }
        }
        console.log('game=' + game + ', drawnum=' + drawnum);
        if (game !== -1 && drawnum !== -1) {
          //console.log('game=' + game + ', draw=' + drawnum);
          rawData = ''; // NB! must be cleared before calling function.
          GetResults(game, drawnum, res);
        }
        else {
          console.log('NB!!! Wrong form parameters url submitted: ' + req.url);
          //res.writeHead(200, { 'Content-Type': 'text/plain' });
          //res.write(`Form request submitted by GET. Action URL with search: ${req.url}`);
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<!DOCTYPE html>');
          res.write('<html lang="en">');
          res.write('<head>');
          res.write('<meta charset="utf-8" />');
          res.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
          res.write('<title>Unknown Form request submitted by GET</title>');
          res.write('<style>');
          res.write('#ticinfo {');
          //res.write('width: 70%;');
          res.write('margin: 3% 3% 3% 3%;');
          res.write('background-color: #dfdbdb;');
          res.write('border: thick solid black;');
          res.write('outline: dashed red;');
          res.write('}');
          res.write('#ticback {');
          res.write('display: block;')
          res.write('width: 10%;');
          res.write('margin: 3% 3% 3% 3%;');
          res.write('padding: 1% 1% 1% 1%;');
          res.write('color: white;')
          res.write('background-color: blue;');
          res.write('border: thin solid black;');
          res.write('border-radius: 15%;')
          res.write('text-decoration:none;')
          res.write('}');
          res.write('#ticket {');
          res.write('display: block;')
          res.write('margin: 3% 3% 3% 3%;');
          res.write('padding: 1% 1% 1% 1%;');
          res.write('background-color: white;');
          res.write('border: thin solid black;');
          res.write('}');
          res.write('</style>');
          res.write('</head>');
          res.write('<body>');
          res.write('<div id="ticinfo">');
          res.write('<a id="ticback" href="/">Back</a>');
          res.write('<h4>Wrong form parameters submitted by GET</h4>');
          res.write(`GET action URL (form name with search included): ${req.url}`);
          res.write('</p>');
          res.write('</div>');
          res.write('</body>');
          res.write('</html>');
          res.end();
          return res.end();
        } // end of Wrong form parameters submitted by GET.
      } // end of else if (req.url.indexOf('/formAKresults?') >= 0)
      else {
        console.log('NB!!! Unknown form url submitted: ' + req.url);
        //res.writeHead(200, { 'Content-Type': 'text/plain' });
        //res.write(`Form request submitted by GET. Action URL with search: ${req.url}`);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<!DOCTYPE html>');
        res.write('<html lang="en">');
        res.write('<head>');
        res.write('<meta charset="utf-8" />');
        res.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
        res.write('<title>Unknown Form request submitted by GET</title>');
        res.write('<style>');
        res.write('#ticinfo {');
        //res.write('width: 70%;');
        res.write('margin: 3% 3% 3% 3%;');
        res.write('background-color: #dfdbdb;');
        res.write('border: thick solid black;');
        res.write('outline: dashed red;');
        res.write('}');
        res.write('#ticback {');
        res.write('display: block;')
        res.write('width: 10%;');
        res.write('margin: 3% 3% 3% 3%;');
        res.write('padding: 1% 1% 1% 1%;');
        res.write('color: white;')
        res.write('background-color: blue;');
        res.write('border: thin solid black;');
        res.write('border-radius: 15%;')
        res.write('text-decoration:none;')
        res.write('}');
        res.write('#ticket {');
        res.write('display: block;')
        res.write('margin: 3% 3% 3% 3%;');
        res.write('padding: 1% 1% 1% 1%;');
        res.write('background-color: white;');
        res.write('border: thin solid black;');
        res.write('}');
        res.write('</style>');
        res.write('</head>');
        res.write('<body>');
        res.write('<div id="ticinfo">');
        res.write('<a id="ticback" href="/">Back</a>');
        res.write('<h4>Unknown Form request submitted by GET</h4>');
        res.write(`GET action URL (form name with search included): ${req.url}`);
        res.write('</p>');
        res.write('</div>');
        res.write('</body>');
        res.write('</html>');
        res.end();
        return res.end();
      } // end of Unknown form url submitted
    } // end of objUrl.search !== null, there is ? in GET request.
  } // <==================== End of GET method form submit case ====================================================>
  else { // <==================== Begin of POST method form submit case ============================================>
    // POST method. NB! If req.method === "POST" then ObjUrl.search will be Null always.
    //let objUrl = urlLegacy.parse(req.url, true, true); // non standard object is got earlier befor GET or POST analyze.
    /*
    req.url = "/formNameIni"
    ObjUrl {
      href: = path: = pathname:  "/formNameIni"
      search: null
      query: Object {}
    }
    later body will be
    body: "fname=al\r\nsname=kaa\r\n"
    */
    let body = '';
    req.on('data', function (data) {
      body += data;
      // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB.
      if (body.length > 1e6) {
        // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST.
        req.connection.destroy();
      }
    });
    req.on('end', function () {
      // e.g. body = 'fname=Alex\r\nsname=Raven\r\n' for /formNameIni
      /*
      console.log(body);
      let strVar = '';
      for (let i = 0; i < body.length; i++) {
        strVar = strVar + body.charCodeAt(i) + ",";
      }
      console.log(strVar);
      */
      //console.log(objBody);
      //let objBody = qs.parse(body, "\r\n", "="); // using const qs = require('querystring') module.
      /*
        req.url = "/submitformAK"
        ObjUrl {
          href: = path: = pathname:  "/submitformAK"
          search: null
          query: Object {}
        }
        body: "fname=al\r\nsname=kaa\r\n"
        objBody: Object {fname: "al", sname: "kaa"}    }
      */
      // HACKER ATTACK OR FAULTY CLIENT.
      //req.connection.destroy();
      //res.writeHead(200, { 'Content-Type': 'text/plain' });
      //res.write(`Form request submitted by POST. Action URL is ${req.url} with search as body: \r\n${body}`);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<!DOCTYPE html>');
      res.write('<html lang="en">');
      res.write('<head>');
      res.write('<meta charset="utf-8" />');
      res.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
      res.write('<title>Form request submitted by POST</title>');
      res.write('<style>');
      res.write('#ticinfo {');
      //res.write('width: 70%;');
      res.write('margin: 3% 3% 3% 3%;');
      res.write('background-color: #dfdbdb;');
      res.write('border: thick solid black;');
      res.write('outline: dashed red;');
      res.write('}');
      res.write('#ticback {');
      res.write('display: block;')
      res.write('width: 10%;');
      res.write('margin: 3% 3% 3% 3%;');
      res.write('padding: 1% 1% 1% 1%;');
      res.write('color: white;')
      res.write('background-color: blue;');
      res.write('border: thin solid black;');
      res.write('border-radius: 15%;')
      res.write('text-decoration:none;')
      res.write('}');
      res.write('#ticket {');
      res.write('display: block;')
      res.write('margin: 3% 3% 3% 3%;');
      res.write('padding: 1% 1% 1% 1%;');
      res.write('background-color: white;');
      res.write('border: thin solid black;');
      res.write('}');
      res.write('</style>');
      res.write('</head>');
      res.write('<body>');
      res.write('<div id="ticinfo">');
      res.write('<a id="ticback" href="/">Back</a>');
      res.write('<h4>Form request submitted by POST</h4>');
      res.write('<p id="ticket">');
      res.write(`POST action (form name) as URL is ${req.url} with search as body: ${body}`);
      res.write('</p>');
      res.write('</div>');
      res.write('</body>');
      res.write('</html>');
      res.end();
      return res.end();
    }); // end req.on('end', function ()...
  } // <==================================== End of POST method form submit case ===================================>
}) // end of server.on('request'...)

dtVar = new Date();
console.log('After https.createServer ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

// Begin accepting connections on the specified port and hostname.
// If hostname is omitted, server will accept connections on the unspecified IPv6 address (::) when IPv6 is available,
// or the unspecified IPv4 address (0.0.0.0) otherwise.
server.listen(port, hostname, () => {
  // Place holders in template literals are indicated by the $ (Dollar sign) and curly braces e.g. (${expression}).
  //console.log(`Server running and listening at https://${hostname}:${port}/ ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds()); // ${expression} is place holders in template literal enclosed by the back-tick (` `) (grave accent) characters.
  console.log(`Server running and listening at http://${hostname}:${port}/ ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds()); // ${expression} is place holders in template literal enclosed by the back-tick (` `) (grave accent) characters.
});

dtVar = new Date();
console.log('End Serer main PROGAM path after server.listen(port, hostname, callback) ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

// <==================================== GetResults =====================================>
function GetResults(game, drawnum, res2) {
  // NB! rawData var must be set to '' before calling this function.
  // http://10.8.194.3:38000/?agent=16&type=2&command=scheck&game=5&draw_results
  // http://10.8.194.3:38000/?agent=16&type=2&command=scheck&game=5&draw_results&draw=1
  let gamename = 'Unknown';
  if (game === 2) gamename = 'Кено';
  else if (game === 4) gamename = 'Трійка';
  else if (game === 5) gamename = 'Лото Максима';
  else if (game === 6) gamename = 'Супер Лото';
  let reqStringGetResults;
  reqStringGetResults = urlpay + '?agent=16&type=2&command=scheck&game=' + game.toString() + '&draw_results';
  if (drawnum !== 0) reqStringGetResults = reqStringGetResults + '&draw=' + drawnum.toString();
  console.log(reqStringGetResults);
  http.get(reqStringGetResults, (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error(`Request Failed.\n Status Code: ${statusCode}`);
    }
    else if (!/^text\/xml/.test(contentType)) {
      error = new Error(`Invalid content-type.\n Expected text/xml but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      // consume response data to free up memory
      res.resume();
      //return error.message;
    }

    res.setEncoding('utf8');
    //let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        //const parsedData = JSON.parse(rawData);
        //console.log(parsedData);
        console.log(`rawData in client http.on('end', ...) event :`)
        console.log(rawData);
        let reply = '';
        let errmsg = '';
        let reptext = '';
        parseString(rawData, function (err, result) {
            if (err !== null) {
              //console.log(err.message);
              // "Non-whitespace before first tag.\nLine: 0\nColumn: 1\nChar: ?"
              errmsg = err.message.replace('\n',' ');
              while (errmsg.indexOf('\n') !== -1) {
                errmsg = errmsg.replace('\n',' ');
              }
              //console.log(errmsg);
            }
            else {
              //console.log(result);
              reply = result;
            }
        });
        if (reply !== '') {
          //console.log('reply:');
          //console.log(reply.response.result[0]);
          if (reply.response.result[0] === '0') {
            reptext = reptext + '<li>Україньска Національна Лотерея</li>';
            reptext = reptext + '<li>Результаты</li>';
            reptext = reptext + '<li>Гра: '  + gamename + '</li>';
            if (drawnum === 0) {
              if (reply.response.last_draw !== undefined) {
                reptext = reptext + '<li>Розіграш: ' +  reply.response.last_draw[0].draw_num[0] + '</li>';
                reptext = reptext + '<li>Дата: ' +  reply.response.last_draw[0].date[0] + '</li>';
                reptext = reptext + '<li>Номера: ' +  reply.response.last_draw[0].winnig_numbers[0] + '</li>';
              }
            }
            else {
              reptext = reptext + '<li>Розіграш: ' + reply.response.draw_num[0] + '</li>';
              reptext = reptext + '<li>Дата: ' + reply.response.date[0] + '</li>';
              reptext = reptext + '<li>Номера: ' + reply.response.winnig_numbers[0] + '</li>';
            }
          }
          else {
            reptext = 'Server reply with result: ' + reply.response.result[0];
          }
          console.log(reptext);
        }
        else {
          reptext = 'XML wrong format:' + errmsg;
        }
        res2.writeHead(200, { 'Content-Type': 'text/html' });
        res2.write('<!DOCTYPE html>');
        res2.write('<html lang="en">');
        res2.write('<head>');
        res2.write('<meta charset="utf-8" />');
        res2.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
        res2.write('<title>Draw info</title>');
        res2.write('<style>');
        res2.write('#ticinfo {');
        //res2.write('width: 70%;');
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('background-color: #dfdbdb;');
        res2.write('border: thick solid black;');
        res2.write('outline: dashed red;');
        res2.write('}');
        res2.write('#ticback {');
        res2.write('display: block;')
        res2.write('width: 10%;');
        res2.write('margin: 1% 3% 1% 3%;');
        res2.write('padding: 1% 1% 1% 1%;');
        res2.write('color: white;')
        res2.write('background-color: blue;');
        res2.write('border: thin solid black;');
        res2.write('border-radius: 15%;')
        res2.write('text-decoration:none;')
        res2.write('}');
        res2.write('#tichdr {');
        res2.write('margin: 1% 3% 1% 3%;');
        //res2.write('padding: 1% 1% 1% 1%;');
        res2.write('}');
        res2.write('#ticket {');
        res2.write('display: block;')
        res2.write('margin: 1% 3% 1% 3%;');
        res2.write('padding: 1% 1% 1% 1%;');
        res2.write('background-color: white;');
        res2.write('border: thin solid black;');
        res2.write('}');
        //res2.write('');
        res2.write('</style>');
        res2.write('</head>');
        res2.write('<body>');
        res2.write('<div id="ticinfo">');
        res2.write('<a id="ticback" href="/">Back</a>');
        res2.write('<ul id="ticket">');
        res2.write(reptext);
        res2.write('</ul>');
        res2.write('</div>');
        //res2.write('<script>');
        //res2.write("console.log('page body script started');");
        //res2.write("console.log(document.getElementById('ticket').innerHTML);");
        //res2.write("if (document.getElementById('ticket').innerHTML === 'Ожидайте ответа сервера...') document.location.reload();");
        //res2.write('</script>');
        res2.write('</body>');
        res2.write('</html>');
        //res2.write('');
        res2.end();
      } catch (e) {
        console.error(e.message);
        res2.writeHead(200, { 'Content-Type': 'text/html' });
        res2.write('<!DOCTYPE html>');
        res2.write('<html lang="en">');
        res2.write('<head>');
        res2.write('<meta charset="utf-8" />');
        res2.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
        res2.write('<title>Ticket info processing error</title>');
        res2.write('<style>');
        res2.write('#ticinfo {');
        //res2.write('width: 70%;');
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('background-color: #dfdbdb;');
        res2.write('border: thick solid black;');
        res2.write('outline: dashed red;');
        res2.write('}');
        res2.write('#ticback {');
        res2.write('display: block;')
        res2.write('width: 10%;');
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('padding: 1% 1% 1% 1%;');
        res2.write('color: white;')
        res2.write('background-color: blue;');
        res2.write('border: thin solid black;');
        res2.write('border-radius: 15%;')
        res2.write('text-decoration:none;')
        res2.write('}');
        res2.write('#ticket {');
        res2.write('display: block;')
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('padding: 1% 1% 1% 1%;');
        res2.write('background-color: white;');
        res2.write('border: thin solid black;');
        res2.write('}');
        //res2.write('');
        res2.write('</style>');
        res2.write('</head>');
        res2.write('<body>');
        res2.write('<div id="ticinfo">');
        res2.write('<a id="ticback" href="/">Back</a>');
        res2.write('<h4>Ticket info processing error</h4>');
        res2.write('<p id="ticket">');
        res2.write(e.message);
        res2.write('</p>');
        res2.write('</div>');
        res2.write('</body>');
        res2.write('</html>');
      }
      res2.end();
      //return rawData;
    });
  }).on('error', (e) => {
    // e.message e.g. "connect ETIMEDOUT 10.8.194.3:9993"
    console.error(`Got error: ${e.message}`);
    res2.writeHead(200, { 'Content-Type': 'text/html' });
    res2.write('<!DOCTYPE html>');
    res2.write('<html lang="en">');
    res2.write('<head>');
    res2.write('<meta charset="utf-8" />');
    res2.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
    res2.write('<title>Ticket info network error</title>');
    res2.write('<style>');
    res2.write('#ticinfo {');
    //res2.write('width: 70%;');
    res2.write('margin: 3% 3% 3% 3%;');
    res2.write('background-color: #dfdbdb;');
    res2.write('border: thick solid black;');
    res2.write('outline: dashed red;');
    res2.write('}');
    res2.write('#ticback {');
    res2.write('display: block;')
    res2.write('width: 10%;');
    res2.write('margin: 3% 3% 3% 3%;');
    res2.write('padding: 1% 1% 1% 1%;');
    res2.write('color: white;')
    res2.write('background-color: blue;');
    res2.write('border: thin solid black;');
    res2.write('border-radius: 15%;')
    res2.write('text-decoration:none;')
    res2.write('}');
    res2.write('#ticket {');
    res2.write('display: block;')
    res2.write('margin: 3% 3% 3% 3%;');
    res2.write('padding: 1% 1% 1% 1%;');
    res2.write('background-color: white;');
    res2.write('border: thin solid black;');
    res2.write('}');
    //res2.write('');
    res2.write('</style>');
    res2.write('</head>');
    res2.write('<body>');
    res2.write('<div id="ticinfo">');
    res2.write('<a id="ticback" href="/">Back</a>');
    res2.write('<h4>Ticket info network error</h4>');
    res2.write('<p id="ticket">');
    res2.write(e.message);
    res2.write('</p>');
    res2.write('</div>');
    res2.write('</body>');
    res2.write('</html>');
    res2.end();
    //return e.message;
  });
} // end of function GetResults(game, drawnum, res2)

// <==================================== GetResults =====================================>

// <==================================== ValTicket =====================================>
function CheckValTicket(ticnum, res2) {
  // reqString e.g. "http://10.8.194.3:9994/?agent=58&type=2&command=checkval&ticket_number="
  console.log(reqStringVal + ticnum);
  http.get(reqStringVal + ticnum, (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error(`Request Failed.\n Status Code: ${statusCode}`);
    }
    else if (!/^text\/xml/.test(contentType)) {
      error = new Error(`Invalid content-type.\n Expected text/xml but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      // consume response data to free up memory
      res.resume();
      //return error.message;
    }

    res.setEncoding('utf8');
    //let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        //const parsedData = JSON.parse(rawData);
        //console.log(parsedData);
        console.log(`rawData in client http.on('end', ...) event :`)
        console.log(rawData);
        let reply;
        reply = '';
        let errmsg = '';
        parseString(rawData, function (err, result) {
            if (err !== null) {
              //console.log(err.message);
              // "Non-whitespace before first tag.\nLine: 0\nColumn: 1\nChar: ?"
              errmsg = err.message.replace('\n',' ');
              while (errmsg.indexOf('\n') !== -1) {
                errmsg = errmsg.replace('\n',' ');
              }
              //console.log(errmsg);
            }
            else {
              //console.log(result);
              reply = result;
            }
        });
        let sum = '';
        let ticinfo = '';
        if (reply !== '') {
          //console.log('reply:');
          //console.log(reply.response.result[0]);
          if (reply.response.result[0] === '0') {
            sum = reply.response.sum[0];
            //console.log('sum =' + sum);
            if (sum === '-1.00') {
              ticinfo = `Большой выигрыш!!!.`
            }
            else if (sum === '-2.00') {
              ticinfo = `Билет уже выплачен.`
            }
            else if (sum === '-3.00') {
              ticinfo = `Билет выплачен с обменным билетом.`
            }
            else if (sum === '-4.00') {
              ticinfo = `Билет аннулирован.`
            }
            else if (sum === '0.00') {
              ticinfo = `Билет не выиграл.`
            }
            else {
              ticinfo = `Ваш виграш ${sum} грн.`
            }
            console.log(ticinfo);
          }
          else {
            ticinfo = 'Server reply with result: ' + reply.response.result[0];
            console.log(ticinfo);
          }
        }
        else {
          ticinfo = 'XML wrong format:' + errmsg;
        }
        //res2.writeHead(200, { 'Content-Type': 'text/xml' });
        //res2.write(rawData);
        // Content-Type: text/xml; charset=UTF-8
        //res2.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
        //res2.write('Ticket info: ' + ticinfo);
        res2.writeHead(200, { 'Content-Type': 'text/html' });
        res2.write('<!DOCTYPE html>');
        res2.write('<html lang="en">');
        res2.write('<head>');
        res2.write('<meta charset="utf-8" />');
        res2.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
        res2.write('<title>Ticket info</title>');
        res2.write('<style>');
        res2.write('#ticinfo {');
        //res2.write('width: 70%;');
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('background-color: #dfdbdb;');
        res2.write('border: thick solid black;');
        res2.write('outline: dashed red;');
        res2.write('}');
        res2.write('#ticback {');
        res2.write('display: block;')
        res2.write('width: 10%;');
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('padding: 1% 1% 1% 1%;');
        res2.write('color: white;')
        res2.write('background-color: blue;');
        res2.write('border: thin solid black;');
        res2.write('border-radius: 15%;')
        res2.write('text-decoration:none;')
        res2.write('}');
        res2.write('#ticket {');
        res2.write('display: block;')
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('padding: 1% 1% 1% 1%;');
        res2.write('background-color: white;');
        res2.write('border: thin solid black;');
        res2.write('}');
        //res2.write('');
        res2.write('</style>');
        res2.write('</head>');
        res2.write('<body>');
        res2.write('<div id="ticinfo">');
        res2.write('<a id="ticback" href="/">Back</a>');
        res2.write('<p id="ticket">');
        res2.write(ticinfo);
        res2.write('</p>');
        res2.write('</div>');
        res2.write('</body>');
        res2.write('</html>');
        //res2.write('');
      } catch (e) {
        console.error(e.message);
        res2.writeHead(200, { 'Content-Type': 'text/html' });
        res2.write('<!DOCTYPE html>');
        res2.write('<html lang="en">');
        res2.write('<head>');
        res2.write('<meta charset="utf-8" />');
        res2.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
        res2.write('<title>Ticket info processing error</title>');
        res2.write('<style>');
        res2.write('#ticinfo {');
        //res2.write('width: 70%;');
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('background-color: #dfdbdb;');
        res2.write('border: thick solid black;');
        res2.write('outline: dashed red;');
        res2.write('}');
        res2.write('#ticback {');
        res2.write('display: block;')
        res2.write('width: 10%;');
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('padding: 1% 1% 1% 1%;');
        res2.write('color: white;')
        res2.write('background-color: blue;');
        res2.write('border: thin solid black;');
        res2.write('border-radius: 15%;')
        res2.write('text-decoration:none;')
        res2.write('}');
        res2.write('#ticket {');
        res2.write('display: block;')
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('padding: 1% 1% 1% 1%;');
        res2.write('background-color: white;');
        res2.write('border: thin solid black;');
        res2.write('}');
        //res2.write('');
        res2.write('</style>');
        res2.write('</head>');
        res2.write('<body>');
        res2.write('<div id="ticinfo">');
        res2.write('<a id="ticback" href="/">Back</a>');
        res2.write('<h4>Ticket info processing error</h4>');
        res2.write('<p id="ticket">');
        res2.write(e.message);
        res2.write('</p>');
        res2.write('</div>');
        res2.write('</body>');
        res2.write('</html>');
      }
      res2.end();
      //return rawData;
    });
  }).on('error', (e) => {
    // e.message e.g. "connect ETIMEDOUT 10.8.194.3:9993"
    console.error(`Got error: ${e.message}`);
    res2.writeHead(200, { 'Content-Type': 'text/html' });
    res2.write('<!DOCTYPE html>');
    res2.write('<html lang="en">');
    res2.write('<head>');
    res2.write('<meta charset="utf-8" />');
    res2.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
    res2.write('<title>Ticket info network error</title>');
    res2.write('<style>');
    res2.write('#ticinfo {');
    //res2.write('width: 70%;');
    res2.write('margin: 3% 3% 3% 3%;');
    res2.write('background-color: #dfdbdb;');
    res2.write('border: thick solid black;');
    res2.write('outline: dashed red;');
    res2.write('}');
    res2.write('#ticback {');
    res2.write('display: block;')
    res2.write('width: 10%;');
    res2.write('margin: 3% 3% 3% 3%;');
    res2.write('padding: 1% 1% 1% 1%;');
    res2.write('color: white;')
    res2.write('background-color: blue;');
    res2.write('border: thin solid black;');
    res2.write('border-radius: 15%;')
    res2.write('text-decoration:none;')
    res2.write('}');
    res2.write('#ticket {');
    res2.write('display: block;')
    res2.write('margin: 3% 3% 3% 3%;');
    res2.write('padding: 1% 1% 1% 1%;');
    res2.write('background-color: white;');
    res2.write('border: thin solid black;');
    res2.write('}');
    //res2.write('');
    res2.write('</style>');
    res2.write('</head>');
    res2.write('<body>');
    res2.write('<div id="ticinfo">');
    res2.write('<a id="ticback" href="/">Back</a>');
    res2.write('<h4>Ticket info network error</h4>');
    res2.write('<p id="ticket">');
    res2.write(e.message);
    res2.write('</p>');
    res2.write('</div>');
    res2.write('</body>');
    res2.write('</html>');
    res2.end();
    //return e.message;
  });
} // end of function ValTicket(ticnum, res2)

// <==================================== ValTicket =====================================>


// <==================================== BuyTicket =====================================>

function cmbPriceCalcType(cmb, typ, boardPrice) {
  let nums = 0;
  let cmbprice = 0;
  nums = uniqnums(cmb);
  //console.log('cmbPriceCalc nums=' + nums);
  if (cmb.indexOf('10') === -1) {
    if (typ === 'S') {
      cmbprice = cmbprice + boardPrice;
    }
    else if (typ === 'B') {
      if ((nums === 2) || (nums === 3)) cmbprice = cmbprice + boardPrice;
      else cmbprice = 0
    }
    else if (typ === 'A') {
      if ((nums === 2) || (nums === 3)) cmbprice = cmbprice + 2*boardPrice;
      else cmbprice = 0
    }
    else if (typ === 'Y') {
      if (nums === 2) cmbprice = cmbprice + 3*boardPrice;
      else if (nums === 3) cmbprice = cmbprice + 6*boardPrice;
      else cmbprice = 0
    }
  }
  //console.log('cmbPriceCalc cmbprice=' + cmbprice);
  return cmbprice;
}

function uniqnums(cmb) {
  let nums = 1;
  if (cmb[0] !== cmb[1]) nums = nums + 1;
  if (cmb[0] !== cmb[2]) nums = nums + 1;
  if ((nums > 1) && (cmb[1] === cmb[2])) nums = nums - 1;
  return nums;
}

function SysCmbMX(sys) {
  if (sys === 6) return 6;
  else if (sys === 7) return 21;
  else if (sys === 8) return 56;
  else if (sys === 9) return 126;
  else if (sys === 10) return 252;
  else if (sys === 11) return 462;
  else if (sys === 12) return 792;
}

function SysCmbSL(sys) {
  if (sys === 7) return 7;
  else if (sys === 8) return 28;
  else if (sys === 9) return 84;
  else if (sys === 10) return 210;
  else if (sys === 11) return 462;
  else if (sys === 12) return 924;
}

function strCmd(ticreq) {
  // e.g. '?agent=16&type=2&command=pay&date=20201020&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0';
  let strAgent='16';
  let boardKeno = 10;
  let boardSl = 15;
  let boardMx = 10;
  let boardTr = 3;
  // ticreq e.g. '6_1_1_a_10_19_27_34_49_50'
  let reqArr = ticreq.split("_");
  console.log(reqArr);
  // e.g. (10) ['6', '1', '1', 'a', '10', '19', '27', '34', '49', '50']
  //           [game, draws, stake, auto/manual, ...]
  let strSearch = '';
  if (reqArr.length < 3) return '';
  let dtVar = new Date();
  let strYear = dtVar.getFullYear().toString(); // e.g. '2020'
  let numMonth = dtVar.getMonth() + 1;  // (January gives 0)
  let strMonth = numMonth.toString();
  let strDay = dtVar.getDate().toString(); // day or month e.g. '23'.
  if (strMonth.length !== 2) strMonth = '0' + strMonth;
  if (strDay.length !== 2) strDay = '0' + strDay;
  strSearch = '?agent=' + strAgent + '&type=2&command=pay&date=' + strYear+ strMonth + strDay + '&txn_id=' + txn_id.toString();
  strSearch = strSearch + '&game=' + reqArr[0] + '&num_of_draws=' + reqArr[1];
  let i, j, k, n, b;
  let sum = 0;
  if (reqArr[0] === '2') { // Keno.
    if (reqArr.length < 6) return '';
    n = 0;  // num used.
    for (i = 4; i < reqArr.length; i = i + 1) {
      if ((reqArr[i] !== 'a') && (reqArr[i] !== 'm')) {
        n = n + 1;
      }
      else break;
    }
    // '&num_used=10&stake=2&board1=02_11_15_24_33_44_55_66_77_80&board2a=01_12_16_23_34_45_56_65_78_79&sum=84.00&msisdn=380121234567'
    strSearch = strSearch + '&num_used=' + n.toString();
    strSearch = strSearch + '&stake=' + reqArr[2];
    b = 0;
    for (i = 3; i < reqArr.length; i = i + (n + 1)) {
      b = b + 1;
      if (reqArr[i] === 'a') {
        strSearch = strSearch + '&board' + b.toString() + 'a=';
      }
      else {
        strSearch = strSearch + '&board' + b.toString() + '=';
      }
      for (j = 0 ; j < n; j = j + 1) {
        strSearch = strSearch + reqArr[i+ 1 +j];
        if (j !== (n -1)) strSearch = strSearch + '_';
      } 
      sum = sum + boardKeno;
    }
    sum = sum * Number(reqArr[1]) * Number(reqArr[2]); // number of draws and stake;
    strSearch = strSearch + '&sum=' + sum.toString() + '.00';
    strSearch = strSearch + '&msisdn=0'; // very last item.
    return strSearch;
  } // end of Keno.
  else if (reqArr[0] === '4') { // Triyka.
    if (reqArr.length < 7) return '';
    // e.g. (7) ['4', '1', '1', 'S', '0', '1', '2'] or type B or A or Y.
    //           [game, draws, stake, type, ...]
    n = 3;  // num used.
    // '&stake=2&board1=123S&board2=112B&board3=123A&board4=023Y&sum=60.00&msisdn=380503332211'
    strSearch = strSearch + '&stake=' + reqArr[2];
    b = 0;
    let strCmb = ['0', '0' , '0']
    for (i = 3; i < reqArr.length; i = i + (n + 1)) {
      b = b + 1;
      strSearch = strSearch + '&board' + b.toString() + '=';
      strSearch = strSearch + reqArr[i+1] + reqArr[i+2] + reqArr[i+3] + reqArr[i];
      strCmb[0] = reqArr[i+1];
      strCmb[1] = reqArr[i+2];
      strCmb[2] = reqArr[i+3];
      sum = sum + cmbPriceCalcType(strCmb, reqArr[i], boardTr);
    }
    sum = sum * Number(reqArr[1]) * Number(reqArr[2]); // number of draws and stake;
    strSearch = strSearch + '&sum=' + sum.toString() + '.00';
    strSearch = strSearch + '&msisdn=0'; // very last item.
    return strSearch;
  } // end of Triyka.
  else if (reqArr[0] === '5') { // Maxima.
    if (reqArr.length < 9) return '';
    if ((reqArr[3] === 'sa') || (reqArr[3] === 'sm')) { // system.
      k = 0; // system number.
      for (i = 4; i < reqArr.length; i = i + 1) {
        k = k + 1;
      }
      strSearch = strSearch + '&system=' + k.toString();
      if (reqArr[3] === 'sa') {
        strSearch = strSearch + '&board1a=';
      }
      else {
        strSearch = strSearch + '&board1=';
      }
      for (i = 4; i < reqArr.length; i = i + 1) {
        strSearch = strSearch + reqArr[i];
        if (i !== (reqArr.length - 1)) strSearch = strSearch + '_';
      }
      sum = SysCmbMX(k) * boardMx;
    } // end of system.
    else { // not system.
      k = 0;
      for (i = 3; i < reqArr.length; i = i + 6) {
        k = k + 1;
        if ((reqArr[i] === 'a') || (reqArr[i] === 'sa')) {
          strSearch = strSearch + '&board' + k.toString() + 'a=';
        }
        else {
          strSearch = strSearch + '&board' + k.toString() + '=';
        }
        strSearch = strSearch + reqArr[i+1] + '_' + reqArr[i+2] + '_' + reqArr[i+3] + '_';
        strSearch = strSearch + reqArr[i+4] + '_' + reqArr[i+5];
        sum = sum + boardMx;
      }
    } // end of not system.
    sum = sum * Number(reqArr[1]); // number of draws.
    strSearch = strSearch + '&sum=' + sum.toString() + '.00';
    strSearch = strSearch + '&msisdn=0'; // very last item.
    return strSearch;
  } // end of Maxima
  else if (reqArr[0] === '6')  { // Super Loto
    if (reqArr.length < 10) return '';
    if ((reqArr[3] === 'sa') || (reqArr[3] === 'sm')) { // system.
      k = 0; // system number.
      for (i = 4; i < reqArr.length; i = i + 1) {
        k = k + 1;
      }
      strSearch = strSearch + '&system=' + k.toString();
      if (reqArr[3] === 'sa') {
        strSearch = strSearch + '&board1a=';
      }
      else {
        strSearch = strSearch + '&board1=';
      }
      for (i = 4; i < reqArr.length; i = i + 1) {
        strSearch = strSearch + reqArr[i];
        if (i !== (reqArr.length - 1)) strSearch = strSearch + '_';
      }
      sum = SysCmbSL(k)*boardSl;
    } // end of system.
    else { // not system.
      k = 0;
      for (i = 3; i < reqArr.length; i = i + 7) {
        k = k + 1;
        if ((reqArr[i] === 'a') || (reqArr[i] === 'sa')) {
          strSearch = strSearch + '&board' + k.toString() + 'a=';
        }
        else {
          strSearch = strSearch + '&board' + k.toString() + '=';
        }
        strSearch = strSearch + reqArr[i+1] + '_' + reqArr[i+2] + '_' + reqArr[i+3] + '_';
        strSearch = strSearch + reqArr[i+4] + '_' + reqArr[i+5] + '_' + reqArr[i+6];
        sum = sum + boardSl;
      }
    } // end of not system.
    sum = sum * Number(reqArr[1]); // number of draws.
    strSearch = strSearch + '&sum=' + sum.toString() + '.00';
    strSearch = strSearch + '&msisdn=0'; // very last item.
    return strSearch;
  } // end of Super Loto.
} // end of function strCmd(ticreq).

function BuyTicket(ticreq, res2) {
  console.log('ticreq=|' + ticreq + '|');
  let reqStringPay = urlpay + strCmd(ticreq);
  //let reqStringPay; //= urlpay + '?agent=65&type=2&command=pay&date=20200808&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0';
  //reqStringPay = urlpay + '?agent=16&type=2&command=pay&date=20201020&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0';
  console.log('|'+reqStringPay + '|')
  txn_id = txn_id + 1;
  //let result = -999;
  http.get(reqStringPay, (res) => { // reqStringPay + ticreq for manual non-auto.
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error(`Request Failed.\n Status Code: ${statusCode}`);
    }
    else if (!/^text\/xml/.test(contentType)) {
      error = new Error(`Invalid content-type.\n Expected text/xml but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      // consume response data to free up memory
      res.resume();
      //return error.message;
      //result = -1;
    }

    res.setEncoding('utf8');
    //let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        //let dtVar = new Date();
        //const parsedData = JSON.parse(rawData);
        //console.log(parsedData);
        console.log(`rawData in client http.on('end', ...) event :`)
        console.log(rawData);
        let reply;
        reply = '';
        let errmsg = '';
        parseString(rawData, function (err, result) {
            if (err !== null) {
              //console.log(err.message);
              // "Non-whitespace before first tag.\nLine: 0\nColumn: 1\nChar: ?"
              errmsg = err.message.replace('\n',' ');
              while (errmsg.indexOf('\n') !== -1) {
                errmsg = errmsg.replace('\n',' ');
              }
              //console.log(errmsg);
            }
            else {
              //console.log(result);
              reply = result;
            }
        });
        //let sum = '';
        let ticinfo = '';
        let decrInfo = '';
        if (reply !== '') {
          //console.log('reply:');
          //console.log(reply.response.result[0]);
          if (reply.response.result[0] === '0') {
            //sum = reply.response.sum[0];
            //console.log('sum =' + sum);
            let game = '';
            if (reply.response.ticket[0].game[0] === '2') game = 'Кено';
            else if (reply.response.ticket[0].game[0] === '4') game = 'Трійка';
            else if (reply.response.ticket[0].game[0] === '5') game = 'Максима';
            else if (reply.response.ticket[0].game[0] === '6') game = 'Супер Лото';
            let type1 = '', type1a = '', type2 = '', type2a = '', type3 = '', type3a = '', type4 = '', type4a = '';
            let type5 = '', type5a = '', type6 = '', type6a = '', type7 = '', type8 = '', type9 = '', type10 = '';
            let b1 = '', b1a = '', b2 = '', b2a = '', b3 = '', b3a = '', b4 = '', b4a = '', b5 = '', b5a = '', b6 = '', b6a = '';
            let b7 = '', b8 = '', b9 = '', b10 = '';
            if (reply.response.ticket[0].board1 !== undefined) {
              b1 = reply.response.ticket[0].board1[0];
              if (game ==='Трійка') { // b1 e.g. '000S'
                if (b1[3] === 'S') type1 = 'Точний';
                else if (b1[3] === 'B') type1 = 'Довільний';
                else if (b1[3] === 'A') type1 = 'Точний + Довільний';
                else if (b1[3] === 'Y') type1 = 'Система';
                b1 = b1.substring(0,3);
              }
            }
            if (reply.response.ticket[0].board1a !== undefined) {
              b1a = reply.response.ticket[0].board1a[0];
              type1a = 'АВТО'
            }
            if (reply.response.ticket[0].board2 !== undefined) {
              b2 = reply.response.ticket[0].board2[0];
              if (game ==='Трійка') {
                if (b2[3] === 'S') type2 = 'Точний';
                else if (b2[3] === 'B') type2 = 'Довільний';
                else if (b2[3] === 'A') type2 = 'Точний + Довільний';
                else if (b2[3] === 'Y') type2 = 'Система';
                b2 = b2.substring(0,3);
              }
            }
            if (reply.response.ticket[0].board2a !== undefined) {
              b2a = reply.response.ticket[0].board2a[0];
              type2a = 'АВТО'
            }
            if (reply.response.ticket[0].board3 !== undefined) {
              b3 = reply.response.ticket[0].board3[0];
              if (game ==='Трійка') {
                if (b3[3] === 'S') type3 = 'Точний';
                else if (b3[3] === 'B') type3 = 'Довільний';
                else if (b3[3] === 'A') type3 = 'Точний + Довільний';
                else if (b3[3] === 'Y') type3 = 'Система';
                b3 = b3.substring(0,3);
              }
            }
            if (reply.response.ticket[0].board3a !== undefined) {
              b3a = reply.response.ticket[0].board3a[0];
              type3a = 'АВТО'
            }
            if (reply.response.ticket[0].board4 !== undefined) {
              b4 = reply.response.ticket[0].board4[0];
              if (game ==='Трійка') {
                if (b4[3] === 'S') type4 = 'Точний';
                else if (b4[3] === 'B') type4 = 'Довільний';
                else if (b4[3] === 'A') type4 = 'Точний + Довільний';
                else if (b4[3] === 'Y') type4 = 'Система';
                b4 = b4.substring(0,3);
              }
            }
            if (reply.response.ticket[0].board4a !== undefined) {
              b4a = reply.response.ticket[0].board4a[0];
              type4a = 'АВТО'
            }
            if (reply.response.ticket[0].board5 !== undefined) {
              b5 = reply.response.ticket[0].board5[0];
              if (game ==='Трійка') {
                if (b5[3] === 'S') type5 = 'Точний';
                else if (b5[3] === 'B') type5 = 'Довільний';
                else if (b5[3] === 'A') type5 = 'Точний + Довільний';
                else if (b5[3] === 'Y') type5 = 'Система';
                b5 = b5.substring(0,3);
              }
            }
            if (reply.response.ticket[0].board5a !== undefined) {
              b5a = reply.response.ticket[0].board5a[0];
              type5a = 'АВТО'
            }
            if (reply.response.ticket[0].board6 !== undefined) {
              b6 = reply.response.ticket[0].board6[0];
              if (game ==='Трійка') {
                if (b6[3] === 'S') type6 = 'Точний';
                else if (b6[3] === 'B') type6 = 'Довільний';
                else if (b6[3] === 'A') type6 = 'Точний + Довільний';
                else if (b6[3] === 'Y') type6 = 'Система';
                b6 = b6.substring(0,3);
              }
            }
            if (reply.response.ticket[0].board6a !== undefined) {
              b6a = reply.response.ticket[0].board6a[0];
              type6a = 'АВТО'
            }
            if (reply.response.ticket[0].board7 !== undefined) {
              b7 = reply.response.ticket[0].board7[0];
              if (game ==='Трійка') {
                if (b7[3] === 'S') type7 = 'Точний';
                else if (b7[3] === 'B') type7 = 'Довільний';
                else if (b7[3] === 'A') type7 = 'Точний + Довільний';
                else if (b7[3] === 'Y') type7 = 'Система';
                b7 = b7.substring(0,3);
              }
            }
            if (reply.response.ticket[0].board8 !== undefined) {
              b8 = reply.response.ticket[0].board8[0];
              if (game ==='Трійка') {
                if (b8[3] === 'S') type8 = 'Точний';
                else if (b8[3] === 'B') type8 = 'Довільний';
                else if (b8[3] === 'A') type8 = 'Точний + Довільний';
                else if (b8[3] === 'Y') type8 = 'Система';
                b8 = b8.substring(0,3);
              }
            }
            if (reply.response.ticket[0].board9 !== undefined) {
              b9 = reply.response.ticket[0].board9[0];
              if (game ==='Трійка') {
                if (b9[3] === 'S') type9 = 'Точний';
                else if (b9[3] === 'B') type9 = 'Довільний';
                else if (b9[3] === 'A') type9 = 'Точний + Довільний';
                else if (b9[3] === 'Y') type9 = 'Система';
                b9 = b9.substring(0,3);
              }
            }
            if (reply.response.ticket[0].board10 !== undefined) {
              b10 = reply.response.ticket[0].board10[0];
              if (game ==='Трійка') {
                if (b10[3] === 'S') type10 = 'Точний';
                else if (b10[3] === 'B') type10 = 'Довільний';
                else if (b10[3] === 'A') type10 = 'Точний + Довільний';
                else if (b10[3] === 'Y') type10 = 'Система';
                b10 = b10.substring(0,3);
              }
            }
            ticinfo = ticinfo + '<li>Україньска Національна Лотерея</li>';
            ticinfo = ticinfo + '<li>Дата: ' + reply.response.ticket[0].date[0] + '</li>';
            ticinfo = ticinfo + '<li>Час: '  + reply.response.ticket[0].time[0] + '</li>';
            ticinfo = ticinfo + '<li>Гра: '  + game + '</li>';
            if (reply.response.ticket[0].num_of_draws !== undefined) {
              ticinfo = ticinfo + '<li>Розіграшей: ' + reply.response.ticket[0].num_of_draws[0] + '</li>';
            }
            if (reply.response.ticket[0].first_draw !== undefined) {
              ticinfo = ticinfo + '<li>Розіграш: ' + reply.response.ticket[0].first_draw[0] + '</li>';
            }
            else {
              ticinfo = ticinfo + '<li>Перший розіграш: ' + reply.response.ticket[0].date[0] + '</li>';
            }
            ticinfo = ticinfo + '<li>Комбінації:</li>';
            ticinfo = ticinfo + '<li>------------------------------------------------------</li>';
            if (reply.response.ticket[0].board1 !== undefined) ticinfo = ticinfo + '<li>'  + b1 + ' ' + type1 + '</li>';
            if (reply.response.ticket[0].board1a !== undefined)ticinfo = ticinfo + '<li>'  + b1a + ' ' + type1a + '</li>'
            if (reply.response.ticket[0].board2 !== undefined) ticinfo = ticinfo + '<li>'  + b2 + ' ' + type2 + '</li>';
            if (reply.response.ticket[0].board2a !== undefined)ticinfo = ticinfo + '<li>'  + b2a + ' ' + type2a + '</li>'
            if (reply.response.ticket[0].board3 !== undefined) ticinfo = ticinfo + '<li>'  + b3 + ' ' + type3 + '</li>';
            if (reply.response.ticket[0].board3a !== undefined)ticinfo = ticinfo + '<li>'  + b3a + ' ' + type3a + '</li>'
            if (reply.response.ticket[0].board4 !== undefined) ticinfo = ticinfo + '<li>'  + b4 + ' ' + type4 + '</li>';
            if (reply.response.ticket[0].board4a !== undefined)ticinfo = ticinfo + '<li>'  + b4a + ' ' + type4a + '</li>'
            if (reply.response.ticket[0].board5 !== undefined) ticinfo = ticinfo + '<li>'  + b5 + ' ' + type5 + '</li>';
            if (reply.response.ticket[0].board5a !== undefined)ticinfo = ticinfo + '<li>'  + b5a + ' ' + type5a + '</li>'
            if (reply.response.ticket[0].board6 !== undefined) ticinfo = ticinfo + '<li>'  + b6 + ' ' + type6 + '</li>';
            if (reply.response.ticket[0].board6a !== undefined)ticinfo = ticinfo + '<li>'  + b6a + ' ' + type6a + '</li>'
            if (reply.response.ticket[0].board7 !== undefined) ticinfo = ticinfo + '<li>'  + b7 + ' ' + type7 + '</li>';
            if (reply.response.ticket[0].board8 !== undefined) ticinfo = ticinfo + '<li>'  + b8 + ' ' + type8 + '</li>';
            if (reply.response.ticket[0].board9 !== undefined) ticinfo = ticinfo + '<li>'  + b9 + ' ' + type9 + '</li>';
            if (reply.response.ticket[0].board10 !== undefined) ticinfo = ticinfo + '<li>'  + b10 + ' ' + type10 + '</li>';
            ticinfo = ticinfo + '<li>------------------------------------------------------</li>';
            if (reply.response.ticket[0].stake !== undefined) {
              ticinfo = ticinfo + '<li>Ставка: ' + reply.response.ticket[0].stake[0] + '</li>';
            }
            ticinfo = ticinfo + '<li>Сума: '  + reply.response.ticket[0].sum[0] + '</li>';
            decrInfo = decrEx(reply.response.ticket[0].gguard[0], reply.response.ticket[0].number[0]);
            //console.log(decrInfo);
            ticinfo = ticinfo + '<li>Білет: '  + decrInfo + '</li>'
            //ticinfo = ticinfo + '<li>Номер білета: '  + reply.response.ticket[0].number[0] + '</li>';
            //ticinfo = ticinfo + '<li>Код: '  + reply.response.ticket[0].gguard[0] + '</li>';
            ticinfo = ticinfo + '<li>txn_id: '  + reply.response.txn_id[0] + '</li>';
            console.log(ticinfo);
          }
          else {
            ticinfo = 'Server reply with result: ' + reply.response.result[0];
            console.log(ticinfo);
            if (ticinfo === 'Server reply with result: 777') ticinfo = 'Ожидайте ответа сервера...';
            //result = Number(reply.response.result[0]);
          }
        }
        else {
          ticinfo = 'XML wrong format:' + errmsg;
          //result = -2
        }
        //if (result !== 777) { // NB!!! browser will reload page if no reply in 60 sec.
        //}
        //res2.writeHead(200, { 'Content-Type': 'text/xml' });
        //res2.write(rawData);
        // Content-Type: text/xml; charset=UTF-8
        //res2.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
        //res2.write('Ticket info: ' + ticinfo);
        res2.writeHead(200, { 'Content-Type': 'text/html' });
        res2.write('<!DOCTYPE html>');
        res2.write('<html lang="en">');
        res2.write('<head>');
        res2.write('<meta charset="utf-8" />');
        res2.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
        res2.write('<title>Ticket info</title>');
        res2.write('<style>');
        res2.write('#ticinfo {');
        //res2.write('width: 70%;');
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('background-color: #dfdbdb;');
        res2.write('border: thick solid black;');
        res2.write('outline: dashed red;');
        res2.write('}');
        res2.write('#ticback {');
        res2.write('display: block;')
        res2.write('width: 10%;');
        res2.write('margin: 1% 3% 1% 3%;');
        res2.write('padding: 1% 1% 1% 1%;');
        res2.write('color: white;')
        res2.write('background-color: blue;');
        res2.write('border: thin solid black;');
        res2.write('border-radius: 15%;')
        res2.write('text-decoration:none;')
        res2.write('}');
        res2.write('#tichdr {');
        res2.write('margin: 1% 3% 1% 3%;');
        //res2.write('padding: 1% 1% 1% 1%;');
        res2.write('}');
        res2.write('#ticket {');
        res2.write('display: block;')
        res2.write('margin: 1% 3% 1% 3%;');
        res2.write('padding: 1% 1% 1% 1%;');
        res2.write('background-color: white;');
        res2.write('border: thin solid black;');
        res2.write('}');
        //res2.write('');
        res2.write('</style>');
        res2.write('</head>');
        res2.write('<body>');
        res2.write('<div id="ticinfo">');
        res2.write('<a id="ticback" href="/">Back</a>');
        res2.write('<h3 id="tichdr">Запрос на покупку билета.</h3>');
        res2.write('<ul id="ticket">');
        res2.write(ticinfo);
        res2.write('</ul>');
        res2.write('</div>');
        res2.write('<script>');
        res2.write("console.log('page body script started');");
        res2.write("console.log(document.getElementById('ticket').innerHTML);");
        res2.write("if (document.getElementById('ticket').innerHTML === 'Ожидайте ответа сервера...') document.location.reload();");
        res2.write('</script>');
        res2.write('</body>');
        res2.write('</html>');
        //res2.write('');
        res2.end();
        //return result;
      } catch (e) {
        console.error(e.message);
        res2.writeHead(200, { 'Content-Type': 'text/html' });
        res2.write('<!DOCTYPE html>');
        res2.write('<html lang="en">');
        res2.write('<head>');
        res2.write('<meta charset="utf-8" />');
        res2.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
        res2.write('<title>Ticket info processing error</title>');
        res2.write('<style>');
        res2.write('#ticinfo {');
        //res2.write('width: 70%;');
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('background-color: #dfdbdb;');
        res2.write('border: thick solid black;');
        res2.write('outline: dashed red;');
        res2.write('}');
        res2.write('#ticback {');
        res2.write('display: block;')
        res2.write('width: 10%;');
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('padding: 1% 1% 1% 1%;');
        res2.write('color: white;')
        res2.write('background-color: blue;');
        res2.write('border: thin solid black;');
        res2.write('border-radius: 15%;')
        res2.write('text-decoration:none;')
        res2.write('}');
        res2.write('#ticket {');
        res2.write('display: block;')
        res2.write('margin: 3% 3% 3% 3%;');
        res2.write('padding: 1% 1% 1% 1%;');
        res2.write('background-color: white;');
        res2.write('border: thin solid black;');
        res2.write('}');
        //res2.write('');
        res2.write('</style>');
        res2.write('</head>');
        res2.write('<body>');
        res2.write('<div id="ticinfo">');
        res2.write('<a id="ticback" href="/">Back</a>');
        res2.write('<h4>Ticket info processing error</h4>');
        res2.write('<p id="ticket">');
        res2.write(e.message);
        res2.write('</p>');
        res2.write('</div>');
        res2.write('</body>');
        res2.write('</html>');
        res2.end();
        //return -3;
      }
      //res2.end();
      //return rawData;
    }); // end of http.get(...)
  }).on('error', (e) => {  // end of http.get(...) begin http.on('error', ...)
    // e.message e.g. "connect ETIMEDOUT 10.8.194.3:9993"
    console.error(`Got error: ${e.message}`);
    //if (!e.message.includes('self signed certificate')) {
    //}
    res2.writeHead(200, { 'Content-Type': 'text/html' });
    res2.write('<!DOCTYPE html>');
    res2.write('<html lang="en">');
    res2.write('<head>');
    res2.write('<meta charset="utf-8" />');
    res2.write('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
    res2.write('<title>Ticket info network error</title>');
    res2.write('<style>');
    res2.write('#ticinfo {');
    //res2.write('width: 70%;');
    res2.write('margin: 3% 3% 3% 3%;');
    res2.write('background-color: #dfdbdb;');
    res2.write('border: thick solid black;');
    res2.write('outline: dashed red;');
    res2.write('}');
    res2.write('#ticback {');
    res2.write('display: block;')
    res2.write('width: 10%;');
    res2.write('margin: 3% 3% 3% 3%;');
    res2.write('padding: 1% 1% 1% 1%;');
    res2.write('color: white;')
    res2.write('background-color: blue;');
    res2.write('border: thin solid black;');
    res2.write('border-radius: 15%;')
    res2.write('text-decoration:none;')
    res2.write('}');
    res2.write('#ticket {');
    res2.write('display: block;')
    res2.write('margin: 3% 3% 3% 3%;');
    res2.write('padding: 1% 1% 1% 1%;');
    res2.write('background-color: white;');
    res2.write('border: thin solid black;');
    res2.write('}');
    //res2.write('');
    res2.write('</style>');
    res2.write('</head>');
    res2.write('<body>');
    res2.write('<div id="ticinfo">');
    res2.write('<a id="ticback" href="/">Back</a>');
    res2.write('<h4>Ticket info network error</h4>');
    res2.write('<p id="ticket">');
    res2.write(e.message);
    res2.write('</p>');
    res2.write('</div>');
    res2.write('</body>');
    res2.write('</html>');
    res2.end();
    //return e.message;
    //return -4;
  }); // end of http.on('error', ...) network error timeout, certificate....
  //return -8888;
} // end of function BuyTicket(ticnum, res2)

function decrEx(strGGuardEnc, strTicEnc) {
  var strOut;
  var strGguardIn, strNumberIn; // var strJulian;
  var strGGuard, strTicNum, strCheckDigits;
  var strArr; // intVar, i;
  var strGGuardArr, strJulianArr, strTicNumArr, strCheckDigitsArr;

  //console.log(`input: ${strGGuardEnc} ${strInEnc}`);

  strOut="";
  if (typeof(strGGuardEnc) != "string") return "ERROR2";
  if (typeof(strTicEnc) != "string") return "ERROR3";

  // e.g. strGGuardEnc="123456" and strTicEnc = "123-12345678-1234567"
  strGguardIn = String(strGGuardEnc);
  strNumberIn = String(strTicEnc);
  if (strGguardIn.length !== 6)  return "ERROR2";
  if (strNumberIn.length !== 20) return "ERROR3";

  //intVar = Number(strGguardIn);
  //console.log(intVar + " " + typeof(intVar));
  if (! Number.isInteger(Number(strGguardIn))) return "ERROR2"; 
  strArr = strNumberIn.split("-");
  if (strArr.length !== 3) return "ERROR3";
  if (strArr[0].length !== 3) return "ERROR3";
  if (strArr[1].length !== 8) return "ERROR3";
  if (strArr[2].length !== 7) return "ERROR3";
  if (! Number.isInteger(Number(strArr[0]))) return "ERROR3"; 
  if (! Number.isInteger(Number(strArr[1]))) return "ERROR3"; 
  if (! Number.isInteger(Number(strArr[2]))) return "ERROR3"; 

  //var strGGuardArr, strJulianArr, strTicNumArr, strChcekDigitsArr;
  strGGuardArr = strGguardIn.split("");
  strJulianArr = strArr[0].split("");
  strTicNumArr = strArr[1].split("");
  strCheckDigitsArr = strArr[2].split("");

  strGGuard = addon.unld(strGGuardArr[0], strGGuardArr[1], strGGuardArr[2], strGGuardArr[3], strGGuardArr[4], strGGuardArr[5], "G", "G", strJulianArr[0], strJulianArr[1], strJulianArr[2]); // gGuard.
  //console.log('Return string:', strGGuard + " typeof: " + typeof(strGGuard)); // gguard.
  strTicNum = addon.unld(strTicNumArr[0], strTicNumArr[1], strTicNumArr[2], strTicNumArr[3], strTicNumArr[4], strTicNumArr[5], strTicNumArr[6], strTicNumArr[7], strJulianArr[0], strJulianArr[1], strJulianArr[2]); // external number.
  //console.log('Return string:', strTicNum + " typeof: " + typeof(strTicNum)); // TicNum external number.
  strCheckDigits = addon.unld(strCheckDigitsArr[0], strCheckDigitsArr[1], strCheckDigitsArr[2], strCheckDigitsArr[3], strCheckDigitsArr[4], strCheckDigitsArr[5], strCheckDigitsArr[6], "D", strJulianArr[0], strJulianArr[1], strJulianArr[2]); // check Digits.
  //console.log('Return string:', strCheckDigits + " typeof: " + typeof(strCheckDigits)); // gguard, num, check.
  strOut = strGGuard + " " + strArr[0] + "-" + strTicNum + "-" + strCheckDigits;
  //console.log(`output: ${strOut}`);
  //strArr = strIn.split("-");
  //strOut = strArr[2] + "-" + strArr[1] + "-" + strArr[0];
  
  return strOut;
} // end of function decrEx(strGGuardEnc, strInEnc).

// <==================================== BuyTicket =====================================>
