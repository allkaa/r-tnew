// Unl.js Results 018
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation,
  useHistory
} from "react-router-dom";
import { useState } from 'react'; // React Hooks used.
/*
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
  useHistory
} from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from 'react'; // React Hooks used.
*/

// You can use the last <Route> in a <Switch> as a kind of
// "fallback" route, to catch 404 errors.
//
// There are a few useful things to note about this example:
//
// - A <Switch> renders the first child <Route> that matches
// - A <Redirect> may be used to redirect old URLs to new ones
// - A <Route path="*"> always matches
//import logo from './logoFancyLetter.png'; // Tell Webpack this JS file will use this image placed in src dir.
import logo from './unl_newlogo_small.png'; // Tell Webpack this JS file will use this image placed in src dir.
//import logo2 from './logo.png'; // Tell Webpack this JS file will use this image placed in src dir.
import logoSL from './super_loto.svg'; // Tell Webpack this JS file will use this image placed in src dir.
import logoKN from './keno.svg'; // Tell Webpack this JS file will use this image placed in src dir.
import logoMX from './maxima.svg'; // Tell Webpack this JS file will use this image placed in src dir.
import logoTR from './loto3.svg'; // Tell Webpack this JS file will use this image placed in src dir.
import logoSite from './photo5283283956105588195-1-348x215.jpg'; // Tell Webpack this JS file will use this image placed in src dir.

// NB! "Global" vars work in Hooks!!!
let txn_id = 0;
let myInfoRef = React.createRef(); // waiting for ....
let myInfoRef2 = React.createRef(); // ticket price:

  /*
  const [draws, setStateDraws] = useState(1);
  const [c1, setStateC1] = useState(['00','00','00','00','00','00']);
  const [c2, setStateC2] = useState(['00','00','00','00','00','00']);
  const [c3, setStateC3] = useState(['00','00','00','00','00','00']);
  const [c4, setStateC4] = useState(['00','00','00','00','00','00']);
  const [c5, setStateC5] = useState(['00','00','00','00','00','00']);
  const [c6, setStateC6] = useState(['00','00','00','00','00','00']);
  const [a1, setStateAuto1] = useState(false);
  const [a2, setStateAuto2] = useState(false);
  const [a3, setStateAuto3] = useState(false);
  const [a4, setStateAuto4] = useState(false);
  const [a5, setStateAuto5] = useState(false);
  const [a6, setStateAuto6] = useState(false);
  const [system_flag, setStateSystemFlag] = useState(false); <==== must be used for rendering.
  const [system, setStateSystem] = useState(7);
  //const [cs, setStateCS] = useState(['00','00','00','00','00','00','00','00','00','00','00','00']);
  const [cs, setStateCS] = useState([]);
  const [as, setStateAutoS] = useState(false);
  */

let c1 = [];
let c2 = [];
let c3 = [];
let c4 = [];
let c5 = [];
let c6 = [];
let c7 = [];
let c8 = [];
let c9 = [];
let c10 = [];
let a1 = false;
let a2 = false;
let a3 = false;
let a4 = false;
let a5 = false;
let a6 = false;

// Точний, Довільний, Точний+Довільний, Система
let t1 = '';
let t2 ='';
let t3 = '';
let t4 = '';
let t5 = '';
let t6 = '';
let t7 = '';
let t8 = '';
let t9 = '';
let t10 = '';

let sysflg = false; // const [system_flag, setStateSystemFlag] = useState(false); <==== must be used  for rendering.
let system = 0;
let cs = [];
let as = false;
let ck = [];
let ak = false;

let draws = '1';
let drawnum = 1;
let sysnum = 0;
let cmbnum = 0;
let stake = '1';
let stakenum = 1;

let myInfoRef11 = React.createRef();
let myInfoRef12 = React.createRef();
let myInfoRef13 = React.createRef();
let myInfoRef14 = React.createRef();
let myInfoRef15 = React.createRef();
let myInfoRef16 = React.createRef();

let myInfoRef21 = React.createRef();
let myInfoRef22 = React.createRef();
let myInfoRef23 = React.createRef();
let myInfoRef24 = React.createRef();
let myInfoRef25 = React.createRef();
let myInfoRef26 = React.createRef();

let myInfoRef31 = React.createRef();
let myInfoRef32 = React.createRef();
let myInfoRef33 = React.createRef();
let myInfoRef34 = React.createRef();
let myInfoRef35 = React.createRef();
let myInfoRef36 = React.createRef();

let myInfoRef41 = React.createRef();
let myInfoRef42 = React.createRef();
let myInfoRef43 = React.createRef();
let myInfoRef44 = React.createRef();
let myInfoRef45 = React.createRef();
let myInfoRef46 = React.createRef();

let myInfoRef51 = React.createRef();
let myInfoRef52 = React.createRef();
let myInfoRef53 = React.createRef();
let myInfoRef54 = React.createRef();
let myInfoRef55 = React.createRef();
let myInfoRef56 = React.createRef();

let myInfoRef61 = React.createRef();
let myInfoRef62 = React.createRef();
let myInfoRef63 = React.createRef();
let myInfoRef64 = React.createRef();
let myInfoRef65 = React.createRef();
let myInfoRef66 = React.createRef();

let myInfoRefs1 = React.createRef();
let myInfoRefs2 = React.createRef();
let myInfoRefs3 = React.createRef();
let myInfoRefs4 = React.createRef();
let myInfoRefs5 = React.createRef();
let myInfoRefs6 = React.createRef();
let myInfoRefs7 = React.createRef();
let myInfoRefs8 = React.createRef();
let myInfoRefs9 = React.createRef();
let myInfoRefs10 = React.createRef();
let myInfoRefs11 = React.createRef();
let myInfoRefs12 = React.createRef();
let myInfoRefsa = React.createRef();

let myInfoRefk1 = React.createRef();
let myInfoRefk2 = React.createRef();
let myInfoRefk3 = React.createRef();
let myInfoRefk4 = React.createRef();
let myInfoRefk5 = React.createRef();
let myInfoRefk6 = React.createRef();
let myInfoRefk7 = React.createRef();
let myInfoRefk8 = React.createRef();
let myInfoRefk9 = React.createRef();
let myInfoRefk10 = React.createRef();
let myInfoRefka = React.createRef();

