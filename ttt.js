'use strict'; // ttt test with Triyka.

console.log(process.version)

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
  let strMonth = dtVar.getMonth().toString(); // (January gives 0)
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
      sum = (SysCmbMX(k)*boardMx).toString();
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
      sum = (SysCmbSL(k)*boardSl).toString();
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

let txn_id = 10000000;
let strVar;
//let ticreq = '6_2_1_a_10_19_27_34_49_50_m_11_20_28_35_50_51';
//let ticreq = '6_1_1_sm_01_02_03_04_10_19_27_34_49_50_51_52';
//let ticreq = '6_2_1_sm_10_19_27_34_49_50_51';
//let ticreq = '5_2_1_a_10_19_27_33_44_m_11_20_28_35_45';
//let ticreq = '5_1_1_sm_01_02_03_04_10_19_27_34_49_50_51_52';
//let ticreq = '5_2_1_sm_01_02_03_04_10_19';
//let ticreq = '2_2_3_m_10_19_a_11_80';
let ticreq = '4_2_3_S_0_0_0_B_1_2_2_A_1_2_3_Y_2_2_1_Y_1_2_3';
strVar = strCmd(ticreq);
console.log(strVar);

return 0;

/*
const myEventTargetBase = new EventTarget;

class MyEventTarget extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() { return this._secret; }
};

let myEventTarget = new MyEventTarget(5);
let value = myEventTarget.secret;  // == 5
console.log(value);

myEventTarget.addEventListener("foo", function(e) {
  this._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // == 7
console.log(newValue);

return 0;
*/

/*
// This is a first-order function (FOF) later used as component:
// it takes one argument (a props object) and returns a template literal string.
const details = ({ name, randomNum }) =>
  `${name}, ${randomNum}`
// return string e.g. "alex, 123"
//console.log(details({name: 'alex', randomNum: 123}));

// This is a higher-order function (HOF):
// it takes in a function (the component, which it then calls, passing in additional props).
// This is an extremely basic example of what every stateless React component is doing.
const hoc = (component, props) => {
  const randomNum = Math.floor(Math.random() * 100) // e.g. 18
  // spread syntax to be expanded in places where zero or more arguments (for function calls)
  // name: "Julia" in final object will be extracted from props object {name: "Julia"}
  // randomNum = 18 will be transformed to randomNum: 18 in final object.
  let ttt = {...props, randomNum}
  console.log(ttt)
  return component({ ...props, randomNum })
}
let ttt = hoc(details, {name: 'Julia'})
console.log(ttt) // e.g. "Julia, 18"

return 0;
*/

/*
//var txt = '';
let data = [['title0','descrip0'], ['title1','descrip1'], ['title2','descrip2']];
data.forEach((movie, index, array) => {
  console.log(movie[0])
  console.log(movie[1])
});
*/

/*
let data = [['title0','descrip0'], ['title1','descrip1'], ['title2','descrip2']];
// pass a function to map
const result = data.map((movie,index, array) => {
  return (
    `<div className = 'card'><h1>${movie[0]}</h1><p>${movie[1]}</p></div>`
  )
});

console.log(result);
// expected output: Array [2, 8, 18, 32]
*/

// Private fields declaration (experimental)
/*
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {    
    this.#height = height;
    this.#width = width;
  }
}
*/

// Public fields declaration also expiremental.
class Rectangle {
  //height = 0;
  //width;
  constructor(h, w) {    
    this.height = h;
    this.width = w;
  }
}

let square = new Rectangle(10,10);
console.log(square.height, square.width)
console.log(square);

/* BasedPlacement
Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.

const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}

GridTemplateArea
CssGrid
Floats
Positioning2
Multi-column-layout
Legacy
StyleSheetsDemo
*/