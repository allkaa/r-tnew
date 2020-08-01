// NameFormHooks 001
// NB! Capitalize custom components name to differentiate them from regular HTML elements).
//import { Component } from 'react'
import React, { useState, useEffect } from 'react'; // React Hooks used.

// Custom Controlled Component:
function NameForm(props) {
  // State Hook using:
  // Declare a new state variable, "filterText" using destructuring assignment syntax
  // Two constants will be created filterText as string and setfilterText(args) as modifying function.
  let fileInput = React.createRef();
  const [name, setStateName] = useState('Alex Raven');
  const [essay, setStateEssay] = useState('Please write an essay about your favorite DOM element.');
  const [fruit, setStateFruit] = useState(['Coconut','Lime']);
  const [checkOption, setStateCheckOption] = useState(['option1']);
  const [radioOption, setStateRadioOption] = useState(['option1']);

  function handleChangeName(event) {
    console.log('========> NameForm handleChangeName event <==========')
    console.log('event: ' + event);
    console.log(event);
    console.log('event.target: ' + event.target);
    console.log(event.target);
    console.log('event.target.name: ' + event.target.name);
    console.log(event.target.name);
    console.log('event.target.type: ' + event.target.type)
    console.log(event.target.type)
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    setStateName(event.target.value.toUpperCase());
    console.log('name: ' + name);
  }

  function handleChangeEssay(event) {
    console.log('========> NameForm handleChangeEsssay event <==========')
    console.log('event: ' + event);
    console.log(event);
    console.log('event.target: ' + event.target);
    console.log(event.target);
    console.log('event.target.name: ' + event.target.name);
    console.log(event.target.name);
    console.log('event.target.type: ' + event.target.type)
    console.log(event.target.type)
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    setStateEssay(event.target.value);
    console.log('essay: ' + essay);
  }

  // Multiple select - do not use Ctrl in React.
  function handleChangeFruit(event) {
    console.log('========> NameForm handleChangeFruit event <==========')
    console.log('event: ' + event);
    console.log(event);
    console.log('event.target: ' + event.target);
    console.log(event.target);
    console.log('event.target.name: ' + event.target.name);
    console.log(event.target.name);
    console.log('event.target.type: ' + event.target.type)
    console.log(event.target.type)
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    let arrFruits = fruit;
    let indFruits = fruit.indexOf(event.target.value);
    if (indFruits === -1) {
      arrFruits.push(event.target.value)
    }
    else {
      arrFruits.splice(indFruits,1)
    }
    setStateFruit(arrFruits);
    console.log('fruit: ' + fruit);
  }

  // Multiple select.
  function handleChangeCheckOption(event) {
    console.log('========> NameForm handleCheckOption event <==========')
    console.log('event: ' + event);
    console.log(event);
    console.log('event.target: ' + event.target);
    console.log(event.target);
    console.log('event.target.name: ' + event.target.name);
    console.log(event.target.name);
    console.log('event.target.type: ' + event.target.type)
    console.log(event.target.type)
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    let arrOpts = checkOption;
    let indOpts = checkOption.indexOf(event.target.value);
    if (indOpts === -1) {
      arrOpts.push(event.target.value)
    }
    else {
      arrOpts.splice(indOpts,1)
    }
    setStateCheckOption(arrOpts);
    console.log('checkOption: ' + checkOption);
  }

  function handleChangeRadioOption(event) {
    console.log('========> NameForm handleRadioOption event <==========')
    console.log('event: ' + event);
    console.log(event);
    console.log('event.target: ' + event.target);
    console.log(event.target);
    console.log('event.target.name: ' + event.target.name);
    console.log(event.target.name);
    console.log('event.target.type: ' + event.target.type)
    console.log(event.target.type)
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    setStateRadioOption(event.target.value);
    console.log('radioOption: ' + radioOption);
  }

  function handleSubmit(event) {
    console.log('========> NameForm handleSubmit <==========')
    console.log('event: ' + event);
    console.log(event);
    console.log('event.target: ' + event.target);
    console.log(event.target);
    console.log('event.target.name: ' + event.target.name);
    console.log(event.target.name);
    console.log('event.target.type: ' + event.target.type)
    console.log(event.target.type)
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    console.log('name: ' + name);
    console.log('essay: ' + essay);
    console.log('fruit: ' + fruit);
    console.log('checkOption: ' + checkOption);
    console.log('radioOption: ' + radioOption);
    //alert('Name: "' + this.state.name + '" and an essay: "' + this.state.essay + '" and fruit: "' + this.state.fruit + '" were submitted.');
    //event.preventDefault(); // NB! Use it to prevent sending standard POST/GET request to server with URL //formAK
    /* e.g.
    Form request submitted by POST. Action URL is /formAK with search as body: 
    user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
    */
    // Use created ref to the DOM node to access file(s) in a submit handler:
    ///*
    alert(
      `Selected file to upload - ${
        fileInput.current.files[0].name
      }`
    );
    //*/
  }

  return (
      <form onSubmit={handleSubmit}>
        <h4>NameFormHooks</h4>
        <div>
          <label htmlFor="file_name">Upload file:: <abbr title="required">*</abbr> </label>
          <input type="file" id="file_name" ref={fileInput} />
        </div>
        
        <div>
          <label htmlFor="name">Name: <abbr title="required">*</abbr> </label>
          {/* event target type will be text */}
          <input type="text" id="name" name="user_name"  value={name} onChange={handleChangeName}></input> {/* setting e.g.  value="Hi" prevents the user from changing the input  */}
        </div>

        {/* event target type will be textarea */}
        <div>
          <label htmlFor="msg">Essay: <abbr title="required">*</abbr> </label>
          <textarea id="msg" name="user_essay" value={essay} onChange={handleChangeEssay} ></textarea> {/* for uncontrolled state use  defaultValue="Default textarea" */}
        </div>

        <br/>
        {/* The <fieldset> tag draws a box around the related elements. */}
        <fieldset>
          <legend>Pick your favorite fieldset flavor:</legend> {/* The <legend> tag defines a caption for the <fieldset> element. */}
          {/* event target type will be select-multiple */}
          <select name="fruits" multiple={true} value={fruit} onChange={handleChangeFruit}>
            <option value="Grapefruit">Grapefruit</option>
            <option value="Lime">Lime</option>
            <option value="Coconut">Coconut</option>
            <option value="Mango">Mango</option>
          </select>
        </fieldset>

        <br/>
        {/* The <fieldset> tag draws a box around the related elements. this.state.checkOption.indexOf(event.target.value); */}
        <fieldset>
          <legend>Check box:</legend> {/* The <legend> tag defines a caption for the <fieldset> element. */}
          <ul>
            <li>
          <label htmlFor="carrots">Carrots</label>
          <input type="checkbox" id="carrots" name="carrots" value="option1" checked={checkOption.indexOf('option1') !== -1} 
          onChange={handleChangeCheckOption}/>
          </li>
          <li>
          <label htmlFor="carrots2">Carrots2</label>
          <input type="checkbox" id="carrots2" name="carrots2" value="option2" checked={checkOption.indexOf('option2') !== -1}
          onChange={handleChangeCheckOption}/>
          </li>
          <li>
          <label htmlFor="carrots3">Carrots3</label>
          <input type="checkbox" id="carrots3" name="carrots3" value="option3" checked={checkOption.indexOf('option3') !== -1}
          onChange={handleChangeCheckOption}/>
          </li>
          </ul>
        </fieldset>

        <br/>
        {/* The <fieldset> tag draws a box around the related elements. */}
        <fieldset>
          <legend>Radio button:</legend> {/* The <legend> tag defines a caption for the <fieldset> element. */}
          <ul>
          <li>
          <label htmlFor="soup">Soup1</label>
          <input type="radio" id="soup" name="meal" value="option1" checked={radioOption === 'option1'}
          onChange={handleChangeRadioOption}/>
          </li>
          <li>
          <label htmlFor="soup2">Soup2</label>
          <input type="radio" id="soup2" name="meal" value="option2" checked={radioOption === 'option2'}
          onChange={handleChangeRadioOption}/>
          </li>
          <li>
          <label htmlFor="soup3">Soup3</label>
          <input type="radio" id="soup3" name="meal" value="option3"checked={radioOption === 'option3'}
          onChange={handleChangeRadioOption}/>
          </li>
          </ul>
        </fieldset>

        <br/>
        <div className="button">
          {/* event target type will be set as submit */}
          <button type="submit" formMethod="post" formAction="formAK">Send your message</button>
        </div>

      </form>
  );
}

export default NameForm