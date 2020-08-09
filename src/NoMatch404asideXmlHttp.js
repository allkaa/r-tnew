// NoMatch404aside 002
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
import { useState, useEffect } from 'react'; // React Hooks used.

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

function NoMatchAside() {
  const [search, setStateSearch] = useState('');
  const [searchStarts, setStateSearchStarts] = useState(false);
  const [dataXML, setStateDataXML] = useState(''); // data fetched thru XhrXML.
  const [found, setStateFound] = useState('');
  const [searchDone, setStateSearchDone] = useState(false);

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
  useEffect(() => {
    //const url = 'http://unl.woks:9994/'; // project WinTicsCheckNoSslTEST
    //const url = 'http://10.8.194.3:9994/'; // project WinTicsCheckNoSslTEST new.
    //XhrExecutor(url + '?agent=58&type=2&command=checkval&ticket_number=004-12345678-1234567');
    const url = 'http://10.8.194.3:10064/'; // project UnlCashExTEST ver. 3.8
    //XhrExecutor(url + '?agent=65&type=2&command=checkval&ticket_number=004-12345678-1234567');
    if ((search !== '') && (searchStarts)) {
      let xhrRet = -2;
      xhrRet = XhrExecutor(url + '?agent=65&type=2&command=checkval&ticket_number=004-12345678-1234567');
      console.log('xhrRet = ' + xhrRet);
      //setStateFound(dataXML);
      console.log('handleSubmit XML response info found: ' + found);
      setStateSearchDone(true);
    }
    else {
      setStateFound('');
      console.log('Empty search info: ' + found);
      setStateSearchDone(false);
    }
  
    function XhrExecutor(props) {
      //console.log('XhrExecutor props:');
      //console.log(props);
      let urlReq = props;
      console.log('urlReq:');
      console.log(urlReq);
  
      let txtErr 
      //let objThis = this
      const xhr = new XMLHttpRequest();
      //xhr.open('POST', 'http://10.8.194.3:42001/?testDebian', true);
      xhr.open('GET', urlReq, true); // true if async.
      // NB! On server reply header must be set as "Access-Control-Allow-Origin: *"
      //console.log(xhr);
      // If specified, responseType must be empty string or "document" - can not be specified for synchroneuos xhr.open().
      //xhr.responseType = 'document';
      //xhr.responseType = '';
      // Force the response to be parsed as XML
      xhr.overrideMimeType('text/xml');
  
      ///* GET or PUT state case using onload event.
      xhr.onload = () => {
        //console.log('xhr.getAllResponseHeaders():')
        //console.log(xhr.getAllResponseHeaders());
        let docXml;
        let resp = '';
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
          //console.log(xhr.response);
          docXml = xhr.responseXML
          //console.log(docXml);
          let xmlS = new XMLSerializer();
          let xmlString = xmlS.serializeToString(docXml);
          console.log('xmlString:')
          console.log(xmlString)
          let nodeValue = docXml.getElementsByTagName("result")[0].childNodes[0].nodeValue; // get <result> tag text value.
          //let nodeValue2 = docXml.getElementsByTagName("sum")[0].childNodes[0].nodeValue; // get <sum> tag text value.
          //resp = `result = ${nodeValue}, sum = ${nodeValue2}`;
          resp = `result = ${nodeValue}`;
        }
        else {
          txtErr = `Request onload error - status ${xhr.status}, readyState ${xhr.readyState}`;
          console.log(txtErr);
          setStateDataXML(txtErr);
          return 1;
        }
        setStateSearchDone(true);
        console.log(resp);
        setStateFound(resp);
        //setStateDataXML(resp);
        //console.log('dataXML set as: ');
        //console.log(dataXML);
        //setStateFound(dataXML);
        console.log('XML response info found: ');
        console.log(found);
        return 0;
      }
      //*/
  
      /*
      // GET or PUT case using onreadystatechange event;
      xhr.onreadystatechange = () => { // Call a function when the state changes.
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          // Request finished. Do processing here.
          console.log(xhr.getAllResponseHeaders());
          let docXml
          //console.log(xhr.response);
          docXml = xhr.responseXML
          //console.log(docXml);
          let xmlS = new XMLSerializer();
          let xmlString = xmlS.serializeToString(docXml);
          console.log(xmlString)
          let nodeValue = docXml.getElementsByTagName("result")[0].childNodes[0].nodeValue; // get <result> tag text value.
          let nodeValue2 = docXml.getElementsByTagName("comment")[0].childNodes[0].nodeValue; // get <comment> tag text value.
          this.setState({
          //data: xmlString,
          data: `result = ${nodeValue}, comment = ${nodeValue2}`
          })
        }
        else {
          txtErr = `Request onreadystate event - status ${xhr.status}, readyState ${xhr.readyState}`
          console.log(txtErr)
          this.setState({ data: txtErr,})
        }
      }
      */
  
      xhr.onerror = () => {
        txtErr = `Request failed -> onerror event occured.`;
        console.log(txtErr);
        setStateDataXML(txtErr);
        return 1;
      }
      
      xhr.ontimeout = () => {
        txtErr = `Request failed -> ontimeout event occured`
        console.log(txtErr)
        //this.setState({ data: txtErr,})
        setStateDataXML(txtErr);
        return 1;
      }
  
      xhr.send(); // for GET case with empty body.
      return -1;
  
      // PUT case:
      //Send the proper header information along with the request
      //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      //xhr.setRequestHeader("Content-Type", "text/plain");
      //xhr.send("foo=bar&lorem=ipsum"); // send with body for POST.
      // xhr.send(new Int8Array()); 
      // xhr.send(document);
  
    } // end of function XhrExecutor(props) 
  },[search, searchStarts, found]); // end of useEffect(() => {
  //[search, XhrExecutor, found] 
  
  function handleChangeSearch(event) {
    console.log('========> handleChangeSearch event <==========')
    let strSearch = '';
    let oldSearch = search;
    console.log('event: ' + event);
    console.log(event);
    console.log('event.target: ' + event.target);
    console.log(event.target);
    console.log('event.target.name: ' + event.target.name);
    console.log(event.target.name);
    console.log('event.target.type: ' + event.target.type)
    console.log(event.target.type)
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    //setStateSearch(event.target.value.toUpperCase());
    strSearch = event.target.value.toUpperCase();
    if (strSearch !== oldSearch) {
      console.log('strSearch vs oldSearch: [' + strSearch + '] [' + oldSearch + ']')
      setStateFound('');
      setStateSearchDone(false);
    }
    setStateSearch(strSearch);
    console.log('strSearch: ' + strSearch);
    if (strSearch === '') {
      setStateFound('');
      console.log('Old found: ' + found);
      setStateSearchDone(false);
     }
    }

  function handleSubmit(event) {
    console.log('========> Form handleSubmit <==========')
    console.log('event: ' + event);
    console.log(event);
    console.log('event.target: ' + event.target);
    console.log(event.target);
    console.log('event.target.name: ' + event.target.name);
    console.log(event.target.name);
    console.log('event.target.type: ' + event.target.type)
    console.log(event.target.type)
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    console.log(`search: ${search}`);
    event.preventDefault(); // NB! Use it to prevent sending standard POST/GET request to server with URL //formAK
    if (search.length > 0) {
      setStateSearchStarts(true);
    }
    else {
      setStateSearchStarts(false);
    }
    /* e.g.
    Form request submitted by POST. Action URL is /formAK with search as body: 
    user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
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
        {searchDone && <p id="found">{found}</p>}
        {dataXML && <p id="found">{dataXML}</p>}

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
