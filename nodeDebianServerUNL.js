'use strict'; // is unnecessary inside of modules.
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

let typeProj =  ''; // 'build';
let dirName = 'build'; // React build dir as root dir.
//let dirName = ''; // root dir.
//let methodType = 'get'; // 'post' or 'get' for secure server.
//let formNameIni = 'submitFormAK-Ini';
//let formName = 'submitFormAK';
//let dirName = 'arch'; // root dir
let formNameIni = 'index.html';
//let formNameIni = 'indexForm.html';

// Using special formName  /formAKchk?q=123-12345678-1234567 /formAKval?q=123-12345678-1234567 or /formAKpay?q=xxx
const addon = require('./build/addon');
const http = require('http');
const urlval = 'http://10.8.194.3:9994/'; // project WinTicsCheckNoSslTEST new at 'http://10.8.194.3:9994/'
//let reqString = urlval + '?agent=58&type=2&command=checkval&ticket_number=225-13818091-1101234';
let reqString = urlval + '?agent=58&type=2&command=checkval&ticket_number='; // + search;
const urlpay = 'http://10.8.194.3:10064/'; // project UnlCashExTEST ver. 3.8
let reqStringPay; //= urlpay + '?agent=65&type=2&command=pay&date=20200808&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0';
let txn_id = 10000000;

let rawData = '';

const parseString = require('xml2js').parseString;
const https = require('https');
const urlLegacy = require('url'); // Legacy url module.
//const { URL } = require('url'); // ES6 url module
const fs = require('fs');
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

///*
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
//*/

//const server = http.createServer((req, res) => { // request is <http.IncomingMessage>, response is <http.ServerResponse> ...}
const server = https.createServer(options);
//const server = http.createServer();

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
      else if (objUrl.pathname.endsWith('.jpg') || objUrl.pathname.endsWith('.jpeg')) {
        contType = 'image/jpeg';
      }
      else if (objUrl.pathname.endsWith('.htm') || objUrl.pathname.endsWith('.html')) {
        contType = 'text/html';
      }
      else if (objUrl.pathname !== '/') {
        contType = 'application/octet-stream';
      }
      console.log('contType: [' + contType + '] <==============================');
      console.log('objUrl.pathname: ' + objUrl.pathname);
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
        //objUrl.search is e.g. "?q=123-12345678-1234567"
        ticreq = objUrl.search.slice(objUrl.search.indexOf('=') + 1);
        rawData = '';
        BuyTicket(ticreq, res);
      }
      else {
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
      }
      //return res.end();
    }
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
  console.log(`Server running and listening at https://${hostname}:${port}/ ` + dtVar.getSeconds() + "." + dtVar.getMilliseconds()); // ${expression} is place holders in template literal enclosed by the back-tick (` `) (grave accent) characters.
});

dtVar = new Date();
console.log('End Serer main PROGAM path after server.listen(port, hostname, callback) ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

// <==================================== ValTicket =====================================>
function CheckValTicket(ticnum, res2) {
  // reqString e.g. "http://10.8.194.3:9994/?agent=58&type=2&command=checkval&ticket_number="
  console.log(reqString + ticnum);
  http.get(reqString + ticnum, (res) => {
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
function BuyTicket(ticreq, res2) {
  console.log(reqStringPay + ticreq);
  reqStringPay = urlpay + '?agent=65&type=2&command=pay&date=20200808&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0';
  txn_id = txn_id + 1;
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
    }

    res.setEncoding('utf8');
    //let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        let dtVar = new Date();
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
            ticinfo = ticinfo + '<li>Україньска Національна Лотерея</li>';
            ticinfo = ticinfo + '<li>Дата: ' + reply.response.ticket[0].date[0] + '</li>';
            ticinfo = ticinfo + '<li>Час: '  + reply.response.ticket[0].time[0] + '</li>';
            ticinfo = ticinfo + '<li>Комбінация: '  + reply.response.ticket[0].board1a[0] + '</li>'
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
        res2.write('<h3 id="tichdr">Ваш билет зарегистрирован: ' + dtVar.toLocaleString() + '</h3>');
        res2.write('<ul id="ticket">');
        res2.write(ticinfo);
        res2.write('</ul>');
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
} // end of function BuyTicket(ticnum, res2)

function decrEx(strGGuardEnc, strTicEnc) {
  var strOut;
  var strGguardIn, strNumberIn; // var strJulian;
  var strReturn, strGGuard, strTicNum, strCheckDigits;
  var strArr; // intVar, i;
  var strGGuardArr, strJulianArr, strTicNumArr, strCheckDigitsArr;

  //console.log(`input: ${strGGuardEnc} ${strInEnc}`);

  strOut="";
  if (typeof(strGGuardEnc) != "string") return "ERROR2";
  if (typeof(strTicEnc) != "string") return "ERROR3";

  // e.g. strGGuardEnc="123456" and strTicEnc = "123-12345678-1234567"
  strGguardIn = String(strGGuardEnc);
  strNumberIn = String(strTicEnc);
  if (strGguardIn.length != 6)  return "ERROR2";
  if (strNumberIn.length != 20) return "ERROR3";

  //intVar = Number(strGguardIn);
  //console.log(intVar + " " + typeof(intVar));
  if (! Number.isInteger(Number(strGguardIn))) return "ERROR2"; 
  strArr = strNumberIn.split("-");
  if (strArr.length != 3) return "ERROR3";
  if (strArr[0].length != 3) return "ERROR3";
  if (strArr[1].length != 8) return "ERROR3";
  if (strArr[2].length != 7) return "ERROR3";
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
  
  ExitFunction:
  return strOut;

} // end of function decrEx(strGGuardEnc, strInEnc).