import React from "react";

let myInfoRef1 = React.createRef(); // innerHeight
let myInfoRef2 = React.createRef(); // innerWidth
let myInfoRef3 = React.createRef(); // outerHeight
let myInfoRef4 = React.createRef(); // outerWidth

function Main(props) {
  console.log('Main props:' + props);
  console.log(props); // {txn_id: 10000000}

  function btnClick() {
    myInfoRef1.current.textContent = window.innerHeight;
    myInfoRef2.current.textContent = window.innerWidth;
    myInfoRef3.current.textContent = window.outerHeight;
    myInfoRef4.current.textContent = window.outerWidth;
  }

  return (
    <div>
      <span>innerHeight=</span>
      <span ref={myInfoRef1}>-1</span>
      <br/> 
      <span>innerWidth=</span>
      <span ref={myInfoRef2}>-1</span> 
      <br/> 
      <span>outerHeight=</span>
      <span ref={myInfoRef3}>-1</span> 
      <br/> 
      <span>outerWidth=</span>
      <span ref={myInfoRef4}>-1</span> 
      <br/> 
      <button onClick={btnClick}>Press</button>
    </div>
  );
} // end of function Main(props).

export default Main;