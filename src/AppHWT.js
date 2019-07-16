// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'
//import logo from './logo.svg'; // logo.svg in srs dir


function noStyles() {
  //console.log(`noStyles started`)
  document.styleSheets[0].disabled = true;
  document.styleSheets[1].disabled = true;
  document.styleSheets[2].disabled = true;
  document.styleSheets[3].disabled = true;
  console.log(`noStyles finished`)
}

function reStyle(n) {
  //console.log(`reStyle ${n} started`)
  noStyles()
  document.styleSheets[n].disabled = false;
  console.log(`reStyle ${n} finished`)
}

///*
// NB! On separate linked css files does not work.
function closeBlackdiv() { // called from showStyle(n) created background dimmed div onclick.
  console.log(`closeBlackdiv started`)
  let blackdiv, stylediv;
  blackdiv = document.getElementById("blackdiv")
  blackdiv.parentNode.removeChild(blackdiv);
  stylediv = document.getElementById("stylediv")
  stylediv.parentNode.removeChild(stylediv);
  console.log(`closeBlackdiv finished`)
}

// NB! On separate linked css files does not work.
function showStyle(n) {
  console.log(`showStyles ${n} started`)
  let div, text, blackdiv;
  // create dimmed background.
  blackdiv = document.createElement("div"); // div may be also used.
  blackdiv.setAttribute("style","background-color:#000000;position:absolute;width:100%;height:100%;top:0;opacity:0.5;margin-left:-20px;");
  blackdiv.setAttribute("id","blackdiv");
  //blackdiv.setAttribute("onclick","closeBlackdiv()"); // do NOT work in React.
  //blackdiv.onclick = closeBlackdiv; // OK works - do NOT use closeBlackdiv() !!!
  blackdiv.addEventListener("click", closeBlackdiv, false);  // OK works - do NOT use closeBlackdiv() , false is default btw.
  document.body.appendChild(blackdiv);
  // create stylesheet source text window.
  div = document.createElement("DIV");
  div.setAttribute("id","stylediv");
  div.setAttribute("style","background-color:#ffffff;padding-left:5px;position:absolute;width:auto;height:auto;top:100px;bottom:50px;left:200px;right:200px;overflow:auto;font-family: monospace; white-space: pre;line-height:16px;");
  // NB! On separate linked css files does not work.
  text = document.createTextNode(document.getElementsByTagName("STYLE")[n].innerHTML); // "style" may be also used.
  div.appendChild(text);
  document.body.appendChild(div);
  alert('Click on dimmed background to close style source text window created next.');
  console.log(`showStyles ${n} finished`)
}
//*/

// App is HOC (High Order Component) by extending React Component.
class App extends Component {

  // Declare state as Public field and it will be seen in constructor immediately (always present).
  // By declaring fields up-front with or without a default value,
  // class definitions become more self-documenting, and the fields are always present.
  // NB! Public and Private fields declaration is experimental and it works thru Babel compilation or on some browsers.
  /*
  state = {
    name: 'Dee',
    job: 'Aspring actress',
  }
  */

  // We'll need the constructor() to use `this`, and to receive the props of the parent.
  constructor(props) {
    console.log('App constructor initial props before super(props)')
    console.log(props)
    super(props) // call the super class constructor and pass in the props parameter
    console.log('App constructor initial props after super(props)')
    console.log(props)

    console.log('App constructor this.state before settings test data')
    console.log(this.state)
    // Declare state in constructor /*
    this.state = {
        name: 'Dee',
        job: 'Aspring actress',
      }
    //*/
    console.log('App constructor this.state after settings test data')
    console.log(this.state)
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    console.log('========> App componentDidMount <==========')
  }

  handleOnClick = event => {
    console.log('App handeChange event event.target')
    console.log(event.target)
    
    let nameToggle
    if (this.state.name === 'Alex') {
      nameToggle = 'Alex2'
    }
    else {
      nameToggle = 'Alex'
    }
    console.log('App handleOnClick event this.state before setting event {name: value}')
    console.log(this.state)
    this.setState({ // set App this.state asyn and trigger re-rendering with childs.
      name: nameToggle, job: 'SW Engineer'
    })
    console.log('App handleOnClick event this.state after asyn setting event {name: value}')
    console.log(this.state)
    //console.log('App handleOnClick event this.initialState')
    //console.log(this.initialState)
  }

