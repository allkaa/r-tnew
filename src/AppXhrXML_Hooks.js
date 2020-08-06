import React from 'react'
import { useState, useEffect } from 'react'; // React Hooks used.

//const url = 'http://unl.woks:9994/'; // project WinTicsCheckNoSslTEST
//const url = 'http://10.8.194.3:9994/'; // project WinTicsCheckNoSslTEST
const url = 'http://10.8.194.3:10064/'; // project UnlCashExTEST ver. 3.8

function App(props) {
  const [data, setStateData] = useState('');

  function XhrExecutor(props) {
    console.log('XhrExecutor props:');
    console.log(props);
    let urlReq = url + props;
    console.log('urlReq:');
    console.log(urlReq);

    let txtErr 
    //let objThis = this
    const xhr = new XMLHttpRequest();
    //xhr.open('POST', 'http://10.8.194.3:42001/?testDebian', true);
    xhr.open('GET', urlReq, true);
    // NB! On server reply header must be set as "Access-Control-Allow-Origin: *"
    //console.log(xhr);
    // If specified, responseType must be empty string or "document" - can not be specified for synchroneuos xhr.open().
    //xhr.responseType = 'document';
    // Force the response to be parsed as XML
    xhr.overrideMimeType('text/xml');

    ///* GET or PUT state case using onload event.
    xhr.onload = () => {
      //console.log(xhr.getAllResponseHeaders());
      let docXml
      if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        //console.log(xhr.response);
        docXml = xhr.responseXML
        //console.log(docXml);
        let xmlS = new XMLSerializer();
        let xmlString = xmlS.serializeToString(docXml);
        console.log(xmlString)
        let nodeValue = docXml.getElementsByTagName("result")[0].childNodes[0].nodeValue; // get <result> tag text value.
        //let nodeValue2 = docXml.getElementsByTagName("sum")[0].childNodes[0].nodeValue; // get <sum> tag text value.
        //setStateData(`result = ${nodeValue}, sum = ${nodeValue2}`);
        setStateData(`result = ${nodeValue}`);
        console.log('data: ' + data);
      }
      else {
        txtErr = `Request onload error - status ${xhr.status}, readyState ${xhr.readyState}`
        console.log(txtErr)
        this.setState({ data: txtErr,})
      }
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
      setStateData(txtErr);
  }
    
    xhr.ontimeout = () => {
      txtErr = `Request failed -> ontimeout event occured`
      console.log(txtErr)
      //this.setState({ data: txtErr,})
      setStateData(txtErr);
    }

    xhr.send(); // for GET case with empty body.

    // PUT case:
    //Send the proper header information along with the request
    //xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //xhr.setRequestHeader("Content-Type", "text/plain");
    //xhr.send("foo=bar&lorem=ipsum"); // send with body for POST.
    // xhr.send(new Int8Array()); 
    // xhr.send(document);

  } // end of function XhrExecutor(props) 

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
    //XhrExecutor('?agent=58&type=2&command=checkval&ticket_number=004-12345678-1234567'); // project WinTicsCheckNoSslTEST
    XhrExecutor('?agent=65&type=2&command=checkval&ticket_number=004-12345678-1234567'); // project UnlCashExTEST ver. 3.8
  });

  return (
    <div>
      <h1>Text data received from server:</h1>
      <p>{data}</p>
    </div>
  );

}

export default App