// AppHWT-form-MDN
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
    
    function nameChng() {
      document.getElementById('name').value = "1111";
      //alert("name chng done");
      //let x = document.getElementById('user_message').innerText;
      //alert(x)
    }

    return (
  <div className="container">


{/*<!-- Note -->}
<div style={bWSp2px}>
  <h4 style={taCenter}>Resize the browser window to see the responsive effect.</h4>
</div>
*/}

<header>
  <button type='button' onClick={()=>wxh()}>Press the button to see actual viewport info.</button>
  <h3 id="wdt">viewport info</h3>
  <br/>
</header>

<form action="/my-handling-form-page" method="post"> {/* action="#1" */}
  <button type="button" onClick={()=>nameChng()}>Set Name value</button>
  <div>
    <label htmlFor="name">Name: <abbr title="required">*</abbr> </label>
    <input type="text" id="name" name="user_name" defaultValue="Alex"></input> {/*  value="default value" */}
  </div>
  <div>
    <label htmlFor="mail">E-mail:</label>
    <input type="email" id="mail" name="user_mail"/>
  </div>
  <div>
    <label htmlFor="msg">Message:</label>
    <textarea id="msg" name="user_message" defaultValue="Default textarea" ></textarea>
  </div>

  <div className="button">
    <button type="submit">Send your message</button>
  </div>

</form>
<br/>
<form>
  <fieldset>
    <legend>Fruit juice size</legend>
    <p>
      <input type="radio" name="size" id="size_1" defaultValue="small"/>
      <label htmlFor="size_1">Small</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" defaultValue="medium"/>
      <label htmlFor="size_2">Medium</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" defaultValue="large"/>
      <label htmlFor="size_3">Large</label>
    </p>
  </fieldset>
</form>
<br/>
<form>
  <h1>Payment form</h1>
  <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong>.</p>
  <section>
    <h2>Contact information</h2>
    <fieldset>
      <legend>Title</legend>
      <ul>
          <li>
            <label htmlFor="title_1">
              <input type="radio" id="title_1" name="title" value="M." />
              Mister
            </label>
          </li>
          <li>
            <label htmlFor="title_2">
              <input type="radio" id="title_2" name="title" value="Ms."/>
              Miss
            </label>
          </li>
      </ul>
    </fieldset>
    <p>
      <label htmlFor="name">
        <span>Name: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="text" id="name" name="username"/>
    </p>
    <p>
      <label htmlFor="mail">
        <span>E-mail: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="email" id="mail" name="usermail"/>
    </p>
    <p>
      <label htmlFor="pwd">
        <span>Password: </span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="password" id="pwd" name="password"/>
    </p>
  </section>
  <section>
    <h2>Payment information</h2>
    <p>
      <label htmlFor="card">
        <span>Card type:</span>
      </label>
      <select id="card" name="usercard">
        <option value="visa">Visa</option>
        <option value="mc">Mastercard</option>
        <option value="amex">American Express</option>
      </select>
    </p>
    <p>
      <label htmlFor="number">
        <span>Card number:</span>
        <strong><abbr title="required">*</abbr></strong>
      </label>
      <input type="number" id="number" name="cardnumber"/>
    </p>
    <p>
      <label htmlFor="date">
        <span>Expiration date:</span>
        <strong><abbr title="required">*</abbr></strong>
        <em>formatted as mm/yy</em>
      </label>
      <input type="date" id="date" name="expiration"/>
    </p>
  </section>

  <p> <button type="submit">Validate the payment</button> </p>
</form>

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