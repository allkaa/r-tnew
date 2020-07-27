// NoMatch404aside 001
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
  return (
    <div>
      <h1>Ukraine National Lottery</h1>

      <header>
        <img id="logoimg" src={logo} alt="logo"/> {/* src="logo.png"  logo.png img_5terre.jpg are in public dir */}
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
            <NavNoMatch />
          </Route>
        </Switch>
        </div>
        </Router>
        </nav>
      </header>

      <main>
        {/*<!-- the aside content can also be nested within the main content -->*/}
        <aside id="leftaside"> {/* role="complementary" is default for aside */}
          <h2>Float img in aside</h2>
          {/*<img id="logoimg" src="logo.png" alt="logo"/>*/}
          <img id="logoimg2" src={logo2} alt="logo2"/> {/* src="logo.png"  logo.png img_5terre.jpg are in public dir */}
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. </p>
        </aside>
        <article>
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
    Nav Matched! <code>{location.pathname}</code> {reply}
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
