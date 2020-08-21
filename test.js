'use strict';

const parseString = require('xml2js').parseString;
let xml = "<root>Hello xml2js!</root>"
parseString(xml, function (err, result) {
    console.log(result);
});

/*
try {
  throw new Error('I crashed!');
}
catch(e) {
  console.log(e);
  let ttt1 = e;
  let ttt2 = e.toString();
  let ttt3 = ttt2 && ttt2; // e1 && e2 If e1 can be converted to true, returns e2; else, returns e1.
  console.log(ttt3);
}
console.log('end of program');

//const iframe = document.getElementById('glm')
//iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20333.535337350597!2d30.61040335!3d50.42821145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sua!4v1567495244815!5m2!1sen!2sua');
*/

/*
class My_Event_Target_class extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() { return this._secret; }
};

let myEventTarget = new My_Event_Target_class(5);
let value = myEventTarget.secret;  // == 5
console.log(value);

myEventTarget.addEventListener("foo", function(e) {
  this._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 }); // Name of the event ("foo") and CustomEventInit dictionary, having
// the following fields:
// "detail", optional and defaulting to null, of type any, that is an event-dependent value associated with the event.
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // == 7
console.log(newValue);
*/

/*
let state = {
      uname:
        'Alex Raven',
      essay:
        'Please write an essay about your favorite DOM element.',
      fruit:
        ['Coconut','Lime'],
      checkOption:
        ['option1'],
      radioOption:
        'option1'
    }; // very initial value.

let urlEncodedData = "";
for (let prop in state) {
  //console.log(name);
  //console.log(state[name]);
  if (Array.isArray(state[prop])) {
    // state[prop].forEach(function(item, index, array) {});
    for (let item of state[prop]) {
      //console.log(item, index);
      console.log(prop + '=' + item);
      if (urlEncodedData === "") {
        urlEncodedData = encodeURIComponent(prop) + '=' + encodeURIComponent(item).replace(/%20/g, '+');
      }
      else {
        urlEncodedData = urlEncodedData + '&' + encodeURIComponent(prop) + '=' + encodeURIComponent(item).replace(/%20/g, '+');
      }
    };
  }
  else {
    console.log(prop + '=' + state[prop]);
    if (urlEncodedData === "") {
      urlEncodedData = encodeURIComponent(prop) + '=' + encodeURIComponent(state[prop]).replace(/%20/g, '+');
    }
    else {
      urlEncodedData = urlEncodedData + '&' + encodeURIComponent(prop) + '=' + encodeURIComponent(state[prop]).replace(/%20/g, '+');
    }
  }
}
console.log(urlEncodedData);
*/

/*
let debug = {hello: "world"};
let ttt = JSON.stringify(debug,null, 2);
let blob = new Blob([ttt], {type : 'application/json'});
console.log(debug);
console.log(ttt);
console.log(blob);
console.log(blob.text());
*/