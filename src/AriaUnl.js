// AriaUnl_001
import React, { useState, useEffect } from 'react';

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
  // NB! Only one child can be returned!
  return (
    <div> 
      <p>Search text is {searchTxt}</p>
      <button onClick={
        () => {
          setsearchTxt(searchTxt + '?');
        }
      }>
        Click me
      </button>
    </div>
  );
}

export default AriaUnl;
