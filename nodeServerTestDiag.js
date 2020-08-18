'use strict';
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

  >node ..\nodeServerTestDiag.js

*/

let typeProj =  ''; // 'build';
let dirName = 'build'; // React build dir as root dir.
//let dirName = ''; // root dir.
//let methodType = 'get'; // 'post' or 'get' for secure server.
//let formNameIni = 'submitFormAK-Ini';
//let formName = 'submitFormAK';
//let dirName = 'arch'; // root dir.
let formNameIni = 'index.html';
//let formNameIni = 'indexForm.html';
//let formName = 'submitFormAK';

const http = require('http');
const urlval = 'http://10.8.194.3:9994/'; // project WinTicsCheckNoSslTEST new.
let reqString = urlval + '?agent=58&type=2&command=checkval&ticket_number=225-13818091-1101234'; // + search;
let rawData = '';

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
      if (req.url.indexOf('/formAK?') >= 0) {
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
        GetTicket('225-13818091-1101234');
        console.log('rawData:')
        console.log(rawData);
        res.write(rawData);
      } // end of if (req.url.indexOf('/formAK?') >= 0)
      else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(`Form request submitted by GET. Action URL with search: ${req.url}`);
      }
      return res.end();
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
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(`Form request submitted by POST. Action URL is ${req.url} with search as body: \r\n${body}`);
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

async function GetTicket(ticnum) {
  http.get(reqString, (res) => {
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
        console.log(rawData);
      } catch (e) {
        console.error(e.message);
      }
      //return rawData;
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
    //return e.message;
  });
}