function NoMatchAside(props) {
  console.log('Main props:' + props);
  console.log(props); // {txn_id: 10000000}
  if (txn_id === 0) {
    txn_id = props.txn_id;
  }
  // NB! Use only state hooks for consts needed for rendering tags!!!
  const [search, setStateSearch] = useState('');
  //const [searchStarts, setStateSearchStarts] = useState(false); // not needed!
  const [dataXML, setStateDataXML] = useState(''); // error messages if any.
  const [found, setStateFound] = useState('');
  //const [searchDone, setStateSearchDone] = useState(false); // not needed!
  //let myInfoRef = React.createRef();

  // NB! vars values will no kept and on next render will be reset to initial:
  //let found = '';
  //let dataXML = '';
  //let searchDone = false;

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  // Effect Hook samples:
  // It serves same as componentDidMount, componentDidUpdate, and componentWillUnmount combined in React classes.
  // Similar to componentDidMount and componentDidUpdate.
  // By using Effect Hook, we tell React that our component needs to do something after render.
  // React will remember the arrow function we passed (we’ll refer to it as our “effect”),
  // and call it later after performing the DOM updates.
  // React will apply every effect used by the component, in the order they were specified.
  //
  // First Effect Hook:
  //
  //useEffect(() => {
  //  if (count > 0) {
  //    // Update the document title using the browser API:
  //    document.title = `You clicked ${count} times at ${props.dattime}`;
  //  }
  //});
  // next Effect Hook:
  // If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([])
  // as a second argument. 
  //useEffect(() => {window.alert(`count is ${count} at ${props.dattime}`)},[]);
  //useEffect(() => {window.setInterval(FoundCheck, 1000, found)},[]);
  // NB! Unfortunately FoundCheck see very initial const state every second.
  /*
  function FoundCheck(respfound) {
    console.log('FondCheck called respfound: ' + respfound);
    //console.log('search:');
    //console.log(search);
    //console.log('dataXML set as: ');
    //console.log(dataXML);
    //console.log('XML response info found: ');
    //console.log(respfound);
    if (respfound.length > 0) {
      setStateSearchDone(true);
    }
  }
  */
  function GetData(command) {
    //const url = 'http://unl.woks:9994/'; // project WinTicsCheckNoSslTEST
    const urlpay = 'http://10.8.194.3:10064/'; // project UnlCashExTEST ver. 3.8
    //XhrExecutor(url + '?agent=65&type=2&command=checkval&ticket_number=004-12345678-1234567');
    const urlval = 'http://10.8.194.3:9994/'; // project WinTicsCheckNoSslTEST new.
    //XhrExecutor(url + '?agent=58&type=2&command=checkval&ticket_number=004-12345678-1234567');
    console.log('OLD txn_id=' + txn_id);
    //let xhrRet = -2; // NB! return will always as xhrRet = undefined
    if (command === 'val') {
      if ((search !== '')) { //  && (searchStarts)
        //xhrRet = FetchExecutor(2); // Asynchroneous, return will always as xhrRet = undefined
        FetchExecutor(2); // Asynchroneous, retry will always as xhrRet = undefined
        //console.log('xhrRet = ' + xhrRet);
      }
      else {
        return;
      }
    }
    else if (command === 'pay') {
      //xhrRet = FetchExecutor(1); // Asynchroneous, return will always as xhrRet = undefined
      FetchExecutor(1);
      //console.log('xhrRet = ' + xhrRet);
      console.log('NEW txn_id=' + txn_id);
      }
    else {
      return;
    } // end of val or pay case.

    function FetchExecutor(props) {
      console.log('FetchExecutor props:');
      console.log(props);
  
      // project UnlCashExTEST ver. 3.8
      // http://10.8.194.3:10064/?agent=65&type=2&command=pay&date=20200808&txn_id=10000001&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0
      // 004-12345678-1234567
      //let reqString = 'http://10.8.194.3:10064/?agent=65&type=2&command=checkval&ticket_number=' + inp1.value ;
      let reqString = '';
      if (props === 1) {
        txn_id = txn_id + 1;
        reqString = urlpay + '?agent=65&type=2&command=pay&date=20200808&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0';
      }
      else if (props === 2) {
        reqString = urlval + '?agent=58&type=2&command=checkval&ticket_number=' + search;
      }
      else {
        console.log('NB! Internal error - wrong props: ' + props);
        return;
      }
      console.log('reqString: ' +reqString);
      let crucialNetErr = true; // NB! Initially set crucial Net Error for request.
      /* Fetch with init object containing any custom settings that you want to apply to the request:
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/xml');
      fetch('http://10.8.194.3:42001/?testDebian', {method: 'GET', headers: myHeaders, mode: 'cors'}).then(function(response) {
      mode: The mode you want to use for the request are cors, no-cors, same-origin, or navigate. The default is cors.
      */
      console.log('===============> fetch begin');
      //console.log('myInfoRef.current.textContent: ' + myInfoRef.current.textContent);
      myInfoRef.current.textContent = 'Wait for fetch processing...';
      //console.log('myInfoRef.current.textContent: ' + myInfoRef.current.textContent);
      //errorMessage.textContent = '';
      //hdrWarn.textContent = 'Wait for fetch processing...';
      // NB! mode no-cors does returns NetWork Error 0.
      fetch(reqString, {method: 'GET', mode: 'cors'}) // fetch(reqString) or fetch(reqString, {method: 'GET', headers: myHeaders, mode: 'cors'})
      .then(response => {
        //console.log('myInfoRef: ' + myInfoRef);
        //console.log(myInfoRef.current);
        myInfoRef.current.textContent = '';
        crucialNetErr = false
          console.log('===============> fetch response got response.ok as ' + response.ok)
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
        //hdrWarn.textContent = '';
        console.log('===============> render fetched text in data object')
        console.log(data)
        //let resp = '';
        let txtErr;
        //hdr1.textContent = 'Text data reply received from server'
        // Create XML document from XML string using DOMParser().
        let oParser = new DOMParser();
        let oXmlDOM = oParser.parseFromString(data, "application/xml");
        //console.log(oXmlDOM.documentElement.nodeName === "parsererror" ? "error while parsing" : 'XML document name: ' + oXmlDOM.documentElement.nodeName);
        if (oXmlDOM.documentElement.nodeName === "parsererror") {
          txtErr = `Reply XML format error - ${data}`;
          console.log(txtErr);
          setStateDataXML(txtErr);
          //dataXML = txtErr;
          return 1;
        }
        else {
          let xmlS = new XMLSerializer();
          let xmlString = xmlS.serializeToString(oXmlDOM);
          //console.log('xmlString:')
          //console.log(xmlString)
          let nodeValue = oXmlDOM.getElementsByTagName("result")[0].childNodes[0].nodeValue; // get <result> tag text value.
          let foundNew;
          if (props === 1) {
            foundNew = xmlString;
            setStateFound(foundNew);
            //console.log('Fetch XML new response info set in found:' +  foundNew);
            //found = `result = ${nodeValue}`;
          }
          else if (props === 2) {
            if (nodeValue === '0') {
              nodeValue = oXmlDOM.getElementsByTagName("sum")[0].childNodes[0].nodeValue; // get e.g. <sum>20.00</sum> tag text value.
              if (nodeValue === '-1.00') {
                foundNew = `Большой выигрыш!!!.`
              }
              else if (nodeValue === '-2.00') {
                foundNew = `Билет уже выплачен.`
              }
              else if (nodeValue === '-3.00') {
                foundNew = `Билет выплачен с обменным билетом.`
              }
              else if (nodeValue === '-4.00') {
                foundNew = `Билет аннулирован.`
              }
              else if (nodeValue === '0.00') {
                foundNew = `Билет не выиграл.`
              }
              else {
                foundNew = `Ваш виграш ${nodeValue} грн.`
              }
            }
            else {
              foundNew = `Ошибка поиска, (код ${nodeValue})`
            }
            setStateFound(foundNew);
            //console.log('Fetch XML new response info set in found:' +  foundNew);
            //found = `result = ${nodeValue}`;
          }
        }
        //console.log('Fetch XML previous response info still preserved in found: ');
        //console.log(found);
        return 0;
      })
      .catch(err => { // catch network error and artificially thrown Error in very first then().
        // Do something for crucial or non-crucial error e.g. 404 here
        //const errorMessage = document.createElement('marquee') // obsolate.
        //hdrWarn.textContent = 'NB! Network Error occured.';
        //myInfoRef.current.textContent = '';
        let txtErr;
        if (crucialNetErr) {
          console.log('=======================> fetch Crucial error: ' + err.message)
          //errorMessage.textContent = 'Network crucial error - response NOT got: ' + err.message;
          txtErr = 'Network crucial error - response NOT got: ' + err.message;
          console.log(txtErr);
          setStateDataXML(txtErr);
          //dataXML = txtErr;
        }
        else {
          console.log('=======================> fetch Non-crucial error: ' + err.message)
          txtErr = 'Network response: ' + err.message;
          console.log(txtErr);
          setStateDataXML(txtErr);
          //dataXML = txtErr;
        }
      })
      /* NB! The fetch() promise will reject with a TypeError only when a crucial network error is encountered or 
          CORS is misconfigured on the server side, although this usually means permission issues or similar.
      */
    } // end of function FetchExecutor(props, search) 
  } // end functio GetData().
  //[search, searchStarts, found]
  //[search, FetchExecutor, found] 
  
  function handleChangeSearch(event) {
    console.log('========> handleChangeSearch event <==========')
    let strSearch = '';
    let oldSearch = search;
    //console.log('event:');
    console.log(event);
    console.log('event.target: ' + event.target);
    console.log(event.target);
    console.log('event.target.name: ' + event.target.name);
    //console.log(event.target.name);
    console.log('event.target.type: ' + event.target.type)
    //console.log(event.target.type)
    console.log('event.target.value: ' + event.target.value);
    //console.log(event.target.value);
    //setStateSearch(event.target.value.toUpperCase());
    strSearch = event.target.value.toUpperCase();
    if (strSearch !== oldSearch) {
      console.log('strSearch vs oldSearch: [' + strSearch + '] [' + oldSearch + ']')
      setStateFound('');
      setStateDataXML('');
      //setStateSearchDone(false);
      //found = '';
      //dataXML = '';
      //searchDone = false;
    }
    setStateSearch(strSearch);
    console.log('strSearch: ' + strSearch);
    if (strSearch === '') {
      setStateFound('');
      setStateDataXML('');
      //setStateSearchDone(false);
      //found = '';
      //dataXML = '';
      //searchDone = false;
     }
     //console.log('OLD FOUND INFO: ' + found);
    }

  function handleSubmitVal(event) {
    console.log('=====================================> Form handleSubmitVal <============================================')
    //console.log('event:');
    console.log(event);
    console.log('event.target: ' + event.target);
    console.log(event.target);
    /* following are undefined or empty in form case:
    //console.log('event.target.name: ' + event.target.name);
    //console.log(event.target.name);
    //console.log('event.target.type: ' + event.target.type)
    //console.log(event.target.type)
    //console.log('event.target.value: ' + event.target.value);
    //console.log(event.target.value);
    */
    console.log(`search string: ${search}`);
    myInfoRef.current.textContent = 'Wait for fetch processing...';
    //event.preventDefault(); // NB! Use it to prevent sending standard POST/GET request to server with URL //formAK
    /* e.g.
    Form request submitted by POST. Action URL is /formAK with search as body: 
    user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
    */
    //GetData('val');
    //console.log('searchDone after GetDate()' + searchDone);
    //console.log('found after GetDate(val)' + found);
    /*
    if (search.length > 0) {
      //setStateSearchStarts(true);
    }
    else {
      setStateSearchStarts(false);
    }
    */
  }

  function buyTicket(event) {
    console.log('=====================================> buyTicket onClick <============================================')
    //console.log('event:');
    console.log(event);
    console.log('event.target: ' + event.target);
    console.log(event.target);
    /* following are undefined or empty in form case:
    //console.log('event.target.name: ' + event.target.name);
    //console.log(event.target.name);
    //console.log('event.target.type: ' + event.target.type)
    //console.log(event.target.type)
    //console.log('event.target.value: ' + event.target.value);
    //console.log(event.target.value);
    */
    //console.log(`search string: ${search}`);
    setStateSearch('');
    event.preventDefault(); // NB! Use it to prevent sending standard POST/GET request to server with URL //formAK
    /* e.g.
    Form request submitted by POST. Action URL is /formAK with search as body: 
    user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
    */
    GetData('pay');
    //console.log('searchDone after GetDate()' + searchDone);
    //console.log('found after GetDate(pay)' + found);
    /*
    if (search.length > 0) {
      //setStateSearchStarts(true);
    }
    else {
      setStateSearchStarts(false);
    }
    */
  }

  function changeResultsDraw(event) {
    //console.log(event.target.name);
    const MaxNum = 100000;
    const MinNum = 1;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log('draws: ' + nbrN);
    if (Number.isNaN(nbrN)) {
      event.preventDefault();
      alert("Ошибка! Номер розыгрыша задан некорректно.");
      event.target.value = '';
    }
    else if ((nbrN < MinNum) || (nbrN > MaxNum)) {
      event.preventDefault();
      alert("Ошибка! Номер розыгрыша задан некорректно.");
      event.target.value = '';
    }
    return;
  }

  function handleSubmitResults() {
    return;
  }

  return (
    <div>
      <img id="logoimg" src={logo} alt="logo" /> {/* or use as src="logo.png"  logo.png img_5terre.jpg are in public dir */}
      <h1>Українська Національна Лотерея</h1>

      <header>
        {/*<!-- Even is it's not mandatory, it's common practice to put the main navigation menu within the main header -->*/}
        <nav role="navigation">
        <Router>
        <div>
        <ul>
          <li>
            <Link to="/">Домой</Link>
          </li>
          {/*<b id="todo">Купить билет:</b>*/}
          <li>
            <Link to="/nav-match2">Кено</Link>
          </li>
          <li>
            <Link to="/nav-match3">Супер Лото</Link>
          </li>
          <li>
            <Link to="/nav-match4">Максима</Link>
          </li>
          <li>
            <Link to="/nav-match5">Тройка</Link>
          </li>
          <li>
            <Link to="/nav-match6">О нас</Link>
          </li>
        </ul>
        {/*<!-- A Search form is another commmong non-linear way to navigate through a website. -->*/}
        {/*<!-- creates GET requst {e.g. for search "123" as http://localhost:3000/nav-match3?q=123 -->*/}
        <form role="search" method="get" action="formAKresults" onSubmit={handleSubmitResults}>
          {/*<input hidden type="search" name="g"  defaultValue="2" className="drawnum"></input>*/}
          <select name="g" required id="gameselect" >
            <option value="">--Выберите игру--</option>
            <option value="2">Кено</option>
            <option value="4">Трійка</option>
            <option value="5">Максима</option>
            <option value="6">Супер Лото</option>
          </select>
          <button type="submit">Результаты игры</button>
          <input type="search" name="q"  defaultValue="" onChange = {changeResultsDraw} className="drawnum" placeholder="" aria-label="Keno results"></input>
          <b>Результаты игры по номеру розыгрыша (если номер не задан, то последнего)</b>
        </form>
        <form role="search" method="get" action="formAKchk" onSubmit={handleSubmitVal}>
          {/* <input type="submit" value="Ticket search"/> */}
          <button type="submit">Проверить выигрыш</button>
          <input type="search" className = "ticket" name="q"  value={search} onChange={handleChangeSearch} placeholder="123-12345678-1234567" aria-label="Search ticket status"></input>
          <b>Проверить выигрыш по номеру билета</b>
        </form>
        {/*<p id="found">{found}</p>*/}
        {(found.length > 0) && <p id="found">{found}</p>}
        {/* searchDone && <p id="found">{found}</p>*/}
        <p id="dataXML">{dataXML}</p> {/* net errors if any */}
        {/* dataXML && <p id="dataXML">{dataXML}</p>*/}
        {/* <button onClick={buyTicket} >Buy Ticket</button> */}
        <p ref={myInfoRef}></p> {/* wait for fetch msg */}

        <Switch>
          <Route exact path="/">
            <NavHome />
          </Route>
          <Route path="/nav-match2">
            <Keno />
          </Route>
          <Route path="/nav-match3">
            <SuperLoto />
          </Route>
          <Route path="/nav-match4">
            <Maxima />
          </Route>
          <Route path="/nav-match5">
            <Tryika />
          </Route>
          <Route path="/nav-match6">
            <Contact />
          </Route>
          <Route path="*">
            <NavNoMatch /> {/*NavHome or NavNoMatch */}
          </Route>
        </Switch>
        </div>
        </Router>
        </nav>
      </header>

      <main>
        {/*<!-- the aside content can also be nested within the main content -->*/}
        <aside id="leftaside"> {/* role="complementary" is default for aside */}
          <h4>О сайте</h4>
          {/*<img id="logoimg" src="logo.png" alt="logo"/>*/}
          <img id="logoimg3" src={logoSite} alt="logoSite"/> {/* or src="logo.png"  logo.png in public dir */}
          <p>На этом сайте вы можете купить билеты игр УНЛ, ознакомиться с выигрышными номерами проведенных розыгрышей, а также проверить ваш билет на выигрыш.</p>
        </aside>
        <article>
          <h4>Игры Украинской Национальной Лотереи</h4>
          <img id="logoimg2" src={logoSL} alt="logoSL" /> {/* or use as src="logo.png" where logo.png in public dir */}
          <p>«Супер Лото» це Ваш унікальний шанс радикально змінити своє життя, витративши всього 15 гривень.
             Адже «Супер Лото» - це величезний джекпот - сума, якої вистачить для здійснення будь-якої Вашої мрії.
             Саме у «Супер Лото» зафіксований найбільший виграш в історії українських лотерей - 15 200 000 грн!
             Взяти участь у грі дуже просто! Для цього Ви повинні заповнити ігрову картку, закресливши на одному або декількох ігрових полях,
              6 номерів з 52.
              Джекпот зростає від розіграшу до розіграшу і може сягати значних розмірів, аж поки не буде зірваний.
              Під час розіграшу з лототрону випадає 6 призових кульок. Ви виграли, якщо вгадали дві і більше призових номери.
               Якщо Ви вгадали 6 номерів - ви зірвали джекпот!
          </p>
          <img id="logoimg2" src={logoKN} alt="logoKN" /> {/* or use as src="logo.png" where logo.png in public dir */}
          <p>В «Кєно» кожного разу розігруються 20 номерів з 80. Щоб виграти головний приз, Вам достатньо вгадати лише половину номерів,
             що були розіграні! Та, навіть, якщо Ви не вгадали жодного номера, Ви все одно виграли! У випадку,
            якщо Ви поставили на 9 або 10 номерів і не вгадали жодного, то Ви все одно виграли вдвічі більше, ніж поставили.
            Вважається, що слово Кєно має латинське коріння. У первинному вигляді в цій грі було 5 виграшних номерів.
            Звідси і назва: quini(лат.) — «кожні п’ять». Надалі слово увійшло і у французький: quine(фр.) — «п’ять виграшних номерів».
            Століття багатої історії та безліч легенд пов`язані з цією унікальною грою. Одна з них говорить, що вже 3000 років тому у
            стародавньому Китаї грали в лотерею типу «Кєно». Її правила були вперше описані у магічній китайській книзі "І цзин" — перші в
            історії свідчення про принципи сучасної лотереї.
            Однак лотерея мала й практичне значення. Вважається, що одне із див світу, – Велика китайська стіна, будувалася саме на її кошти.
            Сьогодні в «Кєно» грають в усьму світі. Порівняно зі стародавніми часами, сучасні правила гри в «Кєно» досить прості.
            Кожного вечора проводиться розіграш, у якому розігруються 20 номерів з 80. Ви можете обрати від 2 до 10 номерів та збільшити ставку від 2 до 10 разів. «Кєно» — це гра вибору. Якщо серед розіграних номерів є обрані Вами — Ви виграли!
          </p>
          <img id="logoimg2" src={logoMX} alt="logoKN" /> {/* or use as src="logo.png" where logo.png in public dir */}
          <p>«Лото Максима» — це гра для тих, кому подобається вигравати легко і часто! Максимально прості правила та оптимальні шанси
            на виграш дозволяють отримати максимальне задоволення від гри, і роблять цю лотерею прекрасним доповненням до «Супер Лото» для 
            всіх категорій гравців.
            Взяти участь в грі дуже просто! Для цього Ви повинні заповнити ігрову картку, закресливши на одному або декількох ігрових полях
            5 номерів із 45.
            Розіграші проводяться щоденно і транслюються у нічний час на каналі КиївTV.
            Під час розіграшу з лототрона випадає 5 призових кульок. Ви виграли, якщо вгадали два і більше призових номери.
            Якщо Ви вгадали 5 номерів, – Ви виграли Джекпот!
            Джекпот зростає від розіграшу до розіграшу і може сягати великих розмірів, аж поки не буде виграний.
          </p>
          <img id="logoimg2" src={logoTR} alt="logoTR" /> {/* or use as src="logo.png" where logo.png in public dir */}
          <p>Цікаве про «Лото Трійка» У всьому світі, лотерея, що проводиться за аналогічною формулою, вже стала класичною.
            В Україні теж є можливість зіграти в цей різновид лотерей, який дає можливість легко виграти невеликий, 
            але легкопрогнозований приз. Правила лотерєї дуже прості, але і тут є можливість проявити себе досвідченим гравцям.
            Перші згадки про лотереї можна зустріти за часів Римської Імперії.
            Взагалі, лотереї тоді були одною з розваг на званих вечерях. Кожен гість отримував білет з номером. Кожному учасникові лотереї 
            обов'язково діставався якийсь приз (зазвичай призами були всякі модні дрібнички і кухонний посуд) – тому даний тип лотереї був не 
            більше ніж простою роздачею дарунків під час розгульних свят.
            Перша ж лотерея, в сучасному розумінні, з продажем білетів, була організована при правлінні римського імператора Августа Цезаря, 
            коли йому знадобилися гроші на ремонтні роботи в столиці.
            Кожен розіграш випадає 3 номери від 0 до 9, з яких формується трьохзначне число. Достатньо вгадати це число – і Ви виграли.
          </p>
        </article>
        <aside id="rightaside">
        <Router>
        <div>
        <ul>
          <li>
            <Link to="/">Дополнительные игры</Link>
          </li>
          <li>
            <Link to="/will-match1">Стерлинг онлайн</Link>
          </li>
          <li>
            <Link to="/will-match2">ВИП лото онлайн</Link>
          </li>
          <li>
            <Link to="will-match3">Will Match 3</Link>
          </li>
          <li>
            <Link to="/NewServerPage">Link to NewServerPage</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <AsideHome />
          </Route>
          <Route path="/will-match1">
            <AsideWillMatch />
          </Route>
          <Route path="/will-match2">
            <AsideWillMatch />
          </Route>
          <Route path="/will-match3">
            <AsideWillMatch />
          </Route>
        </Switch>
        </div>
        </Router>
        </aside>
      </main>
    </div>
  );
}

export default NoMatchAside;

/*
function NavWillMatch() {
  let location = useLocation();
  console.log('location:');
  console.log(location);
  let history = useHistory();
  console.log('history:');
  console.log(history.location.pathname);
  console.log(history);
  let dt = new Date();
  let reply = dt.toLocaleTimeString('uk'); // 'en-US'
  return <p className = "special">
    Nav Matched! <code>{location.pathname} and {location.search}</code> {reply}
    </p>;
}
*/

function NavHome() {
  //let dt = new Date();
  //let reply = dt.toLocaleTimeString('uk'); // 'en-US'
  //return <h3>Nav Home {reply}</h3>;
  return null;
}

function NavNoMatch() {
  let location = useLocation();
  console.log('NavNoMatch location:');
  console.log(location);
  let dt = new Date();
  let reply = dt.toLocaleTimeString('uk'); // 'en-US'
  return (
    <div>
      <p className = "special">
        Nav!!! - NO MATCH for <code>{location.pathname}</code> {reply}
      </p>
    </div>
  );
}

function Contact() {
  return <address className = "special"> {/* id = "contact" */}
    Українська Національна Лотерея<br/>
    Гаряча лінія<br/>
    0 800 807 807 <br/> 
    (безкоштовно)<br/>
    Написати нам листа<br/>
    <a href="mailto:web@unl.ua">web@unl.ua</a><br/>
    Telegram-чат техпідтримки<br/>
    <a href="https:web@unl.ua">web@unl.ua</a><br/>
    @unl_ua_bot
  </address>;
}

/*
function Results() {
  let location = useLocation();
  console.log('location:');
  console.log(location);
  let history = useHistory();
  console.log('history:');
  console.log(history.location.pathname);
  console.log(history);
  let dt = new Date();
  let reply = dt.toLocaleTimeString('uk'); // 'en-US'
  return <p className = "special">
    Results! <code>{location.pathname} and {location.search}</code> {reply}
  </p>;
}
*/

/*
function Purchase() {
  function handleSubmitPay(event) {
    myInfoRef.current.textContent = 'Wait for fetch processing...';
    // e.g.
    //Form request submitted by GET. Action URL is /formAKpay?q=xxx... with or for POST search as body e.g.: 
    //user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
    //
    //event.preventDefault(); // NB! Use it to prevent sending standard POST/GET request to server with URL /formAKpay?q=xxxxx.....
    //GetData('pay'); // if use Fetch directly from html page.
  } // end of function handleSubmitPay(event)

  return <form role="search" method="get" action="formAKpay" onSubmit={handleSubmitPay}>
  <input type="search" name="q"  value={'auto'} placeholder="123" aria-label="Buy ticket"></input>
  <button type="submit">Buy ticket</button>
  </form>
} // end of function Purchase()
*/

function Keno() {

  function onChangeDraws(event) {
    //console.log(event.target.name);
    const MaxNum = 14;
    const MinNum = 1;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log('draws: ' + nbrN);
    if (Number.isNaN(nbrN) || (nbrN < MinNum) || (nbrN > MaxNum)) {
      //event.preventDefault();
      //console.log("Ошибка! Номер не задан корректно.");
      draws = '0'; // setStateDraws('1');
      drawnum = 0;
    }
    else {
      if ((nbrN <= 7) || (nbrN === MaxNum)) {
        //console.log('Номер корректный ' + strN);
        draws = strN; // setStateDraws(strN);
        drawnum = Number(strN);
      }
      else {
        //event.preventDefault();
        //console.log("Ошибка! Номер некорректный (1...7,14) " + strN);
        draws = '0'; // setStateDraws('1');
        drawnum = 0;
      }
    } 
    myInfoRef2.current.textContent = CalcSumKN();
  } // end of function onChangeDraws(event).

  function onChangeStake(event) {
    //console.log(event.target.name);
    const MaxNum = 10;
    const MinNum = 1;
    //stakenum = Number(stake);
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN) || (nbrN < MinNum) || (nbrN > MaxNum)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      stake = '0'; // setStateStake('1');
      stakenum = 0;
    } 
    else {
      stake = strN; // setStateStake(strN);
      stakenum = Number(strN);
    }
    myInfoRef2.current.textContent = CalcSumKN();
  } // end of function onChangeStake(event).

  function onChangeSystem(event) { // Count of Keno numbers used.
    //setStateSystem('7');
    //sysnum = SysCmbSL(7);
    cmbnum = 0;
    //console.log(event.target.name);
    //console.log(event.target.value);
    console.log('onChangeSystem Keno begin:')
    console.log(system);
    console.log(cs);
    console.log(as);
    console.log(ck);
    console.log(ak);
    const MaxNum = 10;
    const MinNum = 2;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    console.log('nbrN = ' + nbrN);
    if (Number.isNaN(nbrN)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      //setStateSystem('7');
      return;
    }
    if (nbrN < MinNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер меньше " + MinNum);
      //setStateSystem('7');
      return;
    }
    if (nbrN > MaxNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер больше " + MaxNum);
      //setStateSystem('7');
      return;
    }
    system = Number(strN); //setStateSystem(strN);
    //console.log(Number(strN));
    sysnum = nbrN; // SysCmbSL(Number(strN));
    cs = [];
    as = false;  // setStateAutoS(false);
    ck = [];
    ak = false;  // setStateAutoS(false);
    console.log('onChangeSystem Keno end:')
    console.log(system);
    console.log(cs);
    console.log(as);
    console.log(ck);
    console.log(ak);
    myInfoRefsa.current.value = 'N'; // .textContent = 'N';
    myInfoRefs1.current.value = '';
    myInfoRefs2.current.value = '';
    if (system >= 3) myInfoRefs3.current.value = '';
    if (system >= 4) myInfoRefs4.current.value = '';
    if (system >= 5) myInfoRefs5.current.value = '';
    if (system >= 6) myInfoRefs6.current.value = '';
    if (system >= 7) myInfoRefs7.current.value = '';
    if (system >= 8) myInfoRefs8.current.value = '';
    if (system >= 9) myInfoRefs9.current.value = '';
    if (system >= 10) myInfoRefs10.current.value = '';
    if (system >= 11) myInfoRefs11.current.value = '';
    if (system >= 12) myInfoRefs12.current.value = '';
    system >= 3 ? myInfoRefs3.current.hidden = false : myInfoRefs3.current.hidden = true;
    system >= 4 ? myInfoRefs4.current.hidden = false : myInfoRefs4.current.hidden = true;
    system >= 5 ? myInfoRefs5.current.hidden = false : myInfoRefs5.current.hidden = true;
    system >= 6 ? myInfoRefs6.current.hidden = false : myInfoRefs6.current.hidden = true;
    system >= 7 ? myInfoRefs7.current.hidden = false : myInfoRefs7.current.hidden = true;
    system >= 8 ? myInfoRefs8.current.hidden = false : myInfoRefs8.current.hidden = true;
    system >= 9 ? myInfoRefs9.current.hidden = false : myInfoRefs9.current.hidden = true;
    system >= 10 ? myInfoRefs10.current.hidden = false : myInfoRefs10.current.hidden = true;
    myInfoRefka.current.value = 'N'; // .textContent = 'N';
    myInfoRefk1.current.value = '';
    myInfoRefk2.current.value = '';
    if (system >= 3) myInfoRefk3.current.value = '';
    if (system >= 4) myInfoRefk4.current.value = '';
    if (system >= 5) myInfoRefk5.current.value = '';
    if (system >= 6) myInfoRefk6.current.value = '';
    if (system >= 7) myInfoRefk7.current.value = '';
    if (system >= 8) myInfoRefk8.current.value = '';
    if (system >= 9) myInfoRefk9.current.value = '';
    if (system >= 10) myInfoRefk10.current.value = '';
    system >= 3 ? myInfoRefk3.current.hidden = false : myInfoRefk3.current.hidden = true;
    system >= 4 ? myInfoRefk4.current.hidden = false : myInfoRefk4.current.hidden = true;
    system >= 5 ? myInfoRefk5.current.hidden = false : myInfoRefk5.current.hidden = true;
    system >= 6 ? myInfoRefk6.current.hidden = false : myInfoRefk6.current.hidden = true;
    system >= 7 ? myInfoRefk7.current.hidden = false : myInfoRefk7.current.hidden = true;
    system >= 8 ? myInfoRefk8.current.hidden = false : myInfoRefk8.current.hidden = true;
    system >= 9 ? myInfoRefk9.current.hidden = false : myInfoRefk9.current.hidden = true;
    system >= 10 ? myInfoRefk10.current.hidden = false : myInfoRefk10.current.hidden = true;
    myInfoRef2.current.textContent = CalcSumKN();
  } // end of function onChangeSystem(event).

  function onChangeS(event) {
    //console.log(event.target.name);
    const MaxNum = 80;
    const MinNum = 1;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      //return;
      strN = '00';
    }
    else if (nbrN < MinNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер меньше " + MinNum);
      //return;
      strN = '00';
    }
    else if (nbrN > MaxNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер больше " + MaxNum);
      //return;
      strN = '00';
    }
    else {
      strN = nbrN.toString();
    }
    if (strN.length < 2) {
      strN = '0' + strN;
    }
    let strPfx;
    let strCmb;
    //strPfx = 'ns';
    //strCmb = cs;
    if (event.target.name.indexOf('ns') !== -1) {
      strPfx = 'ns';
      strCmb = cs;
    }
    else if (event.target.name.indexOf('nk') !== -1) {
      strPfx = 'nk';
      strCmb = ck;
    }
    console.log('onChangeS strCmb begin:');
    console.log(strCmb);
    if (event.target.name === strPfx + '1') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 0) strCmb[0] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '2') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 1) strCmb[1] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '3') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 2) strCmb[2] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '4') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 3) strCmb[3] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '5') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 4) strCmb[4] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '6') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 5) strCmb[5] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '7') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 6) strCmb[6] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '8') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 7) strCmb[7] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '9') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 8) strCmb[8] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '10') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 9) strCmb[9] = strN;
      else strCmb.push(strN);
    }
    console.log('onChangeS strCmb end:');
    console.log(strCmb);
    if (strPfx === 'ns') {
      cs = strCmb; //setStateCS(strCmb);
    }
    else {
      ck = strCmb; //setStateCS(strCmb);
    }
    console.log(cs);
    console.log(ck);
    myInfoRefs1.current.value = cs[0] === '00' ? '' : cs[0];
    myInfoRefs2.current.value = cs[1] === '00' ? '' : cs[1];
    if (system >= 3)myInfoRefs3.current.value = cs[2] === '00' ? '' : cs[2];
    if (system >= 4)myInfoRefs4.current.value = cs[3] === '00' ? '' : cs[3];
    if (system >= 5)myInfoRefs5.current.value = cs[4] === '00' ? '' : cs[4];
    if (system >= 6)myInfoRefs6.current.value = cs[5] === '00' ? '' : cs[5];
    if (system >= 7)myInfoRefs7.current.value = cs[6] === '00' ? '' : cs[6];
    if (system >= 8) myInfoRefs8.current.value = cs[7] === '00' ? '' : cs[7];
    if (system >= 9) myInfoRefs9.current.value = cs[8] === '00' ? '' : cs[8];
    if (system >= 10) myInfoRefs10.current.value = cs[9] === '00' ? '' : cs[9];
    myInfoRefk1.current.value = ck[0] === '00' ? '' : ck[0];
    myInfoRefk2.current.value = ck[1] === '00' ? '' : ck[1];
    if (system >= 3)myInfoRefk3.current.value = ck[2] === '00' ? '' : ck[2];
    if (system >= 4)myInfoRefk4.current.value = ck[3] === '00' ? '' : ck[3];
    if (system >= 5)myInfoRefk5.current.value = ck[4] === '00' ? '' : ck[4];
    if (system >= 6)myInfoRefk6.current.value = ck[5] === '00' ? '' : ck[5];
    if (system >= 7)myInfoRefk7.current.value = ck[6] === '00' ? '' : ck[6];
    if (system >= 8) myInfoRefk8.current.value = ck[7] === '00' ? '' : ck[7];
    if (system >= 9) myInfoRefk9.current.value = ck[8] === '00' ? '' : ck[8];
    if (system >= 10) myInfoRefk10.current.value = ck[9] === '00' ? '' : ck[9];
    myInfoRef2.current.textContent = CalcSumKN();
  } // end of function onChangeS(event).

  function onChangeAutoSystem(event) {
    //console.log(event);
    //console.log('typeof ' + typeof(event));
    //console.log(event.target.name);
    //let strA = event.target.value;
    //console.log(strA);
    //console.log('typeof ' + typeof(strA));
    //let strArr = ['','','','','','','','','',''];
    let strArr = [];
    let bnlAuto = false;
    console.log('numSys: ' + system);
    let i = 0, j;
    if (event.target.value === 'Y') {
      let numArr = [0,0,0,0,0,0,0,0,0,0];
      let strNum;
      let current, result;
      let max = 80;
      do {
        current = Math.floor(Math.random() * (max));
        result = current + 1
        //console.log(current, result);
        if (numArr.indexOf(result) === -1) {
          for (j=0; j < system; j++) {
            if (numArr[j] === 0) {
              numArr[j] = result;
              strNum = numArr[j].toString();
              if (strNum.length < 2) strNum = '0' + strNum;
              //strArr[j] = strNum;
              strArr.push(strNum);
              i = i + 1;
              break;
            }
          }
        }
      } while (i < system);
      console.log(strArr);
      strArr.sort();
      bnlAuto = true;
    }
    else {
      //strArr=['00','00','00','00','00','00','00','00','00','00','00','00'];
      let i = 0;
      do {
        strArr.push('00');
        i = i + 1;
      } while (i < system);
      bnlAuto = false;
    }
    console.log(strArr);
    if (event.target.name.indexOf('as') !== -1) {
      for (i=0; i<system; i++) cs[i] = strArr[i];
      as = bnlAuto; //setStateAutoS(bnlAuto);
      myInfoRefs1.current.value = cs[0] === '00' ? '' : cs[0];
      myInfoRefs2.current.value = cs[1] === '00' ? '' : cs[1];
      if (system >= 3)myInfoRefs3.current.value = cs[2] === '00' ? '' : cs[2];
      if (system >= 4)myInfoRefs4.current.value = cs[3] === '00' ? '' : cs[3];
      if (system >= 5)myInfoRefs5.current.value = cs[4] === '00' ? '' : cs[4];
      if (system >= 6)myInfoRefs6.current.value = cs[5] === '00' ? '' : cs[5];
      if (system >= 7)myInfoRefs7.current.value = cs[6] === '00' ? '' : cs[6];
      if (system >= 8) myInfoRefs8.current.value = cs[7] === '00' ? '' : cs[7];
      if (system >= 9) myInfoRefs9.current.value = cs[8] === '00' ? '' : cs[8];
      if (system >= 10) myInfoRefs10.current.value = cs[9] === '00' ? '' : cs[9];
    }
    else {
      for (i=0; i<system; i++) ck[i] = strArr[i];
      ak = bnlAuto; //setStateAutoS(bnlAuto);
      myInfoRefk1.current.value = ck[0] === '00' ? '' : ck[0];
      myInfoRefk2.current.value = ck[1] === '00' ? '' : ck[1];
      if (system >= 3)myInfoRefk3.current.value = ck[2] === '00' ? '' : ck[2];
      if (system >= 4)myInfoRefk4.current.value = ck[3] === '00' ? '' : ck[3];
      if (system >= 5)myInfoRefk5.current.value = ck[4] === '00' ? '' : ck[4];
      if (system >= 6)myInfoRefk6.current.value = ck[5] === '00' ? '' : ck[5];
      if (system >= 7)myInfoRefk7.current.value = ck[6] === '00' ? '' : ck[6];
      if (system >= 8) myInfoRefk8.current.value = ck[7] === '00' ? '' : ck[7];
      if (system >= 9) myInfoRefk9.current.value = ck[8] === '00' ? '' : ck[8];
      if (system >= 10) myInfoRefk10.current.value = ck[9] === '00' ? '' : ck[9];
    }
    myInfoRef2.current.textContent = CalcSumKN();
  } // end of function onChangeAutoSystem(event).

  function Duplicate(strCmb, count) {
    let blnDuplicate = false;
    let k, j;
    for (k=0; k<count; k++) {
      for (j=0; j<count; j++) {
        if (j !== k) {
          if (strCmb[j] === strCmb[k]) {
            blnDuplicate = true;
            //alert('Ошибка! Дублирование номера в xxx комбинации');
            break;
          }
        }
      }
      if (blnDuplicate) break;
    }
    return blnDuplicate;
  }

  function handleSubmitKeno(event) {
    //console.log(event.search); // event.search e.g. '?q=6_1...';
    //console.log(c1);
    //console.log(c2);
    //console.log(c3);
    //console.log(c4);
    //console.log(c5);
    //console.log(c6);
    //console.log(cs);
    let strCmb;
    let strPay = ''; // e.g. will later start as '6_1'
    let blnDuplicate = false;
    //console.log(draws);
    //console.log(strPay);
    let sys = Number(system);
    //console.log(strCmb);
    let k;
    strCmb = cs;
    if (strCmb.length === system && strCmb.indexOf('00') === -1) {
      blnDuplicate = Duplicate(strCmb, sys);
      if (! blnDuplicate) {
        if (as) {
          strPay = strPay + '_a';
        }
        else {
          strPay = strPay + '_m';
        }
        strCmb.sort();
        //strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4] + '_' + strCmb[5] ;
        for (k=0; k<sys; k++) strPay = strPay + '_' + strCmb[k] ;
      }
      else alert('Ошибка! Дублирование номера в первой комбинации');
    }
    strCmb = ck;
    if (strCmb.length === system && strCmb.indexOf('00') === -1) {
      blnDuplicate = Duplicate(strCmb, sys);
      if (! blnDuplicate) {
        if (ak) {
          strPay = strPay + '_a';
        }
        else {
          strPay = strPay + '_m';
        }
        strCmb.sort();
        //strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4] + '_' + strCmb[5] ;
        for (k=0; k<sys; k++) strPay = strPay + '_' + strCmb[k] ;
      }
      else alert('Ошибка! Дублирование номера во второй комбинации');
    }
  //console.log(strPay);
    if (blnDuplicate) {
      //alert('Ошибка! Есть некорректные комбинации.');
      event.preventDefault();
      return;
    }
    if (strPay === '') {
      alert('Ошибка! Нет корректных комбинаций.');
      event.preventDefault();
      return;
    }
    //myInfoRef.current.textContent = 'Wait for fetch processing...';
    myInfoRef.current.textContent = 'Ожидайте информацию билета ...';
    setStatePay('2_' + draws + '_' + stake + strPay);
    /* e.g.
    Form request submitted by GET. Action URL is /formAKpay?q=xxx... with or for POST search as body e.g.: 
    user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
    */
    //event.preventDefault(); // NB! Use it to prevent sending standard POST/GET request to server with URL /formAKpay?q=xxxxx.....
    //GetData('pay'); // if use Fetch directly from html page.
  
  } // end of function handleSubmitPay(event).

  /*
  function numStrValue(strNum, auto) {
    return; 
    //
    if (!auto) return; 
    //if (!auto && strNum !== '00') return strNum; 
    //console.log(strNum);
    let strRet;
    if (strNum === '00') strRet = '';
    else strRet = strNum;
    return strRet;
    //
  }
  */

  function CalcSumKN() {
    let strCmb;
    let blnDuplicate = false;
    cmbnum = 0;
    console.log('CalcSumSL system cmbs:');
    console.log('system = ' + system);
    strCmb = cs;
    console.log(strCmb);
    if (strCmb.length === system) {
      if (strCmb.indexOf('00') === -1) {
        blnDuplicate = Duplicate(strCmb, system);
        if (! blnDuplicate) {
          cmbnum = cmbnum +  1;
        }
      }
    }
    strCmb = ck;
    console.log(strCmb);
    if (strCmb.length === system) {
      if (strCmb.indexOf('00') === -1) {
        blnDuplicate = Duplicate(strCmb, system);
        if (! blnDuplicate) {
          cmbnum = cmbnum +  1;
        }
      }
    }
    let tot = 0, ret = '';
    console.log(drawnum, stakenum, cmbnum);
    tot = 10 * drawnum * stakenum * cmbnum;
    ret = 'Стоимость билета: ' + tot.toString();
    myInfoRef2.current.textContent = ret;
    return ret;
  } // end of function CalcSumKN().


  // '?agent=65&type=2&command=pay&date=20200808&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0'
  // &board1=01_11_15_24_33_52

  const [pay, setStatePay] = useState('');
  //const [drkeno, setStateDrKeno] = useState('');

  /*
  const [draws, setStateDraws] = useState(1);
  const [c1, setStateC1] = useState(['00','00','00','00','00','00']);
  const [c2, setStateC2] = useState(['00','00','00','00','00','00']);
  const [c3, setStateC3] = useState(['00','00','00','00','00','00']);
  const [c4, setStateC4] = useState(['00','00','00','00','00','00']);
  const [c5, setStateC5] = useState(['00','00','00','00','00','00']);
  const [c6, setStateC6] = useState(['00','00','00','00','00','00']);
  const [a1, setStateAuto1] = useState(false);
  const [a2, setStateAuto2] = useState(false);
  const [a3, setStateAuto3] = useState(false);
  const [a4, setStateAuto4] = useState(false);
  const [a5, setStateAuto5] = useState(false);
  const [a6, setStateAuto6] = useState(false);
  */
  /*
  const [system_flag, setStateSystemFlag] = useState(false);
  const [system, setStateSystem] = useState(7);
  //const [cs, setStateCS] = useState(['00','00','00','00','00','00','00','00','00','00','00','00']);
  const [cs, setStateCS] = useState([]);
  const [as, setStateAutoS] = useState(false);
  //const [sum, setStateSum] = useState(15);
  */
  //const [system_flag, setStateSystemFlag] = useState(false); // use to switch rendering system/nonsystem.
  //const [stake, setStateStake] = useState(1);
  cs = [];
  ck = [];
  as = false;
  ak = false;
  system = 10;
  stake = 1;
  stakenum = 1;

  return (
  <div>
  <h3>Кено Лото играть:</h3>
  <h4>Задайте количество последовательных розыгрышей (от 1 до 7 или 14):</h4>
  <div>
    <p className="boardLabel">Розыгрышей</p>
    <input type="number" name="draws" defaultValue={draws} className="numbs" min="1" max="14" step="1"
    onChange={onChangeDraws} required></input>
    <p className="boardLabel">Если не задано, устанавливается 1 розыгрыш</p>
    <p className="boardLabel">Ставка</p>
    <input type="number" name="stake" defaultValue={stake} className="numbs" min="1" max="10" step="1"
    onChange={onChangeStake} required></input>
    <p className="boardLabel">Если не задано, устанавливается ставка 1</p>
    {/* <p className="boardLabel">Стоимость билета</p> */}
    <p name="sum" className="boardLabel" ref={myInfoRef2}></p>
  </div>
  <div>
    <div>
      <p className="boardLabel">Количество номеров в комбинации от 2 до 10</p>
      <input type="number" name="system" defaultValue={system} className="numbs" min="2" max="10" step="1"
      onChange={onChangeSystem} required></input>
      <div className = "boardSL">
        <p className="boardLabel">1 комбинация</p>
        <input ref={myInfoRefs1} type="number" name="ns1" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
        <input ref={myInfoRefs2} type="number" name="ns2" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
        {system >= 3
          ? <input ref={myInfoRefs3} type="number" name="ns3" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs3} hidden type="number" name="ns3" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 4
          ? <input ref={myInfoRefs4} type="number" name="ns4" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs4} hidden type="number" name="ns4" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 5
          ? <input ref={myInfoRefs5} type="number" name="ns5" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs5} hidden type="number" name="ns5" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 6
          ? <input ref={myInfoRefs6} type="number" name="ns6" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs6} hidden type="number" name="ns6" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 7
          ? <input ref={myInfoRefs7} type="number" name="ns7" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs7} hidden type="number" name="ns7" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 8
          ? <input ref={myInfoRefs8} type="number" name="ns8" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs8} hidden type="number" name="ns8" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 9
          ? <input ref={myInfoRefs9} type="number" name="ns9" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs9} hidden type="number" name="ns9" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 10
          ? <input ref={myInfoRefs10} type="number" name="ns10" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs10} hidden type="number" name="ns10" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        <p className="boardLabel">Авто</p>
        <select ref={myInfoRefsa}  name="as" onChange={onChangeAutoSystem}>
          <option value='N'>Нет</option>
          <option value='Y'>Да</option>
        </select>
      </div>
      <div className = "boardSL">
        <p className="boardLabel">2 комбинация</p>
        <input ref={myInfoRefk1} type="number" name="nk1" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
        <input ref={myInfoRefk2} type="number" name="nk2" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
        {system >= 3
          ? <input ref={myInfoRefk3} type="number" name="nk3" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefk3} hidden type="number" name="nk3" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 4
          ? <input ref={myInfoRefk4} type="number" name="nk4" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefk4} hidden type="number" name="nk4" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 5
          ? <input ref={myInfoRefk5} type="number" name="nk5" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefk5} hidden type="number" name="nk5" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 6
          ? <input ref={myInfoRefk6} type="number" name="nk6" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefk6} hidden type="number" name="nk6" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 7
          ? <input ref={myInfoRefk7} type="number" name="nk7" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefk7} hidden type="number" name="nk7" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 8
          ? <input ref={myInfoRefk8} type="number" name="nk8" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefk8} hidden type="number" name="nk8" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 9
          ? <input ref={myInfoRefk9} type="number" name="nk9" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefk9} hidden type="number" name="nk9" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        {system >= 10
          ? <input ref={myInfoRefk10} type="number" name="nk10" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefk10} hidden type="number" name="nk10" className="numbs" min="1" max="80" step="1" onChange={onChangeS}></input>}
        <p className="boardLabel">Авто</p>
        <select ref={myInfoRefka}  name="ak" onChange={onChangeAutoSystem}>
          <option value='N'>Нет</option>
          <option value='Y'>Да</option>
        </select>
      </div>
    </div>
  </div>
  {/* <button type="button" onClick={CalcSumSL}>Рассчитать стоимость билета.</button> */}
  <form role="search" method="get" action="formAKpay" onSubmit={handleSubmitKeno}>
    <input hidden type="search" name="q"  defaultValue={pay} placeholder="123" aria-label="Buy ticket"></input>
    <button type="submit">Купить билет</button>
  </form>
  </div>
  )
}

function SuperLoto() {

  function onChangeDraws(event) {
    //console.log(event.target.name);
    const MaxNum = 6;
    const MinNum = 1;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log('draws: ' + nbrN);
    if (Number.isNaN(nbrN) || (nbrN < MinNum) || (nbrN > MaxNum)) {
      //event.preventDefault();
      //console.log("Ошибка! Номер не задан корректно.");
      draws = '0'; // setStateDraws('1');
      drawnum = 0;
    }
    else {
      draws = strN; // setStateDraws(strN);
      drawnum = Number(strN);
    } 
    myInfoRef2.current.textContent = CalcSumSL();
  } // end of function onChangeDraws(event).

  function onChangeSystemFlag(event) {
    //console.log(event);
    //console.log('typeof ' + typeof(event));
    //console.log(event.target.name);
    let bnlSys = false;
    if (event.target.value === 'Y') {
      bnlSys = true;
      sysflg = true;
    }
    else {
      bnlSys = false;
      sysflg = false;
    }
    //system_flag = bnlSys; // setStateSystemFlag(bnlSys);
    setStateSystemFlag(bnlSys);
    draws = '1'; // setStateDraws(1);
    c1 = ['00','00','00','00','00','00'];
    c2 = ['00','00','00','00','00','00'];
    c3 = ['00','00','00','00','00','00'];
    c4 = ['00','00','00','00','00','00'];
    c5 = ['00','00','00','00','00','00'];
    c6 = ['00','00','00','00','00','00'];
    a1 = false;
    a2 = false;
    a3 = false;
    a4 = false;
    a5 = false;
    a6 = false;
    system = 7; //setStateSystem(7);
    cs = [];    //setStateCS([]);
    as = false; //setStateAutoS(false);
    drawnum = 1;
    sysnum = SysCmbSL(7);
    cmbnum = 0;
    //myInfoRef2.current.textContent = CalcSumSL();
    myInfoRef2.current.textContent = '';
  } // end of function onChangeSystemFlag(event).

  function onChangeSystem(event) {
    //setStateSystem('7');
    //sysnum = SysCmbSL(7);
    cmbnum = 0;
    //console.log(event.target.name);
    //console.log(event.target.value);
    console.log('onChangeSystem begin:')
    console.log(system);
    console.log(cs);
    console.log(as);
    const MaxNum = 12;
    const MinNum = 7;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      //setStateSystem('7');
      return;
    }
    if (nbrN < MinNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер меньше " + MinNum);
      //setStateSystem('7');
      return;
    }
    if (nbrN > MaxNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер больше " + MaxNum);
      //setStateSystem('7');
      return;
    }
    system = Number(strN); //setStateSystem(strN);
    //console.log(Number(strN));
    sysnum = SysCmbSL(Number(strN));
    cs = [];
    as = false;  // setStateAutoS(false);
    console.log('onChangeSystem end:')
    console.log(system);
    console.log(cs);
    console.log(as);
    myInfoRefsa.current.value = 'N'; // .textContent = 'N';
    myInfoRefs1.current.value = '';
    myInfoRefs2.current.value = '';
    myInfoRefs3.current.value = '';
    myInfoRefs4.current.value = '';
    myInfoRefs5.current.value = '';
    myInfoRefs6.current.value = '';
    myInfoRefs7.current.value = '';
    if (system >= 8) myInfoRefs8.current.value = '';
    if (system >= 9) myInfoRefs9.current.value = '';
    if (system >= 10) myInfoRefs10.current.value = '';
    if (system >= 11) myInfoRefs11.current.value = '';
    if (system >= 12) myInfoRefs12.current.value = '';
    system >= 8 ? myInfoRefs8.current.hidden = false : myInfoRefs8.current.hidden = true;
    system >= 9 ? myInfoRefs9.current.hidden = false : myInfoRefs9.current.hidden = true;
    system >= 10 ? myInfoRefs10.current.hidden = false : myInfoRefs10.current.hidden = true;
    system >= 11 ? myInfoRefs11.current.hidden = false : myInfoRefs11.current.hidden = true;
    system >= 12 ? myInfoRefs12.current.hidden = false : myInfoRefs12.current.hidden = true;
    myInfoRef2.current.textContent = CalcSumSL();
  } // end of function onChangeSystem(event).

  function onChange(event) {
    //console.log(event.target.name);
    const MaxNum = 52;
    const MinNum = 1;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      //return;
      strN = '00';
    }
    else if (nbrN < MinNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер меньше " + MinNum);
      //return;
      strN = '00';
    }
    else if (nbrN > MaxNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер больше " + MaxNum);
      //return;
      strN = '00';
    }
    else {
      strN = nbrN.toString();
    }
    if (strN.length < 2) {
      strN = '0' + strN;
    }
    let strPfx;
    let strCmb;
    if (event.target.name.indexOf('n1') !== -1) {
      strPfx = 'n1';
      strCmb = c1;
    }
    else if (event.target.name.indexOf('n2') !== -1) {
      strPfx = 'n2';
      strCmb = c2;
    }
    else if (event.target.name.indexOf('n3') !== -1) {
      strPfx = 'n3';
      strCmb = c3;
    }
    else if (event.target.name.indexOf('n4') !== -1) {
      strPfx = 'n4';
      strCmb = c4;
    }
    else if (event.target.name.indexOf('n5') !== -1) {
      strPfx = 'n5';
      strCmb = c5;
    }
    else if (event.target.name.indexOf('n6') !== -1) {
      strPfx = 'n6';
      strCmb = c6;
    } // end of combination selection.
    if (event.target.name === strPfx + '1') {
      //console.log(event.target.name, strPfx + '1');
      strCmb[0] = strN;
      if (strPfx === 'n1') c1 = strCmb; // setStateC1(strCmb);
      else if (strPfx === 'n2') c2 = strCmb; //  setStateC2(strCmb);
      else if (strPfx === 'n3') c3 = strCmb; //  setStateC3(strCmb);
      else if (strPfx === 'n4') c4 = strCmb; //  setStateC4(strCmb);
      else if (strPfx === 'n5') c5 = strCmb; //  setStateC5(strCmb);
      else if (strPfx === 'n6') c6 = strCmb; //  setStateC6(strCmb);
    }
    else if (event.target.name === strPfx + '2') {
      //console.log(event.target.name, strPfx + '2');
      strCmb[1] = strN;
      if (strPfx === 'n1') c1 = strCmb; //  setStateC1(strCmb);
      else if (strPfx === 'n2') c2 = strCmb; //  setStateC2(strCmb);
      else if (strPfx === 'n3') c3 = strCmb; //  setStateC3(strCmb);
      else if (strPfx === 'n4') c4 = strCmb; //  setStateC4(strCmb);
      else if (strPfx === 'n5') c5 = strCmb; //  setStateC5(strCmb);
      else if (strPfx === 'n6') c6 = strCmb; //  setStateC6(strCmb);
    }
    else if (event.target.name === strPfx + '3') {
     strCmb[2] = strN;
     if (strPfx === 'n1') c1 = strCmb; //  setStateC1(strCmb);
     else if (strPfx === 'n2') c2 = strCmb; //  setStateC2(strCmb);
     else if (strPfx === 'n3') c3 = strCmb; //  setStateC3(strCmb);
     else if (strPfx === 'n4') c4 = strCmb; //  setStateC4(strCmb);
     else if (strPfx === 'n5') c5 = strCmb; //  setStateC5(strCmb);
     else if (strPfx === 'n6') c6 = strCmb; //  setStateC6(strCmb);
   }
    else if (event.target.name === strPfx + '4') {
      strCmb[3] = strN;
      if (strPfx === 'n1') c1 = strCmb; //  setStateC1(strCmb);
      else if (strPfx === 'n2') c2 = strCmb; //   setStateC2(strCmb);
      else if (strPfx === 'n3') c3 = strCmb; //   setStateC3(strCmb);
      else if (strPfx === 'n4') c4 = strCmb; //   setStateC4(strCmb);
      else if (strPfx === 'n5') c5 = strCmb; //   setStateC5(strCmb);
      else if (strPfx === 'n6') c6 = strCmb; //   setStateC6(strCmb);
    }
    else if (event.target.name === strPfx + '5') {
      strCmb[4] = strN;
      if (strPfx === 'n1') c1 = strCmb; //   setStateC1(strCmb);
      else if (strPfx === 'n2') c2 = strCmb; //   setStateC2(strCmb);
      else if (strPfx === 'n3') c3 = strCmb; //   setStateC3(strCmb);
      else if (strPfx === 'n4') c4 = strCmb; //   setStateC4(strCmb);
      else if (strPfx === 'n5') c5 = strCmb; //   setStateC5(strCmb);
      else if (strPfx === 'n6') c6 = strCmb; //   setStateC6(strCmb);
    }
    else if (event.target.name === strPfx + '6') {
      strCmb[5] = strN;
      if (strPfx === 'n1') c1 = strCmb; //   setStateC1(strCmb);
      else if (strPfx === 'n2') c2 = strCmb; //   setStateC2(strCmb);
      else if (strPfx === 'n3') c3 = strCmb; //   setStateC3(strCmb);
      else if (strPfx === 'n4') c4 = strCmb; //   setStateC4(strCmb);
      else if (strPfx === 'n5') c5 = strCmb; //   setStateC5(strCmb);
      else if (strPfx === 'n6') c6 = strCmb; //   setStateC6(strCmb);
    } // end of number in combination selection.
    //console.log(strN);
    //console.log(event.target.name); // e.g. "n11"
    //console.log(strPfx);
    if (event.target.name === 'n11') myInfoRef11.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n12') myInfoRef12.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n13') myInfoRef13.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n14') myInfoRef14.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n15') myInfoRef15.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n16') myInfoRef16.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n21') myInfoRef21.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n22') myInfoRef22.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n23') myInfoRef23.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n24') myInfoRef24.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n25') myInfoRef25.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n26') myInfoRef26.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n31') myInfoRef31.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n32') myInfoRef32.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n33') myInfoRef33.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n34') myInfoRef34.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n35') myInfoRef35.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n36') myInfoRef36.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n41') myInfoRef41.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n42') myInfoRef42.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n43') myInfoRef43.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n44') myInfoRef44.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n45') myInfoRef45.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n46') myInfoRef46.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n51') myInfoRef51.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n52') myInfoRef52.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n53') myInfoRef53.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n54') myInfoRef54.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n55') myInfoRef55.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n56') myInfoRef56.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n61') myInfoRef61.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n62') myInfoRef62.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n63') myInfoRef63.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n64') myInfoRef64.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n65') myInfoRef65.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n66') myInfoRef66.current.value = strN === '00' ? '' : strN;
    myInfoRef2.current.textContent = CalcSumSL();
  } // function onChange(event).

  function onChangeS(event) {
    //console.log(event.target.name);
    const MaxNum = 52;
    const MinNum = 1;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      //return;
      strN = '00';
    }
    else if (nbrN < MinNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер меньше " + MinNum);
      //return;
      strN = '00';
    }
    else if (nbrN > MaxNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер больше " + MaxNum);
      //return;
      strN = '00';
    }
    else {
      strN = nbrN.toString();
    }
    if (strN.length < 2) {
      strN = '0' + strN;
    }
    let strPfx;
    let strCmb;
    strPfx = 'ns';
    strCmb = cs;
    console.log('onChangeS strCmb begin:');
    console.log(strCmb);
    if (event.target.name === strPfx + '1') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 0) strCmb[0] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '2') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 1) strCmb[1] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '3') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 2) strCmb[2] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '4') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 3) strCmb[3] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '5') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 4) strCmb[4] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '6') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 5) strCmb[5] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '7') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 6) strCmb[6] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '8') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 7) strCmb[7] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '9') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 8) strCmb[8] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '10') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 9) strCmb[9] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '11') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 10) strCmb[10] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '12') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 11) strCmb[11] = strN;
      else strCmb.push(strN);
    }
    console.log('onChangeS strCmb end:');
    console.log(strCmb);
    cs = strCmb; //setStateCS(strCmb);
    myInfoRefs1.current.value = cs[0] === '00' ? '' : cs[0];
    myInfoRefs2.current.value = cs[1] === '00' ? '' : cs[1];
    myInfoRefs3.current.value = cs[2] === '00' ? '' : cs[2];
    myInfoRefs4.current.value = cs[3] === '00' ? '' : cs[3];
    myInfoRefs5.current.value = cs[4] === '00' ? '' : cs[4];
    myInfoRefs6.current.value = cs[5] === '00' ? '' : cs[5];
    myInfoRefs7.current.value = cs[6] === '00' ? '' : cs[6];
    if (system >= 8) myInfoRefs8.current.value = cs[7] === '00' ? '' : cs[7];
    if (system >= 9) myInfoRefs9.current.value = cs[8] === '00' ? '' : cs[8];
    if (system >= 10) myInfoRefs10.current.value = cs[9] === '00' ? '' : cs[9];
    if (system >= 11) myInfoRefs11.current.value = cs[10] === '00' ? '' : cs[10];
    if (system >= 12) myInfoRefs12.current.value = cs[11] === '00' ? '' : cs[11];
    myInfoRef2.current.textContent = CalcSumSL();
  } // end of function onChangeS(event).

  function onChangeAuto(event) {
    //console.log(event);
    //console.log('typeof ' + typeof(event));
    //console.log(event.target.name);
    //let strA = event.target.value;
    //console.log(strA);
    //console.log('typeof ' + typeof(strA));
    let strCmb;
    let strArr = ['','','','','',''];
    let bnlAuto = false;
    let i = 0, j;
    if (event.target.value === 'Y') {
      let numArr = [0,0,0,0,0,0];
      let strNum;
      let current, result;
      let max = 52;
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
      //console.log(strArr);
      strArr.sort();
      bnlAuto = true;
    }
    else {
      strArr=['00','00','00','00','00','00'];
      bnlAuto = false;
    }
    console.log('strArr auto:');
    console.log(strArr);
    if (event.target.name === 'a1') {
      strCmb = c1;
      for (i=0; i<=5; i++) strCmb[i] = strArr[i];
      c1 = strCmb; //  setStateC1(strCmb);
      a1 = bnlAuto; //  setStateAuto1(bnlAuto);
      myInfoRef11.current.value = strCmb[0] === '00' ? '' : strCmb[0];
      myInfoRef12.current.value = strCmb[1] === '00' ? '' : strCmb[1];
      myInfoRef13.current.value = strCmb[2] === '00' ? '' : strCmb[2];
      myInfoRef14.current.value = strCmb[3] === '00' ? '' : strCmb[3];
      myInfoRef15.current.value = strCmb[4] === '00' ? '' : strCmb[4];
      myInfoRef16.current.value = strCmb[5] === '00' ? '' : strCmb[5];
    }
    else if (event.target.name === 'a2') {
      strCmb = c2;
      for (i=0; i<=5; i++) strCmb[i] = strArr[i];
      c2 = strCmb; //  setStateC2(strCmb);
      a2 = bnlAuto; // setStateAuto2(bnlAuto);
      myInfoRef21.current.value = strCmb[0] === '00' ? '' : strCmb[0];
      myInfoRef22.current.value = strCmb[1] === '00' ? '' : strCmb[1];
      myInfoRef23.current.value = strCmb[2] === '00' ? '' : strCmb[2];
      myInfoRef24.current.value = strCmb[3] === '00' ? '' : strCmb[3];
      myInfoRef25.current.value = strCmb[4] === '00' ? '' : strCmb[4];
      myInfoRef26.current.value = strCmb[5] === '00' ? '' : strCmb[5];
    }
    else if (event.target.name === 'a3') {
      strCmb = c3;
      for (i=0; i<=5; i++) strCmb[i] = strArr[i];
      c3 = strCmb; //  setStateC3(strCmb);
      a3 = bnlAuto; // setStateAuto3(bnlAuto);
      myInfoRef31.current.value = strCmb[0] === '00' ? '' : strCmb[0];
      myInfoRef32.current.value = strCmb[1] === '00' ? '' : strCmb[1];
      myInfoRef33.current.value = strCmb[2] === '00' ? '' : strCmb[2];
      myInfoRef34.current.value = strCmb[3] === '00' ? '' : strCmb[3];
      myInfoRef35.current.value = strCmb[4] === '00' ? '' : strCmb[4];
      myInfoRef36.current.value = strCmb[5] === '00' ? '' : strCmb[5];
    }
    else if (event.target.name === 'a4') {
      strCmb = c4;
      for (i=0; i<=5; i++) strCmb[i] = strArr[i];
      c4 = strCmb; //  setStateC4(strCmb);
      a4 = bnlAuto; // setStateAuto4(bnlAuto);
      myInfoRef41.current.value = strCmb[0] === '00' ? '' : strCmb[0];
      myInfoRef42.current.value = strCmb[1] === '00' ? '' : strCmb[1];
      myInfoRef43.current.value = strCmb[2] === '00' ? '' : strCmb[2];
      myInfoRef44.current.value = strCmb[3] === '00' ? '' : strCmb[3];
      myInfoRef45.current.value = strCmb[4] === '00' ? '' : strCmb[4];
      myInfoRef46.current.value = strCmb[5] === '00' ? '' : strCmb[5];
    }
    else if (event.target.name === 'a5') {
      strCmb = c5;
      for (i=0; i<=5; i++) strCmb[i] = strArr[i];
      c5 = strCmb; //  setStateC5(strCmb);
      a5 = bnlAuto; // setStateAuto5(bnlAuto);
      myInfoRef51.current.value = strCmb[0] === '00' ? '' : strCmb[0];
      myInfoRef52.current.value = strCmb[1] === '00' ? '' : strCmb[1];
      myInfoRef53.current.value = strCmb[2] === '00' ? '' : strCmb[2];
      myInfoRef54.current.value = strCmb[3] === '00' ? '' : strCmb[3];
      myInfoRef55.current.value = strCmb[4] === '00' ? '' : strCmb[4];
      myInfoRef56.current.value = strCmb[5] === '00' ? '' : strCmb[5];
    }
    else if (event.target.name === 'a6') {
      strCmb = c6;
      for (i=0; i<=5; i++) strCmb[i] = strArr[i];
      c6 = strCmb; //  setStateC6(strCmb);
      a6 = bnlAuto; // setStateAuto6(bnlAuto);
      myInfoRef61.current.value = strCmb[0] === '00' ? '' : strCmb[0];
      myInfoRef62.current.value = strCmb[1] === '00' ? '' : strCmb[1];
      myInfoRef63.current.value = strCmb[2] === '00' ? '' : strCmb[2];
      myInfoRef64.current.value = strCmb[3] === '00' ? '' : strCmb[3];
      myInfoRef65.current.value = strCmb[4] === '00' ? '' : strCmb[4];
      myInfoRef66.current.value = strCmb[5] === '00' ? '' : strCmb[5];
    }
    myInfoRef2.current.textContent = CalcSumSL();
  } // end of function onChangeAuto(event)

  function onChangeAutoSystem(event) {
    //console.log(event);
    //console.log('typeof ' + typeof(event));
    //console.log(event.target.name);
    //let strA = event.target.value;
    //console.log(strA);
    //console.log('typeof ' + typeof(strA));
    //let strArr = ['','','','','','','','','','','',''];
    let strArr = [];
    let bnlAuto = false;
    console.log('numSys: ' + system);
    let i = 0, j;
    if (event.target.value === 'Y') {
      let numArr = [0,0,0,0,0,0,0,0,0,0,0,0];
      let strNum;
      let current, result;
      let max = 52;
      do {
        current = Math.floor(Math.random() * (max));
        result = current + 1
        //console.log(current, result);
        if (numArr.indexOf(result) === -1) {
          for (j=0; j < system; j++) {
            if (numArr[j] === 0) {
              numArr[j] = result;
              strNum = numArr[j].toString();
              if (strNum.length < 2) strNum = '0' + strNum;
              //strArr[j] = strNum;
              strArr.push(strNum);
              i = i + 1;
              break;
            }
          }
        }
      } while (i < system);
      console.log(strArr);
      strArr.sort();
      bnlAuto = true;
    }
    else {
      //strArr=['00','00','00','00','00','00','00','00','00','00','00','00'];
      let i = 0;
      do {
        strArr.push('00');
        i = i + 1;
      } while (i < system);
      bnlAuto = false;
    }
    console.log(strArr);
    for (i=0; i<system; i++) cs[i] = strArr[i];
    as = bnlAuto; //setStateAutoS(bnlAuto);
    myInfoRefs1.current.value = cs[0] === '00' ? '' : cs[0];
    myInfoRefs2.current.value = cs[1] === '00' ? '' : cs[1];
    myInfoRefs3.current.value = cs[2] === '00' ? '' : cs[2];
    myInfoRefs4.current.value = cs[3] === '00' ? '' : cs[3];
    myInfoRefs5.current.value = cs[4] === '00' ? '' : cs[4];
    myInfoRefs6.current.value = cs[5] === '00' ? '' : cs[5];
    myInfoRefs7.current.value = cs[6] === '00' ? '' : cs[6];
    if (system >= 8) myInfoRefs8.current.value = cs[7] === '00' ? '' : cs[7];
    if (system >= 9) myInfoRefs9.current.value = cs[8] === '00' ? '' : cs[8];
    if (system >= 10) myInfoRefs10.current.value = cs[9] === '00' ? '' : cs[9];
    if (system >= 11) myInfoRefs11.current.value = cs[10] === '00' ? '' : cs[10];
    if (system >= 12) myInfoRefs12.current.value = cs[11] === '00' ? '' : cs[11];

    myInfoRef2.current.textContent = CalcSumSL();
  } // end of function onChangeAutoSystem(event).

  function Duplicate(strCmb, count) {
    let blnDuplicate = false;
    let k, j;
    for (k=0; k<count; k++) {
      for (j=0; j<count; j++) {
        if (j !== k) {
          if (strCmb[j] === strCmb[k]) {
            blnDuplicate = true;
            //alert('Ошибка! Дублирование номера в xxx комбинации');
            break;
          }
        }
      }
      if (blnDuplicate) break;
    }
    return blnDuplicate;
  }

  function handleSubmitSuperLoto(event) {
    //console.log(event.search); // event.search e.g. '?q=6_1...';
    //console.log(c1);
    //console.log(c2);
    //console.log(c3);
    //console.log(c4);
    //console.log(c5);
    //console.log(c6);
    //console.log(cs);
    let strCmb;
    let strPay = ''; // e.g. will later start as '6_1'
    let blnDuplicate = false;
    //console.log(draws);
    //console.log(strPay);
    if (system_flag) {
      strCmb = cs;
      let sys = Number(system);
      //console.log(strCmb);
      let k;
      if (strCmb.length === system && strCmb.indexOf('00') === -1) {
        blnDuplicate = Duplicate(strCmb, sys);
        if (! blnDuplicate) {
          if (as) {
            strPay = strPay + '_sa';
          }
          else {
            strPay = strPay + '_sm';
          }
          strCmb.sort();
          //strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4] + '_' + strCmb[5] ;
          for (k=0; k<sys; k++) strPay = strPay + '_' + strCmb[k] ;
        }
        else alert('Ошибка! Дублирование номера в системной комбинации');
      }
    } // end of if (system_flag) {
    else {
      for (let i = 1; i < 7; i++) {
        if (i === 1) {
          strCmb = c1;
          //console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              if (a1) {
                strPay = strPay + '_a';
              }
              else {
                strPay = strPay + '_m';
              }
              strCmb.sort();
              strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4] + '_' + strCmb[5] ;
            }
            else {
              alert('Ошибка! Дублирование номера в первой комбинации');
              break;
            }
          }
        }
        else if (i === 2) {
          strCmb = c2;
          //console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              if (a2) {
                strPay = strPay + '_a';
              }
              else {
                strPay = strPay + '_m';
              }
              strCmb.sort();
              strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4] + '_' + strCmb[5] ;
            }
            else {
              alert('Ошибка! Дублирование номера во второй комбинации');
              break;
            }
          }
        }
        else if (i === 3) {
          strCmb = c3;
          //console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              if (a3) {
                strPay = strPay + '_a';
              }
              else {
                strPay = strPay + '_m';
              }
              strCmb.sort();
              strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4] + '_' + strCmb[5] ;
            }
            else {
              alert('Ошибка! Дублирование номера в третьей комбинации');
              break;
            }
          }
        }
        else if (i === 4) {
          strCmb = c4;
          //console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              if (a4) {
                strPay = strPay + '_a';
              }
              else {
                strPay = strPay + '_m';
              }
              strCmb.sort();
              strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4] + '_' + strCmb[5] ;
            }
            else {
              alert('Ошибка! Дублирование номера в четвертой комбинации');
              break;
            }
          }
        }
        else if (i === 5) {
          strCmb = c5;
          //console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              if (a5) {
                strPay = strPay + '_a';
              }
              else {
                strPay = strPay + '_m';
              }
              strCmb.sort();
              strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4] + '_' + strCmb[5] ;
            }
            else {
              alert('Ошибка! Дублирование номера в пятой комбинации');
              break;
            }
          }
        }
        else if (i === 6) {
          strCmb = c6;
          //console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              if (a6) {
                strPay = strPay + '_a';
              }
              else {
                strPay = strPay + '_m';
              }
              strCmb.sort();
              strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4] + '_' + strCmb[5] ;
            }
            else {
              alert('Ошибка! Дублирование номера в шестой комбинации');
              break;
            }
          }
        }
      } //end of (let i = 1; i < 7; i++).
    } // end of NOT if (system_flag) {
    //console.log(strPay);
    if (blnDuplicate) {
      //alert('Ошибка! Есть некорректные комбинации.');
      event.preventDefault();
      return;
    }
    if (strPay === '') {
      alert('Ошибка! Нет корректных комбинаций.');
      event.preventDefault();
      return;
    }
    //myInfoRef.current.textContent = 'Wait for fetch processing...';
    myInfoRef.current.textContent = 'Ожидайте информацию билета ...';
    setStatePay('6_' + draws + '_' + stake + strPay);
    /* e.g.
    Form request submitted by GET. Action URL is /formAKpay?q=xxx... with or for POST search as body e.g.: 
    user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
    */
    //event.preventDefault(); // NB! Use it to prevent sending standard POST/GET request to server with URL /formAKpay?q=xxxxx.....
    //GetData('pay'); // if use Fetch directly from html page.
  
  } // end of function handleSubmitPay(event).

  /*
  function numStrValue(strNum, auto) {
    return; 
    //
    if (!auto) return; 
    //if (!auto && strNum !== '00') return strNum; 
    //console.log(strNum);
    let strRet;
    if (strNum === '00') strRet = '';
    else strRet = strNum;
    return strRet;
    //
  }
  */

  function CalcSumSL() {
    let strCmb;
    let blnDuplicate = false;
    cmbnum = 0;
    if (sysflg) { // if (system_flag)
      console.log('CalcSumSL system cmbs:');
      console.log('system = ' + system);
      strCmb = cs;
      console.log(strCmb);
      if (strCmb.length === system) {
        if (strCmb.indexOf('00') === -1) {
          blnDuplicate = Duplicate(strCmb, system);
          if (! blnDuplicate) {
            cmbnum = 1;
          }
          //else alert('Ошибка! Дублирование номеров в системной комбинации');
        }
      }
    } // end of if (system_flag) {
    else {
      console.log('CalcSumSL cmbs:');
      for (let i = 1; i < 7; i++) {
        if (i === 1) {
          strCmb = c1;
          console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              cmbnum = cmbnum + 1;
            }
            //else alert('Ошибка! Дублирование номеров в комбинации ' + i.toString());
          }
        }
        else if (i === 2) {
          strCmb = c2;
          console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              cmbnum = cmbnum + 1;
            }
          }
        }
        else if (i === 3) {
          strCmb = c3;
          console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              cmbnum = cmbnum + 1;
            }
          }
        }
        else if (i === 4) {
          strCmb = c4;
          console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              cmbnum = cmbnum + 1;
            }
          }
        }
        else if (i === 5) {
          strCmb = c5;
          console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              cmbnum = cmbnum + 1;
            }
          }
        }
        else if (i === 6) {
          strCmb = c6;
          console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              cmbnum = cmbnum + 1;
            }
          }
        }
      } // end of for (let i = 1; i < 7; i++).
    } // end of NOT if (system_flag).
    let tot = 0, ret = '';
    console.log(drawnum, sysnum, cmbnum);
    if (system_flag) {
      tot = 15 * drawnum * sysnum * cmbnum;
    }
    else {
      tot = 15 * drawnum * cmbnum;
    }
    ret = 'Стоимость билета: ' + tot.toString();
    myInfoRef2.current.textContent = ret;
    return ret;
  } // end of function CalcSumSL().

  function SysCmbSL(sys) {
    if (sys === 7) return 7;
    else if (sys === 8) return 28;
    else if (sys === 9) return 84;
    else if (sys === 10) return 210;
    else if (sys === 11) return 462;
    else if (sys === 12) return 924;
  }
  
  // '?agent=65&type=2&command=pay&date=20200808&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0'
  // &board1=01_11_15_24_33_52

  const [pay, setStatePay] = useState('');
  /*
  const [draws, setStateDraws] = useState(1);
  const [c1, setStateC1] = useState(['00','00','00','00','00','00']);
  const [c2, setStateC2] = useState(['00','00','00','00','00','00']);
  const [c3, setStateC3] = useState(['00','00','00','00','00','00']);
  const [c4, setStateC4] = useState(['00','00','00','00','00','00']);
  const [c5, setStateC5] = useState(['00','00','00','00','00','00']);
  const [c6, setStateC6] = useState(['00','00','00','00','00','00']);
  const [a1, setStateAuto1] = useState(false);
  const [a2, setStateAuto2] = useState(false);
  const [a3, setStateAuto3] = useState(false);
  const [a4, setStateAuto4] = useState(false);
  const [a5, setStateAuto5] = useState(false);
  const [a6, setStateAuto6] = useState(false);
  */
  /*
  const [system_flag, setStateSystemFlag] = useState(false);
  const [system, setStateSystem] = useState(7);
  //const [cs, setStateCS] = useState(['00','00','00','00','00','00','00','00','00','00','00','00']);
  const [cs, setStateCS] = useState([]);
  const [as, setStateAutoS] = useState(false);
  //const [sum, setStateSum] = useState(15);
  */
  const [system_flag, setStateSystemFlag] = useState(false); // use to switch rendering system/nonsystem.
  c1 = ['00','00','00','00','00','00'];
  c2 = ['00','00','00','00','00','00'];
  c3 = ['00','00','00','00','00','00'];
  c4 = ['00','00','00','00','00','00'];
  c5 = ['00','00','00','00','00','00'];
  c6 = ['00','00','00','00','00','00'];
  a1 = false;
  a2 = false;
  a3 = false;
  a4 = false;
  a5 = false;
  a6 = false;
  system = 7;

  return (
  <div>
  <h3>Супер Лото играть:</h3>
  <h4>Задайте количество последовательных розыгрышей (от 1 до 6):</h4>
  <div>
    <p className="boardLabel">Розыгрышей</p>
    <input type="number" name="draws" defaultValue={draws} className="numbs" min="1" max="6" step="1"
    onChange={onChangeDraws} required></input>
    <p className="boardLabel">Если не задано, устанавливается 1 розыгрыш</p>
    {/* <p className="boardLabel">Стоимость билета</p> */}
    <p name="sum" className="boardLabel" ref={myInfoRef2}></p>
  </div>
  {!system_flag && <div>
  <h4>Задайте от 1 до 6 комбинаций номеров (от 1 до 52):</h4>
  <div className = "boardSL">
      <p className="boardLabel">1 комбинация</p>
      <input ref={myInfoRef11} type="number" name="n11" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef12} type="number" name="n12" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef13} type="number" name="n13" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef14} type="number" name="n14" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef15} type="number" name="n15" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef16} type="number" name="n16" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <p className="boardLabel">Авто</p>
      <select name="a1" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">2 комбинация</p>
      <input ref={myInfoRef21} type="number" name="n21" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef22} type="number" name="n22" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef23} type="number" name="n23" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef24} type="number" name="n24" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef25} type="number" name="n25" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef26} type="number" name="n26" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <p className="boardLabel">Авто</p>
      <select name="a2" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">3 комбинация</p>
      <input ref={myInfoRef31} type="number" name="n31" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef32} type="number" name="n32" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef33} type="number" name="n33" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef34} type="number" name="n34" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef35} type="number" name="n35" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef36} type="number" name="n36" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <p className="boardLabel">Авто</p>
      <select name="a3" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">4 комбинация</p>
      <input ref={myInfoRef41} type="number" name="n41" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef42} type="number" name="n42" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef43} type="number" name="n43" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef44} type="number" name="n44" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef45} type="number" name="n45" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef46} type="number" name="n46" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <p className="boardLabel">Авто</p>
      <select name="a4" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">5 комбинация</p>
      <input ref={myInfoRef51} type="number" name="n51" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef52} type="number" name="n52" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef53} type="number" name="n53" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef54} type="number" name="n54" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef55} type="number" name="n55" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef56} type="number" name="n56" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <p className="boardLabel">Авто</p>
      <select name="a5" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">6 комбинация</p>
      <input ref={myInfoRef61} type="number" name="n61" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef62} type="number" name="n62" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef63} type="number" name="n63" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef64} type="number" name="n64" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef65} type="number" name="n65" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <input ref={myInfoRef66} type="number" name="n66" className="numbs" min="1" max="52" step="1" onChange={onChange}></input>
      <p className="boardLabel">Авто</p>
      <select name="a6" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  </div>
  } {/* end of {!system_flag */}
  <div>
    <p className="boardLabel">Использовать системную игру</p>
      <select name="as" onChange={onChangeSystemFlag}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
    {system_flag && <div>
      <p className="boardLabel">Система</p>
      <input type="number" name="system" defaultValue={system} className="numbs" min="7" max="12" step="1"
      onChange={onChangeSystem} required></input>
      <p className="boardLabel">Если не задано, устанавливается система 7</p>
      <div className = "boardSL">
        <p className="boardLabel">Системная комбинация</p>
        <input ref={myInfoRefs1} type="number" name="ns1" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>
        <input ref={myInfoRefs2} type="number" name="ns2" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>
        <input ref={myInfoRefs3} type="number" name="ns3" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>
        <input ref={myInfoRefs4} type="number" name="ns4" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>
        <input ref={myInfoRefs5} type="number" name="ns5" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>
        <input ref={myInfoRefs6} type="number" name="ns6" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>
        <input ref={myInfoRefs7} type="number" name="ns7" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>
        {system >= 8
          ? <input ref={myInfoRefs8} type="number" name="ns8" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs8} hidden type="number" name="ns8" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>}
        {system >= 9
          ? <input ref={myInfoRefs9} type="number" name="ns9" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs9} hidden type="number" name="ns9" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>}
        {system >= 10
          ? <input ref={myInfoRefs10} type="number" name="ns10" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs10} hidden type="number" name="ns10" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>}
        {system >= 11
          ? <input ref={myInfoRefs11} type="number" name="ns11" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs11} hidden type="number" name="ns11" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>}
        {system >= 12
          ? <input ref={myInfoRefs12} type="number" name="ns12" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs12} hidden type="number" name="ns12" className="numbs" min="1" max="52" step="1" onChange={onChangeS}></input>}
        <p className="boardLabel">Авто</p>
        <select ref={myInfoRefsa}  name="as" onChange={onChangeAutoSystem}>
          <option value='N'>Нет</option>
          <option value='Y'>Да</option>
        </select>
      </div>
    </div>
    } {/* end of {system_flag */}
  </div>
  {/* <button type="button" onClick={CalcSumSL}>Рассчитать стоимость билета.</button> */}
  <form role="search" method="get" action="formAKpay" onSubmit={handleSubmitSuperLoto}>
    <input hidden type="search" name="q"  defaultValue={pay} placeholder="123" aria-label="Buy ticket"></input>
    <button type="submit">Купить билет</button>
  </form>
  </div>
  )
} // end of function SuperLoto.

function Maxima() {

  function onChangeDraws(event) {
    //console.log(event.target.name);
    const MaxNum = 6;
    const MinNum = 1;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log('draws: ' + nbrN);
    if (Number.isNaN(nbrN) || (nbrN < MinNum) || (nbrN > MaxNum)) {
      //event.preventDefault();
      //console.log("Ошибка! Номер не задан корректно.");
      draws = '0'; // setStateDraws('1');
      drawnum = 0;
    }
    else {
      draws = strN; // setStateDraws(strN);
      drawnum = Number(strN);
    } 
    myInfoRef2.current.textContent = CalcSumMX();
  } // end of function onChangeDraws(event).

  function onChangeSystemFlag(event) {
    //console.log(event);
    //console.log('typeof ' + typeof(event));
    //console.log(event.target.name);
    let bnlSys = false;
    if (event.target.value === 'Y') {
      bnlSys = true;
      sysflg = true;
    }
    else {
      bnlSys = false;
      sysflg = false;
    }
    //system_flag = bnlSys; // setStateSystemFlag(bnlSys);
    setStateSystemFlag(bnlSys);
    draws = '1'; // setStateDraws(1);
    c1 = ['00','00','00','00','00'];
    c2 = ['00','00','00','00','00'];
    c3 = ['00','00','00','00','00'];
    c4 = ['00','00','00','00','00'];
    c5 = ['00','00','00','00','00'];
    //c6 = ['00','00','00','00','00','00'];
    a1 = false;
    a2 = false;
    a3 = false;
    a4 = false;
    a5 = false;
    //a6 = false;
    system = 6; //setStateSystem(7);
    cs = [];    //setStateCS([]);
    as = false; //setStateAutoS(false);
    drawnum = 1;
    sysnum = SysCmbMX(6);
    cmbnum = 0;
    //myInfoRef2.current.textContent = CalcSumSL();
    myInfoRef2.current.textContent = '';
  } // end of function onChangeSystemFlag(event).

  function onChangeSystem(event) {
    //setStateSystem('7');
    //sysnum = SysCmbSL(7);
    cmbnum = 0;
    //console.log(event.target.name);
    //console.log(event.target.value);
    console.log('onChangeSystem begin:')
    console.log(system);
    console.log(cs);
    console.log(as);
    const MaxNum = 12;
    const MinNum = 6;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      //setStateSystem('6');
      return;
    }
    if (nbrN < MinNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер меньше " + MinNum);
      //setStateSystem('6');
      return;
    }
    if (nbrN > MaxNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер больше " + MaxNum);
      //setStateSystem('6');
      return;
    }
    system = Number(strN); //setStateSystem(strN);
    //console.log(Number(strN));
    sysnum = SysCmbMX(Number(strN));
    cs = [];
    as = false;  // setStateAutoS(false);
    console.log('onChangeSystem end:')
    console.log(system);
    console.log(cs);
    console.log(as);
    myInfoRefsa.current.value = 'N'; // .textContent = 'N';
    myInfoRefs1.current.value = '';
    myInfoRefs2.current.value = '';
    myInfoRefs3.current.value = '';
    myInfoRefs4.current.value = '';
    myInfoRefs5.current.value = '';
    myInfoRefs6.current.value = '';
    if (system >= 7) myInfoRefs7.current.value = '';
    if (system >= 8) myInfoRefs8.current.value = '';
    if (system >= 9) myInfoRefs9.current.value = '';
    if (system >= 10) myInfoRefs10.current.value = '';
    if (system >= 11) myInfoRefs11.current.value = '';
    if (system >= 12) myInfoRefs12.current.value = '';
    system >= 7 ? myInfoRefs7.current.hidden = false : myInfoRefs7.current.hidden = true;
    system >= 8 ? myInfoRefs8.current.hidden = false : myInfoRefs8.current.hidden = true;
    system >= 9 ? myInfoRefs9.current.hidden = false : myInfoRefs9.current.hidden = true;
    system >= 10 ? myInfoRefs10.current.hidden = false : myInfoRefs10.current.hidden = true;
    system >= 11 ? myInfoRefs11.current.hidden = false : myInfoRefs11.current.hidden = true;
    system >= 12 ? myInfoRefs12.current.hidden = false : myInfoRefs12.current.hidden = true;
    myInfoRef2.current.textContent = CalcSumMX();
  } // end of function onChangeSystem(event).

  function onChange(event) {
    //console.log(event.target.name);
    const MaxNum = 45;
    const MinNum = 1;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      //return;
      strN = '00';
    }
    else if (nbrN < MinNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер меньше " + MinNum);
      //return;
      strN = '00';
    }
    else if (nbrN > MaxNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер больше " + MaxNum);
      //return;
      strN = '00';
    }
    else {
      strN = nbrN.toString();
    }
    if (strN.length < 2) {
      strN = '0' + strN;
    }
    let strPfx;
    let strCmb;
    if (event.target.name.indexOf('n1') !== -1) {
      strPfx = 'n1';
      strCmb = c1;
    }
    else if (event.target.name.indexOf('n2') !== -1) {
      strPfx = 'n2';
      strCmb = c2;
    }
    else if (event.target.name.indexOf('n3') !== -1) {
      strPfx = 'n3';
      strCmb = c3;
    }
    else if (event.target.name.indexOf('n4') !== -1) {
      strPfx = 'n4';
      strCmb = c4;
    }
    else if (event.target.name.indexOf('n5') !== -1) {
      strPfx = 'n5';
      strCmb = c5;
    }
    else if (event.target.name.indexOf('n6') !== -1) {
      strPfx = 'n6';
      strCmb = c6;
    } // end of combination selection.
    if (event.target.name === strPfx + '1') {
      //console.log(event.target.name, strPfx + '1');
      strCmb[0] = strN;
      if (strPfx === 'n1') c1 = strCmb; // setStateC1(strCmb);
      else if (strPfx === 'n2') c2 = strCmb; //  setStateC2(strCmb);
      else if (strPfx === 'n3') c3 = strCmb; //  setStateC3(strCmb);
      else if (strPfx === 'n4') c4 = strCmb; //  setStateC4(strCmb);
      else if (strPfx === 'n5') c5 = strCmb; //  setStateC5(strCmb);
      else if (strPfx === 'n6') c6 = strCmb; //  setStateC6(strCmb);
    }
    else if (event.target.name === strPfx + '2') {
      //console.log(event.target.name, strPfx + '2');
      strCmb[1] = strN;
      if (strPfx === 'n1') c1 = strCmb; //  setStateC1(strCmb);
      else if (strPfx === 'n2') c2 = strCmb; //  setStateC2(strCmb);
      else if (strPfx === 'n3') c3 = strCmb; //  setStateC3(strCmb);
      else if (strPfx === 'n4') c4 = strCmb; //  setStateC4(strCmb);
      else if (strPfx === 'n5') c5 = strCmb; //  setStateC5(strCmb);
      else if (strPfx === 'n6') c6 = strCmb; //  setStateC6(strCmb);
    }
    else if (event.target.name === strPfx + '3') {
     strCmb[2] = strN;
     if (strPfx === 'n1') c1 = strCmb; //  setStateC1(strCmb);
     else if (strPfx === 'n2') c2 = strCmb; //  setStateC2(strCmb);
     else if (strPfx === 'n3') c3 = strCmb; //  setStateC3(strCmb);
     else if (strPfx === 'n4') c4 = strCmb; //  setStateC4(strCmb);
     else if (strPfx === 'n5') c5 = strCmb; //  setStateC5(strCmb);
     else if (strPfx === 'n6') c6 = strCmb; //  setStateC6(strCmb);
    }
    else if (event.target.name === strPfx + '4') {
      strCmb[3] = strN;
      if (strPfx === 'n1') c1 = strCmb; //  setStateC1(strCmb);
      else if (strPfx === 'n2') c2 = strCmb; //   setStateC2(strCmb);
      else if (strPfx === 'n3') c3 = strCmb; //   setStateC3(strCmb);
      else if (strPfx === 'n4') c4 = strCmb; //   setStateC4(strCmb);
      else if (strPfx === 'n5') c5 = strCmb; //   setStateC5(strCmb);
      else if (strPfx === 'n6') c6 = strCmb; //  setStateC6(strCmb);
    }
    else if (event.target.name === strPfx + '5') {
      strCmb[4] = strN;
      if (strPfx === 'n1') c1 = strCmb; //   setStateC1(strCmb);
      else if (strPfx === 'n2') c2 = strCmb; //   setStateC2(strCmb);
      else if (strPfx === 'n3') c3 = strCmb; //   setStateC3(strCmb);
      else if (strPfx === 'n4') c4 = strCmb; //   setStateC4(strCmb);
      else if (strPfx === 'n5') c5 = strCmb; //   setStateC5(strCmb);
      else if (strPfx === 'n6') c6 = strCmb; //  setStateC6(strCmb);
    }
    else if (event.target.name === strPfx + '6') {
      strCmb[5] = strN;
      if (strPfx === 'n1') c1 = strCmb; //   setStateC1(strCmb);
      else if (strPfx === 'n2') c2 = strCmb; //   setStateC2(strCmb);
      else if (strPfx === 'n3') c3 = strCmb; //   setStateC3(strCmb);
      else if (strPfx === 'n4') c4 = strCmb; //   setStateC4(strCmb);
      else if (strPfx === 'n5') c5 = strCmb; //   setStateC5(strCmb);
      else if (strPfx === 'n6') c6 = strCmb; //  setStateC6(strCmb);
    } // end of number in combination selection.
      //console.log(strN);
    //console.log(event.target.name); // e.g. "n11"
    //console.log(strPfx);
    if (event.target.name === 'n11') myInfoRef11.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n12') myInfoRef12.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n13') myInfoRef13.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n14') myInfoRef14.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n15') myInfoRef15.current.value = strN === '00' ? '' : strN;
    //else if (event.target.name === 'n16') myInfoRef16.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n21') myInfoRef21.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n22') myInfoRef22.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n23') myInfoRef23.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n24') myInfoRef24.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n25') myInfoRef25.current.value = strN === '00' ? '' : strN;
    //else if (event.target.name === 'n26') myInfoRef26.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n31') myInfoRef31.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n32') myInfoRef32.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n33') myInfoRef33.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n34') myInfoRef34.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n35') myInfoRef35.current.value = strN === '00' ? '' : strN;
    //else if (event.target.name === 'n36') myInfoRef36.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n41') myInfoRef41.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n42') myInfoRef42.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n43') myInfoRef43.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n44') myInfoRef44.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n45') myInfoRef45.current.value = strN === '00' ? '' : strN;
    //else if (event.target.name === 'n46') myInfoRef46.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n51') myInfoRef51.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n52') myInfoRef52.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n53') myInfoRef53.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n54') myInfoRef54.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n55') myInfoRef55.current.value = strN === '00' ? '' : strN;
    //else if (event.target.name === 'n56') myInfoRef56.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n61') myInfoRef61.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n62') myInfoRef62.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n63') myInfoRef63.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n64') myInfoRef64.current.value = strN === '00' ? '' : strN;
    else if (event.target.name === 'n65') myInfoRef65.current.value = strN === '00' ? '' : strN;
    //else if (event.target.name === 'n66') myInfoRef66.current.value = strN === '00' ? '' : strN;
    myInfoRef2.current.textContent = CalcSumMX();
  } // function onChange(event).

  function onChangeS(event) {
    //console.log(event.target.name);
    const MaxNum = 45;
    const MinNum = 1;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      //return;
      strN = '00';
    }
    else if (nbrN < MinNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер меньше " + MinNum);
      //return;
      strN = '00';
    }
    else if (nbrN > MaxNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер больше " + MaxNum);
      //return;
      strN = '00';
    }
    else {
      strN = nbrN.toString();
    }
    if (strN.length < 2) {
      strN = '0' + strN;
    }
    let strPfx;
    let strCmb;
    strPfx = 'ns';
    strCmb = cs;
    console.log('onChangeS strCmb begin:');
    console.log(strCmb);
    if (event.target.name === strPfx + '1') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 0) strCmb[0] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '2') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 1) strCmb[1] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '3') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 2) strCmb[2] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '4') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 3) strCmb[3] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '5') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 4) strCmb[4] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '6') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 5) strCmb[5] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '7') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 6) strCmb[6] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '8') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 7) strCmb[7] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '9') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 8) strCmb[8] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '10') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 9) strCmb[9] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '11') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 10) strCmb[10] = strN;
      else strCmb.push(strN);
    }
    else if (event.target.name === strPfx + '12') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 11) strCmb[11] = strN;
      else strCmb.push(strN);
    }
    console.log('onChangeS strCmb end:');
    console.log(strCmb);
    cs = strCmb; //setStateCS(strCmb);
    myInfoRefs1.current.value = cs[0] === '00' ? '' : cs[0];
    myInfoRefs2.current.value = cs[1] === '00' ? '' : cs[1];
    myInfoRefs3.current.value = cs[2] === '00' ? '' : cs[2];
    myInfoRefs4.current.value = cs[3] === '00' ? '' : cs[3];
    myInfoRefs5.current.value = cs[4] === '00' ? '' : cs[4];
    myInfoRefs6.current.value = cs[5] === '00' ? '' : cs[5];
    if (system >= 7) myInfoRefs7.current.value = cs[6] === '00' ? '' : cs[6];
    if (system >= 8) myInfoRefs8.current.value = cs[7] === '00' ? '' : cs[7];
    if (system >= 9) myInfoRefs9.current.value = cs[8] === '00' ? '' : cs[8];
    if (system >= 10) myInfoRefs10.current.value = cs[9] === '00' ? '' : cs[9];
    if (system >= 11) myInfoRefs11.current.value = cs[10] === '00' ? '' : cs[10];
    if (system >= 12) myInfoRefs12.current.value = cs[11] === '00' ? '' : cs[11];
    myInfoRef2.current.textContent = CalcSumMX();
  } // end of function onChangeS(event).

  function onChangeAuto(event) {
    //console.log(event);
    //console.log('typeof ' + typeof(event));
    //console.log(event.target.name);
    //let strA = event.target.value;
    //console.log(strA);
    //console.log('typeof ' + typeof(strA));
    let strCmb;
    let strArr = ['','','','',''];
    let bnlAuto = false;
    let i = 0, j;
    if (event.target.value === 'Y') {
      let numArr = [0,0,0,0,0];
      let strNum;
      let current, result;
      let max = 45;
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
      } while (i < 5);
      //console.log(numArr);
      //console.log(strArr);
      strArr.sort();
      bnlAuto = true;
    }
    else {
      strArr=['00','00','00','00','00'];
      bnlAuto = false;
    }
    console.log('strArr auto:');
    console.log(strArr);
    if (event.target.name === 'a1') {
      strCmb = c1;
      for (i=0; i<=4; i++) strCmb[i] = strArr[i];
      c1 = strCmb; //  setStateC1(strCmb);
      a1 = bnlAuto; //  setStateAuto1(bnlAuto);
      myInfoRef11.current.value = strCmb[0] === '00' ? '' : strCmb[0];
      myInfoRef12.current.value = strCmb[1] === '00' ? '' : strCmb[1];
      myInfoRef13.current.value = strCmb[2] === '00' ? '' : strCmb[2];
      myInfoRef14.current.value = strCmb[3] === '00' ? '' : strCmb[3];
      myInfoRef15.current.value = strCmb[4] === '00' ? '' : strCmb[4];
    }
    else if (event.target.name === 'a2') {
      strCmb = c2;
      for (i=0; i<=4; i++) strCmb[i] = strArr[i];
      c2 = strCmb; //  setStateC2(strCmb);
      a2 = bnlAuto; // setStateAuto2(bnlAuto);
      myInfoRef21.current.value = strCmb[0] === '00' ? '' : strCmb[0];
      myInfoRef22.current.value = strCmb[1] === '00' ? '' : strCmb[1];
      myInfoRef23.current.value = strCmb[2] === '00' ? '' : strCmb[2];
      myInfoRef24.current.value = strCmb[3] === '00' ? '' : strCmb[3];
      myInfoRef25.current.value = strCmb[4] === '00' ? '' : strCmb[4];
    }
    else if (event.target.name === 'a3') {
      strCmb = c3;
      for (i=0; i<=4; i++) strCmb[i] = strArr[i];
      c3 = strCmb; //  setStateC3(strCmb);
      a3 = bnlAuto; // setStateAuto3(bnlAuto);
      myInfoRef31.current.value = strCmb[0] === '00' ? '' : strCmb[0];
      myInfoRef32.current.value = strCmb[1] === '00' ? '' : strCmb[1];
      myInfoRef33.current.value = strCmb[2] === '00' ? '' : strCmb[2];
      myInfoRef34.current.value = strCmb[3] === '00' ? '' : strCmb[3];
      myInfoRef35.current.value = strCmb[4] === '00' ? '' : strCmb[4];
    }
    else if (event.target.name === 'a4') {
      strCmb = c4;
      for (i=0; i<=4; i++) strCmb[i] = strArr[i];
      c4 = strCmb; //  setStateC4(strCmb);
      a4 = bnlAuto; // setStateAuto4(bnlAuto);
      myInfoRef41.current.value = strCmb[0] === '00' ? '' : strCmb[0];
      myInfoRef42.current.value = strCmb[1] === '00' ? '' : strCmb[1];
      myInfoRef43.current.value = strCmb[2] === '00' ? '' : strCmb[2];
      myInfoRef44.current.value = strCmb[3] === '00' ? '' : strCmb[3];
      myInfoRef45.current.value = strCmb[4] === '00' ? '' : strCmb[4];
    }
    else if (event.target.name === 'a5') {
      strCmb = c5;
      for (i=0; i<=4; i++) strCmb[i] = strArr[i];
      c5 = strCmb; //  setStateC5(strCmb);
      a5 = bnlAuto; // setStateAuto5(bnlAuto);
      myInfoRef51.current.value = strCmb[0] === '00' ? '' : strCmb[0];
      myInfoRef52.current.value = strCmb[1] === '00' ? '' : strCmb[1];
      myInfoRef53.current.value = strCmb[2] === '00' ? '' : strCmb[2];
      myInfoRef54.current.value = strCmb[3] === '00' ? '' : strCmb[3];
      myInfoRef55.current.value = strCmb[4] === '00' ? '' : strCmb[4];
    }
    else if (event.target.name === 'a6') {
      strCmb = c6;
      for (i=0; i<=4; i++) strCmb[i] = strArr[i];
      c6 = strCmb; //  setStateC6(strCmb);
      a6 = bnlAuto; // setStateAuto6(bnlAuto);
      myInfoRef61.current.value = strCmb[0] === '00' ? '' : strCmb[0];
      myInfoRef62.current.value = strCmb[1] === '00' ? '' : strCmb[1];
      myInfoRef63.current.value = strCmb[2] === '00' ? '' : strCmb[2];
      myInfoRef64.current.value = strCmb[3] === '00' ? '' : strCmb[3];
      myInfoRef65.current.value = strCmb[4] === '00' ? '' : strCmb[4];
    }
    myInfoRef2.current.textContent = CalcSumMX();
  } // end of function onChangeAuto(event)

  function onChangeAutoSystem(event) {
    //console.log(event);
    //console.log('typeof ' + typeof(event));
    //console.log(event.target.name);
    //let strA = event.target.value;
    //console.log(strA);
    //console.log('typeof ' + typeof(strA));
    //let strArr = ['','','','','','','','','','','',''];
    let strArr = [];
    let bnlAuto = false;
    console.log('numSys: ' + system);
    let i = 0, j;
    if (event.target.value === 'Y') {
      let numArr = [0,0,0,0,0,0,0,0,0,0,0,0];
      let strNum;
      let current, result;
      let max = 45;
      do {
        current = Math.floor(Math.random() * (max));
        result = current + 1
        //console.log(current, result);
        if (numArr.indexOf(result) === -1) {
          for (j=0; j < system; j++) {
            if (numArr[j] === 0) {
              numArr[j] = result;
              strNum = numArr[j].toString();
              if (strNum.length < 2) strNum = '0' + strNum;
              //strArr[j] = strNum;
              strArr.push(strNum);
              i = i + 1;
              break;
            }
          }
        }
      } while (i < system);
      console.log(strArr);
      strArr.sort();
      bnlAuto = true;
    }
    else {
      //strArr=['00','00','00','00','00','00','00','00','00','00','00','00'];
      let i = 0;
      do {
        strArr.push('00');
        i = i + 1;
      } while (i < system);
      bnlAuto = false;
    }
    console.log(strArr);
    for (i=0; i<system; i++) cs[i] = strArr[i];
    as = bnlAuto; //setStateAutoS(bnlAuto);
    myInfoRefs1.current.value = cs[0] === '00' ? '' : cs[0];
    myInfoRefs2.current.value = cs[1] === '00' ? '' : cs[1];
    myInfoRefs3.current.value = cs[2] === '00' ? '' : cs[2];
    myInfoRefs4.current.value = cs[3] === '00' ? '' : cs[3];
    myInfoRefs5.current.value = cs[4] === '00' ? '' : cs[4];
    myInfoRefs6.current.value = cs[5] === '00' ? '' : cs[5];
    if (system >= 7) myInfoRefs7.current.value = cs[6] === '00' ? '' : cs[6];
    if (system >= 8) myInfoRefs8.current.value = cs[7] === '00' ? '' : cs[7];
    if (system >= 9) myInfoRefs9.current.value = cs[8] === '00' ? '' : cs[8];
    if (system >= 10) myInfoRefs10.current.value = cs[9] === '00' ? '' : cs[9];
    if (system >= 11) myInfoRefs11.current.value = cs[10] === '00' ? '' : cs[10];
    if (system >= 12) myInfoRefs12.current.value = cs[11] === '00' ? '' : cs[11];

    myInfoRef2.current.textContent = CalcSumMX();
  } // end of function onChangeAutoSystem(event).

  function Duplicate(strCmb, count) {
    let blnDuplicate = false;
    let k, j;
    for (k=0; k<count; k++) {
      for (j=0; j<count; j++) {
        if (j !== k) {
          if (strCmb[j] === strCmb[k]) {
            blnDuplicate = true;
            //alert('Ошибка! Дублирование номера в xxx комбинации');
            break;
          }
        }
      }
      if (blnDuplicate) break;
    }
    return blnDuplicate;
  }

  function handleSubmitMaxima(event) {
    //console.log(event.search); // event.search e.g. '?q=6_1...';
    //console.log(c1);
    //console.log(c2);
    //console.log(c3);
    //console.log(c4);
    //console.log(c5);
    //console.log(c6);
    //console.log(cs);
    let strCmb;
    let strPay = ''; // e.g. will later start as '6_1'
    let blnDuplicate = false;
    //console.log(draws);
    //console.log(strPay);
    if (system_flag) {
      strCmb = cs;
      let sys = Number(system);
      //console.log(strCmb);
      let k;
      if (strCmb.length === system && strCmb.indexOf('00') === -1) {
        blnDuplicate = Duplicate(strCmb, sys);
        if (! blnDuplicate) {
          if (as) {
            strPay = strPay + '_sa';
          }
          else {
            strPay = strPay + '_sm';
          }
          strCmb.sort();
          //strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4] + '_' + strCmb[5] ;
          for (k=0; k<sys; k++) strPay = strPay + '_' + strCmb[k] ;
        }
        else alert('Ошибка! Дублирование номера в системной комбинации');
      }
    } // end of if (system_flag) {
    else {
      for (let i = 1; i < 7; i++) {
        if (i === 1) {
          strCmb = c1;
          //console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 5);
            if (! blnDuplicate) {
              if (a1) {
                strPay = strPay + '_a';
              }
              else {
                strPay = strPay + '_m';
              }
              strCmb.sort();
              strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4];
            }
            else {
              alert('Ошибка! Дублирование номера в первой комбинации');
              break;
            }
          }
        }
        else if (i === 2) {
          strCmb = c2;
          //console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 5);
            if (! blnDuplicate) {
              if (a2) {
                strPay = strPay + '_a';
              }
              else {
                strPay = strPay + '_m';
              }
              strCmb.sort();
              strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4];
            }
            else {
              alert('Ошибка! Дублирование номера во второй комбинации');
              break;
            }
          }
        }
        else if (i === 3) {
          strCmb = c3;
          //console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 5);
            if (! blnDuplicate) {
              if (a3) {
                strPay = strPay + '_a';
              }
              else {
                strPay = strPay + '_m';
              }
              strCmb.sort();
              strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4];
            }
            else {
              alert('Ошибка! Дублирование номера в третьей комбинации');
              break;
            }
          }
        }
        else if (i === 4) {
          strCmb = c4;
          //console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 5);
            if (! blnDuplicate) {
              if (a4) {
                strPay = strPay + '_a';
              }
              else {
                strPay = strPay + '_m';
              }
              strCmb.sort();
              strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4];
            }
            else {
              alert('Ошибка! Дублирование номера в четвертой комбинации');
              break;
            }
          }
        }
        else if (i === 5) {
          strCmb = c5;
          //console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 5);
            if (! blnDuplicate) {
              if (a5) {
                strPay = strPay + '_a';
              }
              else {
                strPay = strPay + '_m';
              }
              strCmb.sort();
              strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4];
            }
            else {
              alert('Ошибка! Дублирование номера в пятой комбинации');
              break;
            }
          }
        }
        else if (i === 6) {
          strCmb = c6;
          //console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 5);
            if (! blnDuplicate) {
              if (a6) {
                strPay = strPay + '_a';
              }
              else {
                strPay = strPay + '_m';
              }
              strCmb.sort();
              strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2] + '_' + strCmb[3] + '_' + strCmb[4];
            }
            else {
              alert('Ошибка! Дублирование номера в шестой комбинации');
              break;
            }
          }
        }
      } //end of (let i = 1; i < 7; i++).
    } // end of NOT if (system_flag) {
    //console.log(strPay);
    if (blnDuplicate) {
      //alert('Ошибка! Есть некорректные комбинации.');
      event.preventDefault();
      return;
    }
    if (strPay === '') {
      alert('Ошибка! Нет корректных комбинаций.');
      event.preventDefault();
      return;
    }
    //myInfoRef.current.textContent = 'Wait for fetch processing...';
    myInfoRef.current.textContent = 'Ожидайте информацию билета ...';
    setStatePay('5_' + draws + '_' + stake + strPay);
    /* e.g.
    Form request submitted by GET. Action URL is /formAKpay?q=xxx... with or for POST search as body e.g.: 
    user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
    */
    //event.preventDefault(); // NB! Use it to prevent sending standard POST/GET request to server with URL /formAKpay?q=xxxxx.....
    //GetData('pay'); // if use Fetch directly from html page.
  
  } // end of function handleSubmitPay(event).

  /*
  function numStrValue(strNum, auto) {
    return; 
    //
    if (!auto) return; 
    //if (!auto && strNum !== '00') return strNum; 
    //console.log(strNum);
    let strRet;
    if (strNum === '00') strRet = '';
    else strRet = strNum;
    return strRet;
    //
  }
  */

  function CalcSumMX() {
    let strCmb;
    let blnDuplicate = false;
    cmbnum = 0;
    if (sysflg) { // if (system_flag)
      console.log('CalcSumMx system cmbs:');
      console.log('system = ' + system);
      strCmb = cs;
      console.log(strCmb);
      if (strCmb.length === system) {
        if (strCmb.indexOf('00') === -1) {
          blnDuplicate = Duplicate(strCmb, system);
          if (! blnDuplicate) {
            cmbnum = 1;
          }
        }
      }
    } // end of if (system_flag) {
    else {
      console.log('CalcSumMx cmbs:');
      for (let i = 1; i < 7; i++) {
        if (i === 1) {
          strCmb = c1;
          console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              cmbnum = cmbnum + 1;
            }
          }
        }
        else if (i === 2) {
          strCmb = c2;
          console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              cmbnum = cmbnum + 1;
            }
          }
        }
        else if (i === 3) {
          strCmb = c3;
          console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              cmbnum = cmbnum + 1;
            }
          }
        }
        else if (i === 4) {
          strCmb = c4;
          console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              cmbnum = cmbnum + 1;
            }
          }
        }
        else if (i === 5) {
          strCmb = c5;
          console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              cmbnum = cmbnum + 1;
            }
          }
        }
        else if (i === 6) {
          strCmb = c6;
          console.log(strCmb);
          if (strCmb.indexOf('00') === -1) {
            blnDuplicate = Duplicate(strCmb, 6);
            if (! blnDuplicate) {
              cmbnum = cmbnum + 1;
            }
          }
        }
      } // end of for (let i = 1; i < 7; i++).
    } // end of NOT if (system_flag).
    let tot = 0, ret = '';
    console.log(drawnum, sysnum, cmbnum);
    if (system_flag) {
      tot = 10 * drawnum * sysnum * cmbnum;
    }
    else {
      tot = 10 * drawnum * cmbnum;
    }
    ret = 'Стоимость билета: ' + tot.toString();
    myInfoRef2.current.textContent = ret;
    return ret;
  } // end of function CalcSumSL().

  function SysCmbMX(sys) {
    if (sys === 6) return 6;
    else if (sys === 7) return 21;
    else if (sys === 8) return 56;
    else if (sys === 9) return 126;
    else if (sys === 10) return 252;
    else if (sys === 11) return 462;
    else if (sys === 12) return 792;
  }

  // '?agent=65&type=2&command=pay&date=20200808&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0'
  // &board1=01_11_15_24_33_52

  const [pay, setStatePay] = useState('');
  /*
  const [draws, setStateDraws] = useState(1);
  const [c1, setStateC1] = useState(['00','00','00','00','00','00']);
  const [c2, setStateC2] = useState(['00','00','00','00','00','00']);
  const [c3, setStateC3] = useState(['00','00','00','00','00','00']);
  const [c4, setStateC4] = useState(['00','00','00','00','00','00']);
  const [c5, setStateC5] = useState(['00','00','00','00','00','00']);
  const [c6, setStateC6] = useState(['00','00','00','00','00','00']);
  const [a1, setStateAuto1] = useState(false);
  const [a2, setStateAuto2] = useState(false);
  const [a3, setStateAuto3] = useState(false);
  const [a4, setStateAuto4] = useState(false);
  const [a5, setStateAuto5] = useState(false);
  const [a6, setStateAuto6] = useState(false);
  */
  /*
  const [system_flag, setStateSystemFlag] = useState(false); <==== must be for rendering.
  const [system, setStateSystem] = useState(7);
  //const [cs, setStateCS] = useState(['00','00','00','00','00','00','00','00','00','00','00','00']);
  const [cs, setStateCS] = useState([]);
  const [as, setStateAutoS] = useState(false);
  //const [sum, setStateSum] = useState(15);
  */
  const [system_flag, setStateSystemFlag] = useState(false); // use to switch rendering system/nonsystem.
  c1 = ['00','00','00','00','00'];
  c2 = ['00','00','00','00','00'];
  c3 = ['00','00','00','00','00'];
  c4 = ['00','00','00','00','00'];
  c5 = ['00','00','00','00','00'];
  c6 = ['00','00','00','00','00'];
  a1 = false;
  a2 = false;
  a3 = false;
  a4 = false;
  a5 = false;
  a6 = false;
  system = 6;

  return (
  <div>
  <h3>Лото Максима играть:</h3>
  <h4>Задайте количество последовательных розыгрышей (от 1 до 6):</h4>
  <div>
    <p className="boardLabel">Розыгрышей</p>
    <input type="number" name="draws" defaultValue={draws} className="numbs" min="1" max="6" step="1"
    onChange={onChangeDraws} required></input>
    <p className="boardLabel">Если не задано, устанавливается 1 розыгрыш</p>
    {/* <p className="boardLabel">Стоимость билета</p> */}
    <p name="sum" className="boardLabel" ref={myInfoRef2}></p>
  </div>
  {!system_flag && <div>
  <h4>Задайте от 1 до 6 комбинаций номеров (от 1 до 45):</h4>
  <div className = "boardSL">
      <p className="boardLabel">1 комбинация</p>
      <input ref={myInfoRef11} type="number" name="n11" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef12} type="number" name="n12" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef13} type="number" name="n13" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef14} type="number" name="n14" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef15} type="number" name="n15" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <p className="boardLabel">Авто</p>
      <select name="a1" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">2 комбинация</p>
      <input ref={myInfoRef21} type="number" name="n21" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef22} type="number" name="n22" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef23} type="number" name="n23" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef24} type="number" name="n24" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef25} type="number" name="n25" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <p className="boardLabel">Авто</p>
      <select name="a2" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">3 комбинация</p>
      <input ref={myInfoRef31} type="number" name="n31" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef32} type="number" name="n32" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef33} type="number" name="n33" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef34} type="number" name="n34" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef35} type="number" name="n35" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <p className="boardLabel">Авто</p>
      <select name="a3" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">4 комбинация</p>
      <input ref={myInfoRef41} type="number" name="n41" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef42} type="number" name="n42" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef43} type="number" name="n43" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef44} type="number" name="n44" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef45} type="number" name="n45" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <p className="boardLabel">Авто</p>
      <select name="a4" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">5 комбинация</p>
      <input ref={myInfoRef51} type="number" name="n51" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef52} type="number" name="n52" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef53} type="number" name="n53" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef54} type="number" name="n54" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef55} type="number" name="n55" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <p className="boardLabel">Авто</p>
      <select name="a5" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">6 комбинация</p>
      <input ref={myInfoRef61} type="number" name="n61" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef62} type="number" name="n62" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef63} type="number" name="n63" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef64} type="number" name="n64" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <input ref={myInfoRef65} type="number" name="n65" className="numbs" min="1" max="45" step="1" onChange={onChange}></input>
      <p className="boardLabel">Авто</p>
      <select name="a6" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  </div>
  } {/* end of {!system_flag */}
  <div>
    <p className="boardLabel">Использовать системную игру</p>
      <select name="as" onChange={onChangeSystemFlag}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
    {system_flag && <div>
      <p className="boardLabel">Система</p>
      <input type="number" name="system" defaultValue={system} className="numbs" min="6" max="12" step="1"
      onChange={onChangeSystem} required></input>
      <p className="boardLabel">Если не задано, устанавливается система 6</p>
      <div className = "boardSL">
        <p className="boardLabel">Системная комбинация</p>
        <input ref={myInfoRefs1} type="number" name="ns1" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>
        <input ref={myInfoRefs2} type="number" name="ns2" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>
        <input ref={myInfoRefs3} type="number" name="ns3" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>
        <input ref={myInfoRefs4} type="number" name="ns4" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>
        <input ref={myInfoRefs5} type="number" name="ns5" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>
        <input ref={myInfoRefs6} type="number" name="ns6" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>
        {system >= 7
          ? <input ref={myInfoRefs7} type="number" name="ns7" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs7} hidden type="number" name="ns7" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>}
        {system >= 8
          ? <input ref={myInfoRefs8} type="number" name="ns8" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs8} hidden type="number" name="ns8" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>}
        {system >= 9
          ? <input ref={myInfoRefs9} type="number" name="ns9" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs9} hidden type="number" name="ns9" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>}
        {system >= 10
          ? <input ref={myInfoRefs10} type="number" name="ns10" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs10} hidden type="number" name="ns10" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>}
        {system >= 11
          ? <input ref={myInfoRefs11} type="number" name="ns11" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs11} hidden type="number" name="ns11" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>}
        {system >= 12
          ? <input ref={myInfoRefs12} type="number" name="ns12" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>
          : <input ref={myInfoRefs12} hidden type="number" name="ns12" className="numbs" min="1" max="45" step="1" onChange={onChangeS}></input>}
        <p className="boardLabel">Авто</p>
        <select ref={myInfoRefsa}  name="as" onChange={onChangeAutoSystem}>
          <option value='N'>Нет</option>
          <option value='Y'>Да</option>
        </select>
      </div>
    </div>
    } {/* end of {system_flag */}
  </div>
  {/* <button type="button" onClick={CalcSumSL}>Рассчитать стоимость билета.</button> */}
  <form role="search" method="get" action="formAKpay" onSubmit={handleSubmitMaxima}>
    <input hidden type="search" name="q"  defaultValue={pay} placeholder="123" aria-label="Buy ticket"></input>
    <button type="submit">Купить билет</button>
  </form>
  </div>
  )
} // end of function Maxima.

function Tryika() {

  function onChangeDraws(event) {
    //console.log(event.target.name);
    const MaxNum = 14;
    const MinNum = 1;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log('draws: ' + nbrN);
    if (Number.isNaN(nbrN) || (nbrN < MinNum) || (nbrN > MaxNum)) {
      //event.preventDefault();
      //console.log("Ошибка! Номер не задан корректно.");
      draws = '0'; // setStateDraws('1');
      drawnum = 0;
    }
    else {
      if ((nbrN <= 7) || (nbrN === MaxNum)) {
        //console.log('Номер корректный ' + strN);
        draws = strN; // setStateDraws(strN);
        drawnum = Number(strN);
      }
      else {
        //event.preventDefault();
        //console.log("Ошибка! Номер некорректный (1...7,14) " + strN);
        draws = '0'; // setStateDraws('1');
        drawnum = 0;
      }
    } 
    myInfoRef2.current.textContent = CalcSumTr();
  } // end of function onChangeDraws(event).

  function onChangeStake(event) {
    //console.log(event.target.name);
    const MaxNum = 2;
    const MinNum = 1;
    //stakenum = Number(stake);
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN) || (nbrN < MinNum) || (nbrN > MaxNum)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      stake = '0'; // setStateStake('1');
      stakenum = 0;
    } 
    else {
      stake = strN; // setStateStake(strN);
      stakenum = Number(strN);
    }
    myInfoRef2.current.textContent = CalcSumTr();
  } // end of function onChangeStake(event)

  function onChange(event) {
    //console.log(event.target.name);
    const MaxNum = 9;
    const MinNum = 0;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      //return;
      strN = '10';
    }
    else if (nbrN < MinNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер меньше " + MinNum);
      //return;
      strN = '10';
    }
    else if (nbrN > MaxNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер больше " + MaxNum);
      //return;
      strN = '10';
    }
    else {
      strN = nbrN.toString();
    }
    let strPfx;
    let strCmb;
    let type;
    if (event.target.name.indexOf('n1') !== -1) {
      strPfx = 'n1';
      strCmb = c1;
      type = t1;
    }
    else if (event.target.name.indexOf('n2') !== -1) {
      strPfx = 'n2';
      strCmb = c2;
      type = t2;
    }
    else if (event.target.name.indexOf('n3') !== -1) {
      strPfx = 'n3';
      strCmb = c3;
      type = t3;
    }
    else if (event.target.name.indexOf('n4') !== -1) {
      strPfx = 'n4';
      strCmb = c4;
      type = t4;
    }
    else if (event.target.name.indexOf('n5') !== -1) {
      strPfx = 'n5';
      strCmb = c5;
      type = t5;
    }
    else if (event.target.name.indexOf('n6') !== -1) {
      strPfx = 'n6';
      strCmb = c6;
      type = t6;
    }
    else if (event.target.name.indexOf('n7') !== -1) {
      strPfx = 'n7';
      strCmb = c7;
      type = t7;
    }
    else if (event.target.name.indexOf('n8') !== -1) {
      strPfx = 'n8';
      strCmb = c8;
      type = t8;
    }
    else if (event.target.name.indexOf('n9') !== -1) {
      strPfx = 'n9';
      strCmb = c9;
      type = t9;
    }
    else if (event.target.name.indexOf('nA') !== -1) {
      strPfx = 'nA';
      strCmb = c10;
      type = t10;
    } // end of combination selection.

    if (event.target.name === strPfx + '1') {
      //console.log(event.target.name, strPfx + '1');
      strCmb[0] = strN;
    }
    else if (event.target.name === strPfx + '2') {
      //console.log(event.target.name, strPfx + '2');
      strCmb[1] = strN;
    }
    else if (event.target.name === strPfx + '3') {
     strCmb[2] = strN;
    }

    console.log('TrOnChange strCmb:');
    console.log(strCmb);
    console.log('TrOnChange type:');
    console.log(type);
    if (strCmb.indexOf('10') === -1) {
      console.log('TrOnChange strCmb:');
      console.log(strCmb);
      console.log('TrOnChange type:');
      console.log(type);
      if (cmbPriceCalc(strCmb, type) === 0) {
        alert("Ошибка! Три одинаковых цифрры возможны только для типа Точний, комбинация не будет принята сервером.");
        /*
        strN = '10';
        if (event.target.name === strPfx + '1') {
          strCmb[0] = strN;
        }
        else if (event.target.name === strPfx + '2') {
          strCmb[1] = strN;
        }
        else if (event.target.name === strPfx + '3') {
         strCmb[2] = strN;
        }
        */
      }
    }

    if (strPfx === 'n1') c1 = strCmb; //  setStateC1(strCmb);
    else if (strPfx === 'n2') c2 = strCmb; //  setStateC2(strCmb);
    else if (strPfx === 'n3') c3 = strCmb; //  setStateC3(strCmb);
    else if (strPfx === 'n4') c4 = strCmb; //  setStateC4(strCmb);
    else if (strPfx === 'n5') c5 = strCmb; //  setStateC5(strCmb);
    else if (strPfx === 'n6') c6 = strCmb; //  setStateC6(strCmb);
    else if (strPfx === 'n7') c7 = strCmb; //  setStateC6(strCmb);
    else if (strPfx === 'n8') c8 = strCmb; //  setStateC6(strCmb);
    else if (strPfx === 'n9') c9 = strCmb; //  setStateC6(strCmb);
    else if (strPfx === 'nA') c10 = strCmb; //  setStateC6(strCmb);
   //console.log(strN);
    //console.log(event.target.name); // e.g. "n11"
    //console.log(strPfx);
    if (event.target.name === 'n11') myInfoRef11.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n12') myInfoRef12.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n13') myInfoRef13.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n21') myInfoRef14.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n22') myInfoRef15.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n23') myInfoRef16.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n31') myInfoRef21.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n32') myInfoRef22.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n33') myInfoRef23.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n41') myInfoRef24.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n42') myInfoRef25.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n43') myInfoRef26.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n51') myInfoRef31.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n52') myInfoRef32.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n53') myInfoRef33.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n61') myInfoRef34.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n62') myInfoRef35.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n63') myInfoRef36.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n71') myInfoRef41.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n72') myInfoRef42.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n73') myInfoRef43.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n81') myInfoRef44.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n82') myInfoRef45.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n83') myInfoRef46.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n91') myInfoRef51.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n92') myInfoRef52.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'n93') myInfoRef53.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'nA1') myInfoRef54.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'nA2') myInfoRef55.current.value = strN === '10' ? '' : strN;
    else if (event.target.name === 'nA3') myInfoRef56.current.value = strN === '10' ? '' : strN;
    myInfoRef2.current.textContent = CalcSumTr();
  } // function onChange(event).

  function onChangeType(event) {
    //console.log(event);
    //console.log('typeof ' + typeof(event));
    //console.log(event.target.name);
    //let strA = event.target.value;
    //console.log(strA);
    //console.log('typeof ' + typeof(strA));
    let strType = '';
    let strCmb;
    console.log(event.target);
    console.log(event.target.value);
    if (event.target.value === 'B') { // 'Довільний'
      strType = 'Довільний'; // Box
    }
    else if (event.target.value === 'A') { // 'Точний + Довільний'
      strType = 'Точний + Довільний'; // All.
    }
    else if (event.target.value === 'Y') { // 'Система'
      strType = 'Система'; // sYstem.
    }
    else {
      strType = 'Точний' // Точний (Straight).
    }
    if (event.target.name === 't1') {
      strCmb = c1;
      t1 = strType;
      if (strCmb.indexOf('10') === -1) {
        if (cmbPriceCalc(strCmb, strType) === 0) {
          alert("Ошибка! Три одинаковых цифрры возможны только для типа Точний, комбинация не будет принята сервером.");
        }
      }
    }
    else if (event.target.name === 't2') {
      strCmb = c2;
      t2 = strType;
      if (strCmb.indexOf('10') === -1) {
        if (cmbPriceCalc(strCmb, strType) === 0) {
          alert("Ошибка! Три одинаковых цифрры возможны только для типа Точний, комбинация не будет принята сервером.");
        }
      }
    }
    else if (event.target.name === 't3') {
      strCmb = c3;
      t3 = strType;
      if (strCmb.indexOf('10') === -1) {
        if (cmbPriceCalc(strCmb, strType) === 0) {
          alert("Ошибка! Три одинаковых цифрры возможны только для типа Точний, комбинация не будет принята сервером.");
        }
      }
    }
    else if (event.target.name === 't4') {
      strCmb = c4;
      t4 = strType;
      if (strCmb.indexOf('10') === -1) {
        if (cmbPriceCalc(strCmb, strType) === 0) {
          alert("Ошибка! Три одинаковых цифрры возможны только для типа Точний, комбинация не будет принята сервером.");
        }
      }
    }
    else if (event.target.name === 't5') {
      strCmb = c5;
      t5 = strType;
      if (strCmb.indexOf('10') === -1) {
        if (cmbPriceCalc(strCmb, strType) === 0) {
          alert("Ошибка! Три одинаковых цифрры возможны только для типа Точний, комбинация не будет принята сервером.");
        }
      }
    }
    else if (event.target.name === 't6') {
      strCmb = c6;
      t6 = strType;
      if (strCmb.indexOf('10') === -1) {
        if (cmbPriceCalc(strCmb, strType) === 0) {
          alert("Ошибка! Три одинаковых цифрры возможны только для типа Точний, комбинация не будет принята сервером.");
        }
      }
    }
    else if (event.target.name === 't7') {
      strCmb = c7;
      t7 = strType;
      if (strCmb.indexOf('10') === -1) {
        if (cmbPriceCalc(strCmb, strType) === 0) {
          alert("Ошибка! Три одинаковых цифрры возможны только для типа Точний, комбинация не будет принята сервером.");
        }
      }
    }
    else if (event.target.name === 't8') {
      strCmb = c8;
      t8 = strType;
      if (strCmb.indexOf('10') === -1) {
        if (cmbPriceCalc(strCmb, strType) === 0) {
          alert("Ошибка! Три одинаковых цифрры возможны только для типа Точний, комбинация не будет принята сервером.");
        }
      }
    }
    else if (event.target.name === 't9') {
      strCmb = c9;
      t9 = strType;
      if (strCmb.indexOf('10') === -1) {
        if (cmbPriceCalc(strCmb, strType) === 0) {
          alert("Ошибка! Три одинаковых цифрры возможны только для типа Точний, комбинация не будет принята сервером.");
        }
      }
    }
    else if (event.target.name === 't10') {
      strCmb = c10;
      t10 = strType;
      if (strCmb.indexOf('10') === -1) {
        if (cmbPriceCalc(strCmb, strType) === 0) {
          alert("Ошибка! Три одинаковых цифрры возможны только для типа Точний, комбинация не будет принята сервером.");
        }
      }
    }
    myInfoRef2.current.textContent = CalcSumTr();
  } // end of function onChangeType(event)

  function handleSubmitTriyka(event) {
    //console.log(event.search); // event.search e.g. '?q=6_1...';
    //console.log(c1);
    //console.log(c2);
    //console.log(c3);
    //console.log(c4);
    //console.log(c5);
    //console.log(c6);
    //console.log(cs);
    let strCmb, type;
    let strPay = ''; // e.g. will later start as '6_1'
    //console.log(draws);
    //console.log(strPay);
    //if (cmbPriceCalc(strCmb, type) !== 0) {
    for (let i = 1; i < 11; i++) {
      if (i === 1) {
        strCmb = c1;
        type = t1;
        if (cmbPriceCalc(strCmb, type) !== 0) {
          strPay = strPay + '_' + typeValue(t1);
          strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2];
        }
      }
      if (i === 2) {
        strCmb = c2;
        type = t2;
        if (cmbPriceCalc(strCmb, type) !== 0) {
          strPay = strPay + '_' + typeValue(t2);
          strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2];
        }
      }
      if (i === 3) {
        strCmb = c3;
        type = t3;
        if (cmbPriceCalc(strCmb, type) !== 0) {
          strPay = strPay + '_' + typeValue(t3);
          strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2];
        }
      }
      if (i === 4) {
        strCmb = c4;
        type = t4;
        if (cmbPriceCalc(strCmb, type) !== 0) {
          strPay = strPay + '_' + typeValue(t4);
          strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2];
        }
      }
      if (i === 5) {
        strCmb = c5;
        type = t5;
        if (cmbPriceCalc(strCmb, type) !== 0) {
          strPay = strPay + '_' + typeValue(t5);
          strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2];
        }
      }
      if (i === 6) {
        strCmb = c6;
        type = t6;
        if (cmbPriceCalc(strCmb, type) !== 0) {
          strPay = strPay + '_' + typeValue(t6);
          strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2];
        }
      }
      if (i === 7) {
        strCmb = c7;
        type = t7;
        if (cmbPriceCalc(strCmb, type) !== 0) {
          strPay = strPay + '_' + typeValue(t7);
          strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2];
        }
      }
      if (i === 8) {
        strCmb = c8;
        type = t8;
        if (cmbPriceCalc(strCmb, type) !== 0) {
          strPay = strPay + '_' + typeValue(t8);
          strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2];
        }
      }
      if (i === 9) {
        strCmb = c9;
        type = t9;
        if (cmbPriceCalc(strCmb, type) !== 0) {
          strPay = strPay + '_' + typeValue(t9);
          strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2];
        }
      }
      if (i === 10) {
        strCmb = c10;
        type = t10;
        if (cmbPriceCalc(strCmb, type) !== 0) {
          strPay = strPay + '_' + typeValue(t10);
          strPay = strPay + '_' + strCmb[0] + '_' + strCmb[1] + '_' + strCmb[2];
        }
      }
    } //end of (let i = 1; i < 7; i++).
    if (strPay === '') {
      alert('Ошибка! Нет корректных комбинаций.');
      event.preventDefault();
      return;
    }
    //myInfoRef.current.textContent = 'Wait for fetch processing...';
    myInfoRef.current.textContent = 'Ожидайте информацию билета ...';
    setStatePay('4_' + draws + '_' + stake + strPay);
    /* e.g.
    Form request submitted by GET. Action URL is /formAKpay?q=xxx... with or for POST search as body e.g.: 
    user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
    */
    //event.preventDefault(); // NB! Use it to prevent sending standard POST/GET request to server with URL /formAKpay?q=xxxxx.....
    //GetData('pay'); // if use Fetch directly from html page.
  
  } // end of function handleSubmitPay(event).

  function typeValue(typename) {
    let strValue;
    if (typename === 'Довільний') { // 'Довільний'
      strValue = 'B'; // Box
    }
    else if (typename  === 'Точний + Довільний') { // 'Точний + Довільний'
      strValue = 'A'; // All.
    }
    else if (typename  === 'Система') { // 'Система'
      strValue = 'Y'; // sYstem.
    }
    else {
      strValue = 'S' // Точний (Straight).
    }
    return strValue;
  }

  /*
  function numStrValue(strNum, auto) {
    return; 
    //
    if (!auto) return; 
    //if (!auto && strNum !== '00') return strNum; 
    //console.log(strNum);
    let strRet;
    if (strNum === '00') strRet = '';
    else strRet = strNum;
    return strRet;
    //
  }
  */

  function CalcSumTr() {
    let strCmb;
    let cmbprice = 0;
    console.log('CalcSumTr cmbs:');
    for (let i = 1; i < 11; i++) {
      if (i === 1) {
        strCmb = c1;
        console.log(strCmb);
        if (strCmb.indexOf('10') === -1) cmbprice = cmbprice + cmbPriceCalc(strCmb, t1);
      }
      else if (i === 2) {
        strCmb = c2;
        console.log(strCmb);
        if (strCmb.indexOf('10') === -1) cmbprice = cmbprice + cmbPriceCalc(strCmb, t2);
      }
      else if (i === 3) {
        strCmb = c3;
        console.log(strCmb);
        if (strCmb.indexOf('10') === -1) cmbprice = cmbprice + cmbPriceCalc(strCmb, t3);
      }
      else if (i === 4) {
        strCmb = c4;
        console.log(strCmb);
        if (strCmb.indexOf('10') === -1) cmbprice = cmbprice + cmbPriceCalc(strCmb, t4);
      }
      else if (i === 5) {
        strCmb = c5;
        console.log(strCmb);
        if (strCmb.indexOf('10') === -1) cmbprice = cmbprice + cmbPriceCalc(strCmb, t5);
      }
      else if (i === 6) {
        strCmb = c6;
        console.log(strCmb);
        if (strCmb.indexOf('10') === -1) cmbprice = cmbprice + cmbPriceCalc(strCmb, t6);
      }
      else if (i === 7) {
        strCmb = c7;
        console.log(strCmb);
        if (strCmb.indexOf('10') === -1) cmbprice = cmbprice + cmbPriceCalc(strCmb, t7);
      }
      else if (i === 8) {
        strCmb = c8;
        console.log(strCmb);
        if (strCmb.indexOf('10') === -1) cmbprice = cmbprice + cmbPriceCalc(strCmb, t8);
      }
      else if (i === 9) {
        strCmb = c9;
        console.log(strCmb);
        if (strCmb.indexOf('10') === -1) cmbprice = cmbprice + cmbPriceCalc(strCmb, t9);
      }
      else if (i === 10) {
        strCmb = c10;
        console.log(strCmb);
        if (strCmb.indexOf('10') === -1) cmbprice = cmbprice + cmbPriceCalc(strCmb, t10);
      }
    } // end of for (let i = 1; i < 7; i++).
    let tot = 0, ret = '';
    console.log(drawnum, stakenum, cmbprice);
    tot = drawnum * stakenum * cmbprice;
    ret = 'Стоимость билета: ' + tot.toString();
    myInfoRef2.current.textContent = ret;
    return ret;
  } // end of function CalcSumSL().

  function cmbPriceCalc(cmb, typ) {
    let nums = 0;
    let cmbprice = 0;
    nums = uniqnums(cmb);
    console.log('cmbPriceCalc nums=' + nums);
    if (cmb.indexOf('10') === -1) {
      if (typ === 'Точний') {
        cmbprice = cmbprice + 3;
      }
      else if (typ === 'Довільний') {
        if ((nums === 2) || (nums === 3)) cmbprice = cmbprice + 3;
        else cmbprice = 0
      }
      else if (typ === 'Точний + Довільний') {
        if ((nums === 2) || (nums === 3)) cmbprice = cmbprice + 6;
        else cmbprice = 0
      }
      else if (typ === 'Система') {
        if (nums === 2) cmbprice = cmbprice + 9;
        else if (nums === 3) cmbprice = cmbprice + 18;
        else cmbprice = 0
      }
    }
    console.log('cmbPriceCalc cmbprice=' + cmbprice);
    return cmbprice;
  }
  
  function uniqnums(cmb) {
    let nums = 1;
    if (cmb[0] !== cmb[1]) nums = nums + 1;
    if (cmb[0] !== cmb[2]) nums = nums + 1;
    if ((nums > 1) && (cmb[1] === cmb[2])) nums = nums - 1;
    return nums;
  }
  
  // '?agent=65&type=2&command=pay&date=20200808&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0'
  // &board1=01_11_15_24_33_52

  const [pay, setStatePay] = useState('');
  /*
  const [draws, setStateDraws] = useState(1);
  const [c1, setStateC1] = useState(['00','00','00','00','00','00']);
  const [c2, setStateC2] = useState(['00','00','00','00','00','00']);
  const [c3, setStateC3] = useState(['00','00','00','00','00','00']);
  const [c4, setStateC4] = useState(['00','00','00','00','00','00']);
  const [c5, setStateC5] = useState(['00','00','00','00','00','00']);
  const [c6, setStateC6] = useState(['00','00','00','00','00','00']);
  const [a1, setStateAuto1] = useState(false);
  const [a2, setStateAuto2] = useState(false);
  const [a3, setStateAuto3] = useState(false);
  const [a4, setStateAuto4] = useState(false);
  const [a5, setStateAuto5] = useState(false);
  const [a6, setStateAuto6] = useState(false);
  */
  /*
  const [system_flag, setStateSystemFlag] = useState(false);
  const [system, setStateSystem] = useState(7);
  //const [cs, setStateCS] = useState(['00','00','00','00','00','00','00','00','00','00','00','00']);
  const [cs, setStateCS] = useState([]);
  const [as, setStateAutoS] = useState(false);
  //const [sum, setStateSum] = useState(15);
  */
  c1 = ['10','10','10'];
  c2 = ['10','10','10'];
  c3 = ['10','10','10'];
  c4 = ['10','10','10'];
  c5 = ['10','10','10'];
  c6 = ['10','10','10'];
  c7 = ['10','10','10'];
  c8 = ['10','10','10'];
  c9 = ['10','10','10'];
  c10 = ['10','10','10'];
  /*
  Type multiplier is:
  1 for S (straight board), Точний
  1 for B (box board), Довільний
  2 for A (both straight and box board), Точний + Довільний
  3 for Y Система (system) if there are two same digits in three digits number (e.g. 112),
  6 for Y Система (system) if all digits in three digits number are unique (e.g. 123).
  */

  t1 = 'Точний';
  t2 = 'Точний';
  t3 = 'Точний';
  t4 = 'Точний';
  t5 = 'Точний';
  t6 = 'Точний';
  t7 = 'Точний';
  t8 = 'Точний';
  t9 = 'Точний';
  t10 = 'Точний';

  return (
  <div>
  <h3>Лото Трійка играть:</h3>
  <h4>Задайте количество последовательных розыгрышей (от 1 до 7 или 14):</h4>
  <div>
    <p className="boardLabel">Розыгрышей</p>
    <input type="number" name="draws" defaultValue={draws} className="numbs" min="1" max="14" step="1"
    onChange={onChangeDraws} required></input>
    <p className="boardLabel">Если не задано, устанавливается 1 розыгрыш</p>
    <p className="boardLabel">Ставка</p>
    <input type="number" name="stake" defaultValue={stake} className="numbs" min="1" max="2" step="1"
    onChange={onChangeStake} required></input>
    <p className="boardLabel">Если не задано, устанавливается ставка 1</p>
    {/* <p className="boardLabel">Стоимость билета</p> */}
    <p name="sum" className="boardLabel" ref={myInfoRef2}></p>
  </div>


  <h4>Задайте от 1 до 10 комбинаций номеров (от 000 до 999):</h4>
  <div className = "boardSL">
      <p className="boardLabel">Комбинация 01</p>
      <input ref={myInfoRef11} type="number" name="n11" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef12} type="number" name="n12" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef13} type="number" name="n13" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <p className="boardLabel">Тип ставки</p>
      <select name="t1" onChange={onChangeType}>
        <option value='S'>Точний</option>
        <option value='B'>Довільний</option>
        <option value='A'>Точний + Довільний</option>
        <option value='Y'>Система</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">Комбинация 02</p>
      <input ref={myInfoRef14} type="number" name="n21" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef15} type="number" name="n22" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef16} type="number" name="n23" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <p className="boardLabel">Тип ставки</p>
      <select name="t2" onChange={onChangeType}>
        <option value='S'>Точний</option>
        <option value='B'>Довільний</option>
        <option value='A'>Точний + Довільний</option>
        <option value='Y'>Система</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">Комбинация 03</p>
      <input ref={myInfoRef21} type="number" name="n31" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef22} type="number" name="n32" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef23} type="number" name="n33" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <p className="boardLabel">Тип ставки</p>
      <select name="t3" onChange={onChangeType}>
        <option value='S'>Точний</option>
        <option value='B'>Довільний</option>
        <option value='A'>Точний + Довільний</option>
        <option value='Y'>Система</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">Комбинация 04</p>
      <input ref={myInfoRef24} type="number" name="n41" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef25} type="number" name="n42" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef26} type="number" name="n43" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <p className="boardLabel">Тип ставки</p>
      <select name="t4" onChange={onChangeType}>
        <option value='S'>Точний</option>
        <option value='B'>Довільний</option>
        <option value='A'>Точний + Довільний</option>
        <option value='Y'>Система</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">Комбинация 05</p>
      <input ref={myInfoRef31} type="number" name="n51" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef32} type="number" name="n52" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef33} type="number" name="n53" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <p className="boardLabel">Тип ставки</p>
      <select name="t5" onChange={onChangeType}>
        <option value='S'>Точний</option>
        <option value='B'>Довільний</option>
        <option value='A'>Точний + Довільний</option>
        <option value='Y'>Система</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">Комбинация 06</p>
      <input ref={myInfoRef34} type="number" name="n61" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef35} type="number" name="n62" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef36} type="number" name="n63" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <p className="boardLabel">Тип ставки</p>
      <select name="t6" onChange={onChangeType}>
        <option value='S'>Точний</option>
        <option value='B'>Довільний</option>
        <option value='A'>Точний + Довільний</option>
        <option value='Y'>Система</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">Комбинация 07</p>
      <input ref={myInfoRef41} type="number" name="n71" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef42} type="number" name="n72" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef43} type="number" name="n73" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <p className="boardLabel">Тип ставки</p>
      <select name="t7" onChange={onChangeType}>
        <option value='S'>Точний</option>
        <option value='B'>Довільний</option>
        <option value='A'>Точний + Довільний</option>
        <option value='Y'>Система</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">Комбинация 08</p>
      <input ref={myInfoRef44} type="number" name="n81" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef45} type="number" name="n82" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef46} type="number" name="n83" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <p className="boardLabel">Тип ставки</p>
      <select name="t8" onChange={onChangeType}>
        <option value='S'>Точний</option>
        <option value='B'>Довільний</option>
        <option value='A'>Точний + Довільний</option>
        <option value='Y'>Система</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">Комбинация 09</p>
      <input ref={myInfoRef51} type="number" name="n91" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef52} type="number" name="n92" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef53} type="number" name="n93" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <p className="boardLabel">Тип ставки</p>
      <select name="t9" onChange={onChangeType}>
        <option value='S'>Точний</option>
        <option value='B'>Довільний</option>
        <option value='A'>Точний + Довільний</option>
        <option value='Y'>Система</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">Комбинация 10</p>
      <input ref={myInfoRef54} type="number" name="nA1" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef55} type="number" name="nA2" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <input ref={myInfoRef56} type="number" name="nA3" className="numbs" min="0" max="9" step="1" onChange={onChange}></input>
      <p className="boardLabel">Тип ставки</p>
      <select name="t10" onChange={onChangeType}>
        <option value='S'>Точний</option>
        <option value='B'>Довільний</option>
        <option value='A'>Точний + Довільний</option>
        <option value='Y'>Система</option>
      </select>
  </div>
  {/* <button type="button" onClick={CalcSumSL}>Рассчитать стоимость билета.</button> */}
  <form role="search" method="get" action="formAKpay" onSubmit={handleSubmitTriyka}>
    <input hidden type="search" name="q"  defaultValue={pay} placeholder="123" aria-label="Buy ticket"></input>
    <button type="submit">Купить билет</button>
  </form>
  </div>
  )
}

//==================================================================================================================
function AsideHome() {
  //let dt = new Date();
  //let reply = dt.toLocaleTimeString('uk'); // 'en-US'
  //return <h3>AsideHome {reply}</h3>;
  return null;
}

function AsideWillMatch() {
  let location = useLocation();
  console.log('location:');
  console.log(location);
  let history = useHistory();
  console.log('history:');
  console.log(history.location.pathname);
  console.log(history);
  let dt = new Date();
  let reply = dt.toLocaleTimeString('uk'); // 'en-US'
  return <p className = "special">
    Aside Matched! <code>{location.pathname}</code> {reply}
    </p>;
}