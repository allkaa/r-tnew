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
  const [found, setStateFound] = useState('');
  const [searchDone, setStateSearchDone] = useState(false);

  function handleChangeSearch(event) {
    console.log('========> handleChangeName event <==========')
    let strSearch = '';
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
    /* e.g.
    Form request submitted by POST. Action URL is /formAK with search as body: 
    user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
    */
   if (search !== '') {
    setStateFound('Modified ' + search);
    console.log('old found: ' + found);
    setStateSearchDone(true);
   }
   else {
    setStateFound('');
    console.log('old found: ' + found);
    setStateSearchDone(false);
   }
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
        { searchDone && <p id="found">{found}</p>}

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
