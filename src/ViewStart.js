// ViewStart.js 001
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useLocation,
  useHistory
} from "react-router-dom";

function ViewPort(props) {
  console.log('ViewStart props:' + props);
  console.log(props); // txn_id={10000000} viewwidth={window.innerWidth}
}

export default ViewPort;
