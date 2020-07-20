import React, { useState, useEffect } from 'react';

// React function component.
function AriaUnl(props) {
  console.log('props:');
  console.log(props);
  //
  // State Hook samples:
  // Declare a new state variable, which we'll call "count" using destructuring assignment syntax
  // Two constants will be created count as number and setCount(args) as function.
  const [count, setCount] = useState(0); // initial count state set as zero.
  console.log('count:');
  console.log(count);
  console.log('typeof(count):');
  console.log(typeof(count));
  console.log('setCount:');
  console.log(setCount);
  console.log('useState:');
  console.log(useState);
  const [age, setAge] = useState(props.age);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState(['text', ' ', 'Learn Hooks']);
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
    if (count > 0) {
      // Update the document title using the browser API:
      document.title = `You clicked ${count} times at ${props.dattime}`;
    }
  });
  // next Effect Hook:
  // If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([])
  // as a second argument. 
  useEffect(() => {window.alert(`count is ${count} at ${props.dattime}`)},[]);

  //
  // NB! Only one child can be returned!
  return (
    <div> 
      <p>You clicked {count} times asshole!</p>
      <p>You age is {age}</p>
      <p>You fruit is {fruit}</p>
      <p>You todos is {todos}</p>
      <button onClick={
        () => {
        setCount(count + 1);
        setAge(age - 1);
        setFruit(fruit + '1');
        setTodos([todos[0] + 0, ' - ',  todos[2]+2 ]);
        }
      }>
        Click me
      </button>
    </div>
  );
}

export default AriaUnl;
