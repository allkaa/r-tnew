import React, { Component } from 'react'
import { useState, useEffect } from 'react'; // React Hooks used.

function App(props) {
  const [data, setStateData] = useState('');

  function FetchExecutor(props) {
    console.log('FetchExecutor props:');
    console.log(props);
    const url = 'http://10.8.194.3:42001/?testDebian'; // project [Stub NewNoSslForTestServerJSON]
    //let dataReq = {username: 'example'};
    let dataReq = props;
    console.log('FetchExecutor JSON.stringify(props):');
    console.log(JSON.stringify(dataReq)); // will be sting '{"username":"example"}'

    // body: '{"param1": "test"}', // data can be `string` or {object}!
    // If 'Content-Type': 'text/plain' in POST request then no CORS error!
    // If 'Content-Type': 'application/json' in POST request then Browser will reports CORS error:
    /*
    Access to fetch at 'http://10.8.194.3:42001/?testDebian' from origin 'http://unl.test:8080' has been blocked
    by CORS policy: Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.
    Cross-Origin Read Blocking (CORB) blocked cross-origin response http://10.8.194.3:42001/?testDebian 
    with MIME type text/xml.
    See https://www.chromestatus.com/feature/5629709824032768 for more details.
    NB! If mode: 'no-cors' used then error wll be:
    Cross-Origin Read Blocking (CORB) blocked cross-origin response http://10.8.194.3:42001/?testDebian 
    with MIME type text/xml. See https://www.chromestatus.com/feature/5629709824032768 for more details.
    Also
    Cross-Origin Read Blocking (CORB) blocked cross-origin response http://10.8.194.3:42001/?testDebian with MIME type
     application/json. See https://www.chromestatus.com/feature/5629709824032768 for more details.

    mode: 'no-cors', // no-cors, cors, *same-origin
    */
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(dataReq), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'text/plain'
      }
    })
    .then(result => {
      // result is fetch(url) Response object
      console.log(result)
      return result.text() // return result.json()
    })
    .then(result => {
      // result is JSON array.
      console.log(result);
      setStateData(result);
    })
  } // End of function FetchExecutor(props)

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
  useEffect(() => {
    FetchExecutor({username: 'example'});
  });

  return (
    <div>
      <h1>Text data received from server:</h1>
      <p>{data}</p>
    </div>
  );

}

export default App