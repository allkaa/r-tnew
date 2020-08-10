// NoMatch404aside 101
import React from "react";
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

// NB! "Global" var works!!!
let txn_id = 10000000;

function NoMatchAside() {
  // NB! Use only state hooks for consts needed for rendering tags!!!
  const [search, setStateSearch] = useState('');
  //const [searchStarts, setStateSearchStarts] = useState(false); // not needed!
  const [dataXML, setStateDataXML] = useState(''); // error messages if any.
  const [found, setStateFound] = useState('');
  //const [searchDone, setStateSearchDone] = useState(false); // not needed!


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
  function GetData() {
    //const url = 'http://unl.woks:9994/'; // project WinTicsCheckNoSslTEST
    //const url = 'http://10.8.194.3:9994/'; // project WinTicsCheckNoSslTEST new.
    //XhrExecutor(url + '?agent=58&type=2&command=checkval&ticket_number=004-12345678-1234567');
    const url = 'http://10.8.194.3:10064/'; // project UnlCashExTEST ver. 3.8
    //XhrExecutor(url + '?agent=65&type=2&command=checkval&ticket_number=004-12345678-1234567');
    console.log('txn_id=' + txn_id);
    let xhrRet = -2;
    if ((search !== '')) { //  && (searchStarts)
      xhrRet = FetchExecutor(2); // Asynchroneous.
      console.log('xhrRet = ' + xhrRet);
      //setStateFound(dataXML);
      //console.log('handleSubmit Fetch XML response info found: ' + found);
      //setStateSearchDone(true);
    }
    else {
      xhrRet = FetchExecutor(1); // Asynchroneous.
      console.log('xhrRet = ' + xhrRet);
    }
    txn_id = txn_id + 1;
    console.log('txn_id=' + txn_id);
  /*
    else {
      setStateFound('');
      console.log('Empty search and old found is: ' + found);
      setStateSearchDone(false);
    }
    */

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
        reqString = url + '?agent=65&type=2&command=pay&date=20200808&txn_id=' + txn_id + '&game=6&num_of_draws=1&num_of_boards=1&sum=15.00&msisdn=0';
      }
      else if (props === 2) {
        reqString = url + '?agent=65&type=2&command=checkval&ticket_number=' + search ;
      }
      else {
        console.log('NB! Internal error - wrong props: ' + props);
        return;
      }
      console.log('reqString: ' +reqString);
      let crucialNetErr = true; // NB! Initially set crucial Net Error for request.
      //fetch('http://10.8.194.3:42001/?testDebian');
      /* Fetch with init object containing any custom settings that you want to apply to the request:
      let myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/xml');
      fetch('http://10.8.194.3:42001/?testDebian', {method: 'GET', headers: myHeaders, mode: 'cors'}).then(function(response) {
      
      mode: The mode you want to use for the request are cors, no-cors, same-origin, or navigate. The default is cors.
      */
      console.log('===============> fetch begin');
      //errorMessage.textContent = '';
      //hdrWarn.textContent = 'Wait for fetch processing...';
      fetch(reqString)
      .then(response => {
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
          //hdr2.textContent = 'NB! Wrong format of XML sting received:';
          //container.appendChild(hdr2);
          //p1.textContent = data; // set text content.
          //container.appendChild(p1);
          txtErr = `Reply XML format error - ${data}`;
          console.log(txtErr);
          setStateDataXML(txtErr);
          //dataXML = txtErr;
          return 1;
        }
        else {
          let xmlS = new XMLSerializer();
          let xmlString = xmlS.serializeToString(oXmlDOM);
          console.log('xmlString:')
          console.log(xmlString)
          //p1.textContent = xmlString;
          //container.appendChild(p1);
          //hdr2.textContent = '<result> tag:';
          //container.appendChild(hdr2);
          let nodeValue = oXmlDOM.getElementsByTagName("result")[0].childNodes[0].nodeValue; // get <result> tag text value.
          //const p2 = document.createElement('p');
          //p2.textContent = nodeValue;
          //let nodeValue2 = docXml.getElementsByTagName("sum")[0].childNodes[0].nodeValue; // get <sum> tag text value.
          //container.appendChild(p2);
          setStateFound(`result = ${nodeValue}`);
          //found = `result = ${nodeValue}`;
        }
        //setStateSearchDone(true);
        //searchDone = true;
        console.log(found);
        //setStateFound(resp);
        //setStateDataXML(resp);
        //console.log('dataXML set as: ');
        //console.log(dataXML);
        //setStateFound(dataXML);
        console.log('Fetch XML response info set in OLD found: ');
        console.log(found);
        return 0;
      })
      .catch(err => { // catch network error and artificially thrown Error in very first then().
        // Do something for crucial or non-crucial error e.g. 404 here
        //const errorMessage = document.createElement('marquee') // obsolate.
        //hdrWarn.textContent = 'NB! Network Error occured.';
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
     console.log('Old found: ' + found);
    }

  function handleSubmit(event) {
    console.log('=====================================> Form handleSubmit <============================================')
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
    event.preventDefault(); // NB! Use it to prevent sending standard POST/GET request to server with URL //formAK
    /* e.g.
    Form request submitted by POST. Action URL is /formAK with search as body: 
    user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
    */
    GetData();
    //console.log('searchDone after GetDate()' + searchDone);
    console.log('found after GetDate()' + found);
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/nav-match1">Our team</Link>
          </li>
          <li>
            <Link to="/nav-match2">Projects</Link>
          </li>
          <li>
            <Link to="/nav-match3">Contact</Link>
          </li>
        </ul>
        {/*<!-- A Search form is another commmong non-linear way to navigate through a website. -->*/}
        {/*<!-- creates GET requst {e.g. for search "123" as http://localhost:3000/nav-match3?q=123 -->*/}
        <form role="search" method="get" action="formAK" onSubmit={handleSubmit}> {/* action="formAK" form onSubmit={handleSubmit} */}
          <input type="search" name="q"  value={search} onChange={handleChangeSearch} placeholder="Search query 2" aria-label="Search through site content"></input>
          {/*<input type="search" name="q" placeholder="Search query 7" aria-label="Search through site content"/>*/}
          {/*<input type="submit" value="Go!" formMethod="get" formAction="formAK"/>*/}
          <input type="submit" value="Go!"/>
        </form>
        {/*<p id="found">{found}</p>*/}
        {(found.length > 0) && <p id="found">{found}</p>}
        {/* searchDone && <p id="found">{found}</p>*/}
        <p id="dataXML">{dataXML}</p>
        {/* dataXML && <p id="dataXML">{dataXML}</p>*/}

        <Switch>
          <Route exact path="/">
            <NavHome />
         </Route>
          <Route path="/nav-match1">
            <NavWillMatch />
          </Route>
          <Route path="/nav-match2">
            <NavWillMatch />
          </Route>
          <Route path="/nav-match3">
            <NavWillMatch />
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

function NavHome() {
  //let dt = new Date();
  //let reply = dt.toLocaleTimeString('uk'); // 'en-US'
  //return <h3>Nav Home {reply}</h3>;
  return null;
}

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

function NavNoMatch() {
  let location = useLocation();
  console.log('location:');
  console.log(location);
  let dt = new Date();
  let reply = dt.toLocaleTimeString('uk'); // 'en-US'
  return (
    <div>
      <p className = "special">
        Nav No match for <code>{location.pathname}</code> {reply}
      </p>
    </div>
  );
}

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
