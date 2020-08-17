'use strict';
const http = require('http');
const urlLegacy = require('url'); // Legacy url module.
//const { URL } = require('url'); // ES6 url module
const fs = require('fs');

let dtVar = new Date();
console.log('Client starts ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
/*
//var envObj = process.env;
for (let prop in process.env) {
  //console.log(prop + ": " + process.env[prop]);
}
dtVar = new Date();
console.log('==================================== ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
*/

dtVar = new Date();
console.log('Before http.get() ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());

const urlval = 'http://10.8.194.3:9994/'; // project WinTicsCheckNoSslTEST new.
let reqString = urlval + '?agent=58&type=2&command=checkval&ticket_number=225-13818091-1101234'; // + search;

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
    return;
  }

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      //const parsedData = JSON.parse(rawData);
      //console.log(parsedData);
      console.log(rawData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});

dtVar = new Date();
console.log('End Client main PROGAM path after http.get(port, hostname, callback) ' + dtVar.getSeconds() + "." + dtVar.getMilliseconds());
