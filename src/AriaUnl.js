// AriaUnl_006
import React, { useState, useEffect } from 'react';
import logo from './logoFancyLetter.png'; // Tell Webpack this JS file will use this image placed in src dir.
import logo2 from './logo.png'; // Tell Webpack this JS file will use this image placed in src dir.

// React function component.
function AriaUnl(props) {
  console.log('props:');
  console.log(props);
  //
  // State Hook samples:
  // Declare a new state variable, which we'll call "count" using destructuring assignment syntax
  // Two constants will be created count as number and setCount(args) as function.
  //const [count, setCount] = useState(0); // initial count state set as zero.
  //const [age, setAge] = useState(props.age);
  const [searchTxt, setsearchTxt] = useState('');
  //const [todos, setTodos] = useState(['text', ' ', 'Learn Hooks']);
  //const [todos, setTodos] = useState([{ key_learn: 'Learn Hooks' }]); // does not work - React child can not be object with key(s).
  //
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
  useEffect(() => {
    document.title = `ARIA UNL`;
  });
  //

  /*
      <p>Search text is {searchTxt}</p>
      <button onClick={
        () => {
          setsearchTxt(searchTxt + '?');
        }
      }>
        Click me
      </button>
  */

  // NB! Only one child can be returned!
  return (
  <div> 
  {/*<!-- Here is our main header that is used accross all the pages of our website -->*/}
  <header>
    <img id="logoimg" src={logo} alt="logo"/> {/* src="logo.png"  logo.png img_5terre.jpg are in public dir */}
    <h1>Ukraine National Lottery</h1>
    {/*<!-- Even is it's not mandatory, it's common practice to put the main navigation menu within the main header -->*/}
    <nav role="navigation">
      <ul>
        <li><a href="#f1">Home</a></li>
        <li><a href="#f2">Our team</a></li>
        <li><a href="#f3">Projects</a></li>
        <li><a href="#f4">Contact</a></li>
      </ul>
      {/*<!-- A Search form is another commmong non-linear way to navigate through a website. -->*/}
      {/*</nav><!-- creates GET requst e.g. for search "nemo" as file:///home/akaarna/react-tutorial/indexTest.html?q=nemo -->*/}
      <form role="search">
        <input type="search" name="q" placeholder="Search query" aria-label="Search through site content"/>
        <input type="submit" value="Go!"/>
      </form>
    </nav>
  </header>

  {/*<!-- Here is our page's main content -->*/}
  <main>

    {/*<!-- the aside content can also be nested within the main content -->*/}
    <aside id="leftaside"> {/* role="complementary" is default for aside */}
      <h2>Float img in aside</h2>
      {/*<img id="logoimg" src="logo.png" alt="logo"/>*/}
      <img id="logoimg2" src={logo2} alt="logo2"/> {/* src="logo.png"  logo.png img_5terre.jpg are in public dir */}
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. </p>
    </aside>

    {/*<!-- It contains an article -->*/}
    <article>{/*  role="article" is default for article */}
      <h2>Article heading</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</p>

      <h3>subsection</h3>
      <p>Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.</p>
      <p>Pelientesque auctor nisi id magna consequat sagittis. Curabitur dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.</p>

      <h3>Another subsection</h3>
      <p>Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum soclis natoque penatibus et manis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</p>
      <p>Vivamus fermentum semper porta. Nunc diam velit, adipscing ut tristique vitae sagittis vel odio. Maecenas convallis ullamcorper ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, is fringille sem nunc vet mi.</p>
    </article>
    
    {/*<!-- the aside content can also be nested within the main content -->*/}
    <aside id="rightaside"> {/* role="complementary" is default for aside */}
      <h2>Related links</h2>
      <ul>
        <li><a href="#11">Oh I do like to be beside the seaside</a></li>
        <li><a href="#12">Oh I do like to be beside the sea</a></li>
        <li><a href="#13">Although in the North of England</a></li>
        <li><a href="#14">It never stops raining</a></li>
        <li><a href="#15">Oh well...</a></li>
      </ul>
    </aside>

  </main>

  {/*<!-- And here is our main footer that is used across all the pages of our website -->*/}
  <footer>
    <p>©Copyright 2020 by UNL. All rights reversed.</p>
  </footer>

  </div>
  );
}

export default AriaUnl;