    // A class component must include render(), and the return statement can only return ONE parent element:
  render() {
    //const { characters } = this.state
    // Render of re-render with Table and Form childs.
    console.log('========> App render <==========')
    // {/*<img src={logo} alt="React Logo" className = 'logo' ></img>*/}
    // {/*<img src={logo} alt="React Logo" className = 'logo' ></img>*/}
    // {/* <h1>Positioning</h1> */}
    // Below used <img src="img_car.jpg"/> element must be in public dir
    /*<img src="img_car.jpg" alt="Car" style={wdth100}/>*/

    // Declare inline styles used below in elements:
    /*
    // style={ht200px}
    const ht200px = {
      height: '200px',
    };
    // style={ht60px}
    const ht60px = {
      height: '60px',
    };

    // style={wdth100}
    const wdth100 = {
      width: '100%',
    };
   
    // style={bYp5px}
    const bWSp2px = {
      background: 'whitesmoke', padding: '2px',
    };
    // style={taCenter}
    const taCenter = {
      textAlign: 'center',
    };
    */

    // style={floatLeft}
    const floatLeft = {
      float: 'left',
    };
    // style={floatLeft}
    const floatRight = {
      float: 'right',
    };
    // style={left0}
    const left0 = {
      left: '0',
    };
    // style={right0}
    const right0 = {
      right: '0',
    };
    // style={dispNone}
    const dispNone = {
      display: 'none',
      width: '100%',
    };

    // style={wdth100}
    const wdth100 = {
      width: '100%',
    };
    // style={wdth30}
    const wdth30 = {
      display: 'inline-block',
      width: '12.2%',
    };
    // style={wdth50}
    const wdth50 = {
      display: 'block',
      width: '50%',
    };
   
    function w3_open() {
      //document.getElementById("mySmallMenu").style.display = "none";
      //document.getElementById("MenuBar").style.width = "100%"; // 25%
      if (document.getElementById("MenuBar").style.display === "block") {
        document.getElementById("MenuBar").style.display = "none";
      }
      else { // document.getElementById("MenuBar").style.display === "none"
        document.getElementById("MenuBar").style.display = "block";
      }
    }
  
    /*
    function w3_close() {
      document.getElementById("MenuBar").style.display = "none";
      document.getElementById("mySmallMenu").style.display = "block";
    }
    */

    // style={padding6px}
    const padding6px = {
      padding: '6px',
    };

    function wxh() {
      let w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0];
      //x = w.innerWidth || e.clientWidth || g.clientWidth;
      //y = w.innerHeight|| e.clientHeight|| g.clientHeight;
      //alert(x + ' × ' + y);
      //alert('window ' + w.innerWidth + ', document ' + e.clientWidth + ', body ' + g.clientWidth);
      let txt = 'window.innerWidth ' + w.innerWidth + 'px, document.clientWidth ' + e.clientWidth + 'px, body.clientWidth ' + g.clientWidth + "px, ";
      txt = txt + 'window.outerWidth' + w.outerWidth + "px, window.outerHeight " + w.outerHeight + 'px, window.innerHeight ' ;
      txt = txt + w.innerHeight + 'px.';
      document.getElementById('wdt').innerText = txt;
    }
    
    return (
  <div className="container">


{/*<!-- Note -->}
<div style={bWSp2px}>
  <h4 style={taCenter}>Resize the browser window to see the responsive effect.</h4>
</div>
*/}

<header>
  <button type='button' onClick={()=>wxh()}>Resize the browser window to see the effect.</button>
  <h2 id="wdt">Responsive Image Gallery</h2>
  <br/>
</header>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_5terre.jpg">
      {/* NB! <img> styles attributes with INITIAL width and height will be overrun by class CSS styles width and height */}
      <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image1 here</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_forest.jpg">
      <img src="img_forest.jpg" alt="Forest" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image2 here</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_lights.jpg">
      <img src="img_lights.jpg" alt="Northern Lights" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image3 here</div>
  </div>
</div>

<div className="responsive">
  <div className="gallery">
    <a target="_blank" href="img_mountains.jpg">
      <img src="img_mountains.jpg" alt="Mountains" width="600" height="400"/>
    </a>
    <div className="desc">Add a description of the image4 here</div>
  </div>
</div>

<div className="clearfix"></div>

<iframe src="http://www.ee" title="test"></iframe>

{/* srcset and sizes sample:
<img src="one.png"
  srcset="two.png 100w,
  three.png 500w,
  four.png 1000w"

sizes="(min-width: 900px) 1000px,
      (max-width: 900px) and (min-width: 400px) 50em,
      ( not (orientation: portrait) ) 300px,
      ( (orientation: landscape) or (min-width: 1000px) ) 50vw, 
      100vw">
</img>
*/}

<img id="imset" srcset="img_5terre.jpg320x200 300w, img_5terre.jpg 600w"
     sizes="(max-width: 500px) 48vw, 48vw"
     src="img_5terre.jpg" alt="Elva dressed as a fairy">
</img>

{/* very last information div must be after clearfix */}
<footer>
<div style={padding6px}>
  <p>For screens larger than 700px wide, it will show four images side by side (24.99999%).</p>
  <p>For screens 700px and up to 501px, it will show two images side by side (49.99999%).</p>
  <p>For screens 500px and smaller, the images will stack vertically (100%).</p>
  <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>
</div>
</footer>


    </div>
    )
  }
}

export default App