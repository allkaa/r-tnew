// NoMatch404asideFetch 222
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
import logo from './logoFancyLetter.png'; // Tell Webpack this JS file will use this image placed in src dir.
import logo2 from './logo.png'; // Tell Webpack this JS file will use this image placed in src dir.

// NB! "Global" vars work in Hooks!!!
let txn_id = 0;
let myInfoRef = React.createRef();
let myInfoRef2 = React.createRef();
let drawnum = 1;
let sysnum = 0;
let cmbnum = 0;
let stake = 1;
//let myInfoRef2 = React.createRef();

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

  return (
    <div>
      <img id="logoimg" src={logo} alt="logo"/> {/* src="logo.png"  logo.png img_5terre.jpg are in public dir */}
      <h1>Ukraine National Lottery</h1>

      <header>
        {/*<!-- Even is it's not mandatory, it's common practice to put the main navigation menu within the main header -->*/}
        <nav role="navigation">
        <Router>
        <div>
        <ul>
          <li>
            <Link to="/">Домой</Link>
          </li>
          <li>
            <Link to="/nav-match1">Результаты</Link>
          </li>
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
        <form role="search" method="get" action="formAKchk" onSubmit={handleSubmitVal}>
          <input type="search" name="q"  value={search} onChange={handleChangeSearch} placeholder="123-12345678-1234567" aria-label="Search ticket status"></input>
          {/* <input type="submit" value="Ticket search"/> */}
          <button type="submit">Проверить выигрыш по номеру билета</button>
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
          <Route path="/nav-match1">
            <Results />  {/* NavWillMatch */}
          </Route>
          <Route path="/nav-match2">
            <Keno /> {/* NavWillMatch */}
          </Route>
          <Route path="/nav-match3">
            <SuperLoto /> {/* NavWillMatch */}
          </Route>
          <Route path="/nav-match4">
            <Maxima /> {/* NavWillMatch */}
          </Route>
          <Route path="/nav-match5">
            <Tryika /> {/* NavWillMatch */}
          </Route>
          <Route path="/nav-match6">
            <Contact /> {/* NavWillMatch */}
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
          <h4>Float image in aside</h4>
          {/*<img id="logoimg" src="logo.png" alt="logo"/>*/}
          <img id="logoimg2" src={logo2} alt="logo2"/> {/* src="logo.png"  logo.png img_5terre.jpg are in public dir */}
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. </p>
        </aside>
        <article>
          <h4>Article title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</p>
        </article>
        <aside id="rightaside">
        <Router>
        <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/will-match1">Will Match 1</Link>
          </li>
          <li>
            <Link to="/will-match2">Will Match 2</Link>
          </li>
          <li>
            <Link to="will-match3">Will Match 3</Link>
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

function Purchase() {
  function handleSubmitPay(event) {
    myInfoRef.current.textContent = 'Wait for fetch processing...';
    /* e.g.
    Form request submitted by GET. Action URL is /formAKpay?q=xxx... with or for POST search as body e.g.: 
    user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
    */
    //event.preventDefault(); // NB! Use it to prevent sending standard POST/GET request to server with URL /formAKpay?q=xxxxx.....
    //GetData('pay'); // if use Fetch directly from html page.
  } // end of function handleSubmitPay(event)

  return <form role="search" method="get" action="formAKpay" onSubmit={handleSubmitPay}>
  <input type="search" name="q"  value={'auto'} placeholder="123" aria-label="Buy ticket"></input>
  <button type="submit">Buy ticket</button>
  </form>
} // end of function Purchase()

function Keno() {
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

function SuperLoto() {

  function onChangeDraws(event) {
    //console.log(event.target.name);
    const MaxNum = 6;
    const MinNum = 1;
    drawnum = Number(draws);
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      setStateDraws('1');
      drawnum = 1;
      return;
    }
    if (nbrN < MinNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер меньше " + MinNum);
      drawnum = 1;
      setStateDraws('1');
      return;
    }
    if (nbrN > MaxNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер больше " + MaxNum);
      drawnum = 1;
      setStateDraws('1');
      return;
    }
    setStateDraws(strN);
    drawnum = Number(strN);
    myInfoRef2.current.textContent = CalcSumSL();
  }

  function onChangeS(event) {
    //console.log(event.target.name);
    const MaxNum = 52;
    const MinNum = 1;
    let strN = event.target.value;
    if (strN.length < 2) {
      strN = '0' + strN;
    }
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      //return;
      strN = '00';
    }
    if (nbrN < MinNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер меньше " + MinNum);
      //return;
      strN = '00';
    }
    if (nbrN > MaxNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер больше " + MaxNum);
      //return;
      strN = '00';
    }
    let strPfx;
    let strCmb;
    strPfx = 'ns';
    strCmb = cs;
    if (event.target.name === strPfx + '1') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 0) strCmb[0] = strN;
      else strCmb.push(strN);
      setStateCS(strCmb);
    }
    if (event.target.name === strPfx + '2') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 1) strCmb[1] = strN;
      else strCmb.push(strN);
      setStateCS(strCmb);
    }
    if (event.target.name === strPfx + '3') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 2) strCmb[2] = strN;
      else strCmb.push(strN);
      setStateCS(strCmb);
    }
    if (event.target.name === strPfx + '4') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 3) strCmb[3] = strN;
      else strCmb.push(strN);
      setStateCS(strCmb);
    }
    if (event.target.name === strPfx + '5') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 4) strCmb[4] = strN;
      else strCmb.push(strN);
      setStateCS(strCmb);
    }
    if (event.target.name === strPfx + '6') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 5) strCmb[5] = strN;
      else strCmb.push(strN);
      setStateCS(strCmb);
    }
    if (event.target.name === strPfx + '7') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 6) strCmb[6] = strN;
      else strCmb.push(strN);
      setStateCS(strCmb);
    }
    if (event.target.name === strPfx + '8') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 7) strCmb[7] = strN;
      else strCmb.push(strN);
      setStateCS(strCmb);
    }
    if (event.target.name === strPfx + '9') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 8) strCmb[8] = strN;
      else strCmb.push(strN);
      setStateCS(strCmb);
    }
    if (event.target.name === strPfx + '10') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 9) strCmb[9] = strN;
      else strCmb.push(strN);
      setStateCS(strCmb);
    }
    if (event.target.name === strPfx + '11') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 10) strCmb[10] = strN;
      else strCmb.push(strN);
      setStateCS(strCmb);
    }
    if (event.target.name === strPfx + '12') {
      //console.log(event.target.name, strPfx + '1');
      if (strCmb.length > 11) strCmb[11] = strN;
      else strCmb.push(strN);
      setStateCS(strCmb);
      myInfoRef2.current.textContent = CalcSumSL();
    }
  }

  function onChange(event) {
    //console.log(event.target.name);
    const MaxNum = 52;
    const MinNum = 1;
    let strN = event.target.value;
    if (strN.length < 2) {
      strN = '0' + strN;
    }
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN)) {
      //event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      //return;
      strN = '00';
    }
    if (nbrN < MinNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер меньше " + MinNum);
      //return;
      strN = '00';
    }
    if (nbrN > MaxNum) {
      //event.preventDefault();
      //alert("Ошибка! Номер больше " + MaxNum);
      //return;
      strN = '00';
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
      if (strPfx === 'n1') setStateC1(strCmb);
      else if (strPfx === 'n2') setStateC2(strCmb);
      else if (strPfx === 'n3') setStateC3(strCmb);
      else if (strPfx === 'n4') setStateC4(strCmb);
      else if (strPfx === 'n5') setStateC5(strCmb);
      else if (strPfx === 'n6') setStateC6(strCmb);
    }
    else if (event.target.name === strPfx + '2') {
      //console.log(event.target.name, strPfx + '2');
      strCmb[1] = strN;
      if (strPfx === 'n1') setStateC1(strCmb);
      else if (strPfx === 'n2') setStateC2(strCmb);
      else if (strPfx === 'n3') setStateC3(strCmb);
      else if (strPfx === 'n4') setStateC4(strCmb);
      else if (strPfx === 'n5') setStateC5(strCmb);
      else if (strPfx === 'n6') setStateC6(strCmb);
    }
    else if (event.target.name === strPfx + '3') {
     strCmb[2] = strN;
     if (strPfx === 'n1') setStateC1(strCmb);
     else if (strPfx === 'n2') setStateC2(strCmb);
     else if (strPfx === 'n3') setStateC3(strCmb);
     else if (strPfx === 'n4') setStateC4(strCmb);
     else if (strPfx === 'n5') setStateC5(strCmb);
     else if (strPfx === 'n6') setStateC6(strCmb);
   }
    else if (event.target.name === strPfx + '4') {
      strCmb[3] = strN;
      if (strPfx === 'n1') setStateC1(strCmb);
      else if (strPfx === 'n2') setStateC2(strCmb);
      else if (strPfx === 'n3') setStateC3(strCmb);
      else if (strPfx === 'n4') setStateC4(strCmb);
      else if (strPfx === 'n5') setStateC5(strCmb);
      else if (strPfx === 'n6') setStateC6(strCmb);
    }
    else if (event.target.name === strPfx + '5') {
      strCmb[4] = strN;
      if (strPfx === 'n1') setStateC1(strCmb);
      else if (strPfx === 'n2') setStateC2(strCmb);
      else if (strPfx === 'n3') setStateC3(strCmb);
      else if (strPfx === 'n4') setStateC4(strCmb);
      else if (strPfx === 'n5') setStateC5(strCmb);
      else if (strPfx === 'n6') setStateC6(strCmb);
    }
    else if (event.target.name === strPfx + '6') {
      strCmb[5] = strN;
      if (strPfx === 'n1') setStateC1(strCmb);
      else if (strPfx === 'n2') setStateC2(strCmb);
      else if (strPfx === 'n3') setStateC3(strCmb);
      else if (strPfx === 'n4') setStateC4(strCmb);
      else if (strPfx === 'n5') setStateC5(strCmb);
      else if (strPfx === 'n6') setStateC6(strCmb);
    } // end of number in combination selection.
    myInfoRef2.current.textContent = CalcSumSL();
  }

  function onChangeAuto(event) {
    //console.log(event);
    //console.log('typeof ' + typeof(event));
    //console.log(event.target.name);
    //let strA = event.target.value;
    //console.log(strA);
    //console.log('typeof ' + typeof(strA));
    let strArr = ['00','00','00','00','00','00'];
    let bnlAuto = false;
    if (event.target.value === 'Y') {
      let numArr = [0,0,0,0,0,0];
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
      //console.log(strArr);
      //setStateC1(strArr);
      strArr.sort();
      bnlAuto = true;
    }
    else {
      strArr=['00','00','00','00','00','00'];
      bnlAuto = false;
    }
    if (event.target.name === 'a1') {
      setStateC1(strArr);
      setStateAuto1(bnlAuto);
    }
    else if (event.target.name === 'a2') {
      setStateC2(strArr);
      setStateAuto2(bnlAuto);
    }
    else if (event.target.name === 'a3') {
      setStateC3(strArr);
      setStateAuto3(bnlAuto);
    }
    else if (event.target.name === 'a4') {
      setStateC4(strArr);
      setStateAuto4(bnlAuto);
    }
    else if (event.target.name === 'a5') {
      setStateC5(strArr);
      setStateAuto5(bnlAuto);
    }
    else if (event.target.name === 'a6') {
      setStateC6(strArr);
      setStateAuto6(bnlAuto);
    }
    myInfoRef2.current.textContent = CalcSumSL();
  } // end of function onChangeAuto(event)

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
      if (strCmb.indexOf('00') === -1) {
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
    setStatePay('6_' + draws + strPay);
    /* e.g.
    Form request submitted by GET. Action URL is /formAKpay?q=xxx... with or for POST search as body e.g.: 
    user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
    */
    //event.preventDefault(); // NB! Use it to prevent sending standard POST/GET request to server with URL /formAKpay?q=xxxxx.....
    //GetData('pay'); // if use Fetch directly from html page.
  } // end of function handleSubmitPay(event)

  function numStrValue(strNum, auto) {
    if (!auto) return;
    //console.log(strNum);
    let strRet;
    if (strNum === '00') strRet = '';
    else strRet = strNum;
    return strRet;
  }

  function onChangeSystem(event) {
    sysnum = SysCmbSL(Number(system));
    //console.log(event.target.name);
    //console.log(event.target.value);
    //console.log(cs);
    //console.log(as);
    setStateCS([]);
    setStateAutoS(false);
    //console.log(cs);
    //console.log(as);
    const MaxNum = 12;
    const MinNum = 7;
    let strN = event.target.value;
    //console.log(strN);
    let nbrN = Number(strN);
    //console.log(nbrN);
    if (Number.isNaN(nbrN)) {
      event.preventDefault();
      //alert("Ошибка! Номер не задан корректно.");
      setStateSystem('7');
      return;
    }
    if (nbrN < MinNum) {
      event.preventDefault();
      //alert("Ошибка! Номер меньше " + MinNum);
      setStateSystem('7');
      return;
    }
    if (nbrN > MaxNum) {
      event.preventDefault();
      //alert("Ошибка! Номер больше " + MaxNum);
      setStateSystem('7');
      return;
    }
    setStateSystem(strN);
    //console.log(Number(strN));
    sysnum = SysCmbSL(Number(strN));
    cmbnum = 0;
    //let total = CalcSumSL();
    //console.log(total);
    //setStateSum(total);
    myInfoRef2.current.textContent = CalcSumSL();
  }

  function onChangeAutoSystem(event) {
    console.log(event);
    console.log('typeof ' + typeof(event));
    console.log(event.target.name);
    let strA = event.target.value;
    console.log(strA);
    console.log('typeof ' + typeof(strA));
    //let strArr = ['','','','','','','','','','','',''];
    let strArr = [];
    let bnlAuto = false;
    let numSys = Number(system);
    console.log('numSys: ' + numSys);
    if (event.target.value === 'Y') {
      let numArr = [0,0,0,0,0,0,0,0,0,0,0,0];
      let strNum;
      let current, result;
      let max = 52;
      let i = 0, j;
      do {
        current = Math.floor(Math.random() * (max));
        result = current + 1
        //console.log(current, result);
        if (numArr.indexOf(result) === -1) {
          for (j=0; j < numSys; j++) {
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
      } while (i < numSys);
      console.log(strArr);
      strArr.sort();
      bnlAuto = true;
    }
    else {
      let i = 0;
      do {
        strArr.push('00');
        i = i + 1;
      } while (i < numSys);
      //strArr=['00','00','00','00','00','00','00','00','00','00','00','00'];
      bnlAuto = false;
    }
    console.log(strArr);
    setStateCS(strArr);
    setStateAutoS(bnlAuto);
    myInfoRef2.current.textContent = CalcSumSL();
  } // end of function onChangeAutoSystem(event)

  function onChangeSystemFlag(event) {
    console.log(event);
    console.log('typeof ' + typeof(event));
    console.log(event.target.name);
    let bnlSys = false;
    if (event.target.value === 'Y') {
      bnlSys = true;
    }
    else {
      bnlSys = false;
    }
    setStateSystemFlag(bnlSys);
    //console.log(c1,a1,cs,as);
    setStateDraws(1);
    setStateC1(['00','00','00','00','00','00']);
    setStateC2(['00','00','00','00','00','00']);
    setStateC3(['00','00','00','00','00','00']);
    setStateC4(['00','00','00','00','00','00']);
    setStateC5(['00','00','00','00','00','00']);
    setStateC6(['00','00','00','00','00','00']);
    setStateAuto1(false);
    setStateAuto2(false);
    setStateAuto3(false);
    setStateAuto4(false);
    setStateAuto5(false);
    setStateAuto6(false);
    setStateSystem(7);
    setStateCS([]);
    setStateAutoS(false);
    //setStateSum(0);
    drawnum = 1;
    sysnum = SysCmbSL(7);
    cmbnum = 0;
    myInfoRef2.current.textContent = CalcSumSL();
  } // end of function onChangeSystemFlag.

  function CalcSumSL() {
    let strCmb;
    let blnDuplicate = false;
    cmbnum = 0;
    if (system_flag) {
      strCmb = cs;
      console.log(strCmb);
      let sys = Number(system);
      if (strCmb.indexOf('00') === -1) {
        blnDuplicate = Duplicate(strCmb, sys);
        if (! blnDuplicate) {
          cmbnum = 1;
        }
      }
    } // end of if (system_flag) {
    else {
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
    console.log(drawnum, sysnum, cmbnum); //, stake);
    if (system_flag) {
      tot = 15 * drawnum * sysnum * cmbnum; // * stake;
    }
    else {
      tot = 15 * drawnum * cmbnum; // * stake;
    }
    ret = 'Стоимость билета: ' + tot.toString();
    myInfoRef2.current.textContent = ret;
    return ret;
  } // end of function CalcSumSL.

  function SysCmbSL(sys) {
    return sys;
  }
  
  // '?agent=65&type=2&command=pay&date=20200808&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0'
  // &board1=01_11_15_24_33_52

  const [pay, setStatePay] = useState('');
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
  const [system_flag, setStateSystemFlag] = useState(false);
  const [system, setStateSystem] = useState(7);
  //const [cs, setStateCS] = useState(['00','00','00','00','00','00','00','00','00','00','00','00']);
  const [cs, setStateCS] = useState([]);
  const [as, setStateAutoS] = useState(false);
  //const [sum, setStateSum] = useState(15);
  
  return (
  <div>
  <h3>Супер Лото</h3>
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
      <input type="number" name="n11" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c1[0], a1)}></input>
      <input type="number" name="n12" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c1[1], a1)}></input>
      <input type="number" name="n13" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c1[2], a1)}></input>
      <input type="number" name="n14" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c1[3], a1)}></input>
      <input type="number" name="n15" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c1[4], a1)}></input>
      <input type="number" name="n16" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c1[5], a1)}></input>
      <p className="boardLabel">Авто</p>
      <select name="a1" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">2 комбинация</p>
      <input type="number" name="n21" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c2[0], a2)}></input>
      <input type="number" name="n22" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c2[1], a2)}></input>
      <input type="number" name="n23" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c2[2], a2)}></input>
      <input type="number" name="n24" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c2[3], a2)}></input>
      <input type="number" name="n25" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c2[4], a2)}></input>
      <input type="number" name="n26" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c2[5], a2)}></input>
      <p className="boardLabel">Авто</p>
      <select name="a2" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">3 комбинация</p>
      <input type="number" name="n31" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c3[0], a3)}></input>
      <input type="number" name="n32" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c3[1], a3)}></input>
      <input type="number" name="n33" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c3[2], a3)}></input>
      <input type="number" name="n34" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c3[3], a3)}></input>
      <input type="number" name="n35" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c3[4], a3)}></input>
      <input type="number" name="n36" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c3[5], a3)}></input>
      <p className="boardLabel">Авто</p>
      <select name="a3" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">4 комбинация</p>
      <input type="number" name="n41" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c4[0], a4)}></input>
      <input type="number" name="n42" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c4[1], a4)}></input>
      <input type="number" name="n43" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c4[2], a4)}></input>
      <input type="number" name="n44" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c4[3], a4)}></input>
      <input type="number" name="n45" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c4[4], a4)}></input>
      <input type="number" name="n46" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c4[5], a4)}></input>
      <p className="boardLabel">Авто</p>
      <select name="a4" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">5 комбинация</p>
      <input type="number" name="n51" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c5[0], a5)}></input>
      <input type="number" name="n52" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c5[1], a5)}></input>
      <input type="number" name="n53" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c5[2], a5)}></input>
      <input type="number" name="n54" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c5[3], a5)}></input>
      <input type="number" name="n55" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c5[4], a5)}></input>
      <input type="number" name="n56" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c5[5], a5)}></input>
      <p className="boardLabel">Авто</p>
      <select name="a5" onChange={onChangeAuto}>
        <option value='N'>Нет</option>
        <option value='Y'>Да</option>
      </select>
  </div>
  <div className = "boardSL">
      <p className="boardLabel">6 комбинация</p>
      <input type="number" name="n61" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c6[0], a6)}></input>
      <input type="number" name="n62" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c6[1], a6)}></input>
      <input type="number" name="n63" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c6[2], a6)}></input>
      <input type="number" name="n64" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c6[3], a6)}></input>
      <input type="number" name="n65" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c6[4], a6)}></input>
      <input type="number" name="n66" className="numbs" min="1" max="52" step="1" onChange={onChange} value={numStrValue(c6[5], a6)}></input>
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
        <input type="number" name="ns1" className="numbs" min="1" max="52" step="1" onChange={onChangeS} value={numStrValue(cs[0], as)}></input>
        <input type="number" name="ns2" className="numbs" min="1" max="52" step="1" onChange={onChangeS} value={numStrValue(cs[1], as)}></input>
        <input type="number" name="ns3" className="numbs" min="1" max="52" step="1" onChange={onChangeS} value={numStrValue(cs[2], as)}></input>
        <input type="number" name="ns4" className="numbs" min="1" max="52" step="1" onChange={onChangeS} value={numStrValue(cs[3], as)}></input>
        <input type="number" name="ns5" className="numbs" min="1" max="52" step="1" onChange={onChangeS} value={numStrValue(cs[4], as)}></input>
        <input type="number" name="ns6" className="numbs" min="1" max="52" step="1" onChange={onChangeS} value={numStrValue(cs[5], as)}></input>
        <input type="number" name="ns7" className="numbs" min="1" max="52" step="1" onChange={onChangeS} value={numStrValue(cs[6], as)}></input>
        {Number(system) >= 8 && <input type="number" name="ns8" className="numbs" min="1" max="52" step="1" onChange={onChangeS} value={numStrValue(cs[7], as)}></input>}
        {Number(system) >= 9 && <input type="number" name="ns9" className="numbs" min="1" max="52" step="1" onChange={onChangeS} value={numStrValue(cs[8], as)}></input>}
        {Number(system) >= 10 && <input type="number" name="ns10" className="numbs" min="1" max="52" step="1" onChange={onChangeS} value={numStrValue(cs[9], as)}></input>}
        {Number(system) >= 11 && <input type="number" name="ns11" className="numbs" min="1" max="52" step="1" onChange={onChangeS} value={numStrValue(cs[10], as)}></input>}
        {Number(system) >= 12 && <input type="number" name="ns12" className="numbs" min="1" max="52" step="1" onChange={onChangeS} value={numStrValue(cs[11], as)}></input>}
        <p className="boardLabel">Авто</p>
        <select name="as" onChange={onChangeAutoSystem}>
          <option value='N'>Нет</option>
          <option value='Y'>Да</option>
        </select>
      </div>
    </div>
    } {/* end of {system_flag */}
  </div>
  <button type="button" onClick={CalcSumSL}>Рассчитать стоимость билета.</button>
  <form role="search" method="get" action="formAKpay" onSubmit={handleSubmitSuperLoto}>
    <input hidden type="search" name="q"  defaultValue={pay} placeholder="123" aria-label="Buy ticket"></input>
    <button type="submit">Купить билет</button>
  </form>
  </div>
  )
}

function Maxima() {
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

function Tryika() {
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