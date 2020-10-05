'use strict';

console.log('\n<================================ begin of test ==============================================>');

/*
let strCmb=['09','08','08','06','05','04'];
let k, j, blnDuplicate;
if (strCmb.indexOf('00') !== -1) console.log('Ошибка! Нет корректных комбинаций.');
else {
  blnDuplicate = false;
  for (k=0; k<6; k++) {
    for (j=0; j<6; j++) {
      if (j !== k) {
        if (strCmb[j] === strCmb[k]) {
          console.log('Ошибка! Дублирование номера в комбинации ' + strCmb[k]);
          blnDuplicate = true;
          break;
        }
      }
    }
    if (blnDuplicate) break;
  }
}
*/

let c, t1;
console.log('Y')
t1 = 'Y';
c = ['1','2','10']
console.log(cmbPriceCalc(c, t1));
c = ['1','1','2']
console.log(cmbPriceCalc(c, t1));
c = ['1','2','2', 'S']
console.log(cmbPriceCalc(c, t1));
c = ['1','2','1']
console.log(cmbPriceCalc(c, t1));
c = ['1','1','1']
console.log(cmbPriceCalc(c, t1));


console.log('\n<================================ end of test ==============================================>');
return;

function cmbPriceCalc(cmb, typ) {
  let nums = 0;
  let cmbprice = 0;
  nums = uniqnums(cmb);
  console.log('nums=' + nums);
  if (typ === 'S') {
    cmbprice = cmbprice + 3;
  }
  else if (typ === 'B') {
    if ((nums === 2) || (nums === 3)) cmbprice = cmbprice + 3;
    else cmbprice = 0
  }
  else if (typ === 'A') {
    if ((nums === 2) || (nums === 3)) cmbprice = cmbprice + 6;
    else cmbprice = 0
  }
  else if (typ === 'Y') {
    if (nums === 2) cmbprice = cmbprice + 9;
    else if (nums === 3) cmbprice = cmbprice + 18;
    else cmbprice = 0
  }
  return cmbprice;
}

function uniqnums(cmb) {
  let nums = 1;
  if (cmb[0] !== cmb[1]) nums = nums + 1;
  if (cmb[0] !== cmb[2]) nums = nums + 1;
  if ((nums > 1) && (cmb[1] === cmb[2])) nums = nums - 1;
  return nums;
}

/*
let numArr = [0,0,0,0,0,0];
let strArr = ['','','','','',''];
let strNum;
let current, result;
let max = 52;
let i = 0, j;
do {
  current = Math.floor(Math.random() * (max));
  result = current + 1
  //console.log(current, result);
  if (numArr.indexOf(result) === -1) {
    for (j=0; j <= 5; j++) {
      if (numArr[j] === 0) {
        numArr[j] = result;
        strNum = numArr[j].toString();
        if (strNum.length < 2) strNum = '0' + strNum;
        strArr[j] = strNum;
        i = i + 1;
        break;
      }
    }
  }
} while (i < 6);
//console.log(numArr);
console.log(strArr);
*/

/*
for (var a=[],i=0;i<40;++i) a[i]=i;

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

a = shuffle(a);


return;
*/
const parseString = require('xml2js').parseString;
//let xml = '?xml version="1.0" encoding="UTF-8"?><response><ticket>225-13818091-1101234</ticket><game>2</game><sum>10.00</sum><result>0</result></response>';
let xml = '<?xml version="1.0" encoding="UTF-8"?><response><ticket>225-13818091-1101234</ticket><game>2</game><sum>10.00</sum><result>0</result></response>';
let reply;
reply = '';
let errmsg = '';
//errmsg = "Non-whitespace before first tag.\nLine: 0\nColumn: 1\nChar: ?";
/*
reply = errmsg.replace('\n',' ');
while (reply.indexOf('\n') !== -1) {
  reply = reply.replace('\n',' ');
}
console.log(reply);
*/
parseString(xml, function (err, result) {
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
    console.log('Server error reply: ' + reply.response.result[0]);
  }
}
else {
  console.log('errmsg:');
  console.log(errmsg);
}

console.log('\n<================================ end of test ==============================================>');

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