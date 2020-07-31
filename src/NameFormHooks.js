// NB! Capitalize custom components name to differentiate them from regular HTML elements).
import { Component } from 'react'
import React, { useState, useEffect } from 'react'; // React Hooks used.


//==================================================================================================================
// Custom Controlled Component:
class NameForm extends Component {
  constructor(props) {
    console.log('========> NameForm constructor <==========')
    super(props);
    this.state = {
      name:
        'Alex Raven',
      essay:
        'Please write an essay about your favorite DOM element.',
      fruit:
        ['Coconut','Lime'],
      checkOption:
        ['option1'],
      radioOption:
        'option1'
    }; // very initial value.
    // Create a ref to the DOM node to access file(s) in a submit handler:
    this.fileInput = React.createRef();

    console.log(this.state.name);
    console.log(this.state.essay);
    console.log(this.state.fruit);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEssay = this.handleChangeEssay.bind(this);
    this.handleChangeFruit = this.handleChangeFruit.bind(this);
    this.handleChangeCheckOption = this.handleChangeCheckOption.bind(this);
    this.handleChangeRadioOption = this.handleChangeRadioOption.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    console.log('========> NameForm componentDidMount <==========')
    console.log(this.state.name);
    this.setState({name: this.state.name.toUpperCase()})
    console.log(this.state.name);
    console.log(this.state.essay);
    console.log(this.state.fruit);
    console.log(this.state.checkOption);
    console.log(this.state.radioOption);
  }

  handleChangeName(event) {
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
    this.setState({name: event.target.value.toUpperCase()});
    console.log(this.state.name);
  }

  handleChangeEssay(event) {
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
    this.setState({essay: event.target.value});
    console.log(this.state.essay);
  }

  // Multiple select - do not use Ctrl in React.
  handleChangeFruit(event) {
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
    let arrFruits = this.state.fruit; // this.state.fruit
    let indFruits = this.state.fruit.indexOf(event.target.value);
    if (indFruits === -1) {
      arrFruits.push(event.target.value)
    }
    else {
      arrFruits.splice(indFruits,1)
    }
    this.setState({fruit: arrFruits});
    console.log(this.state.fruit);
  }

  // Multiple select.
  handleChangeCheckOption(event) {
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
    let arrOpts = this.state.checkOption; // this.state.fruit
    let indOpts = this.state.checkOption.indexOf(event.target.value);
    if (indOpts === -1) {
      arrOpts.push(event.target.value)
    }
    else {
      arrOpts.splice(indOpts,1)
    }
    this.setState({checkOption: arrOpts});
    console.log(this.state.checkOption);
  }

  handleChangeRadioOption(event) {
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
    this.setState({radioOption: event.target.value});
    console.log(this.state.radioOption);
  }


  handleSubmit(event) {
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
    console.log(this.state);
    //alert('Name: "' + this.state.name + '" and an essay: "' + this.state.essay + '" and fruit: "' + this.state.fruit + '" were submitted.');
    //event.preventDefault(); // NB! Use it to prevent sending standard POST/GET request to server with URL //formAK
    /* e.g.
    Form request submitted by POST. Action URL is /formAK with search as body: 
    user_name=ALEX1+RAVEN&user_essay=Please1+write+an+essay+about+your+favorite+DOM+element.&fruits=Lime&fruits=Coconut&carrots=option1&meal=option1
    */
    // Use created ref to the DOM node to access file(s) in a submit handler:
    /*
    alert(
      `Selected file to upload - ${
        this.fileInput.current.files[0].name
      }`
    );
    */
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        {/*
        <label>
          Name:
          <input type="text" id="name" name="user_name"  value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        */}
        <div>
          <label htmlFor="file_name">Upload file:: <abbr title="required">*</abbr> </label>
          <input type="file" id="file_name" ref={this.fileInput} />
        </div>
        
        <div>
          <label htmlFor="name">Name: <abbr title="required">*</abbr> </label>
          {/* event target type will be text */}
          <input type="text" id="name" name="user_name"  value={this.state.name} onChange={this.handleChangeName}></input> {/* setting e.g.  value="Hi" prevents the user from changing the input  */}
        </div>

        {/* event target type will be textarea */}
        <div>
          <label htmlFor="msg">Essay: <abbr title="required">*</abbr> </label>
          <textarea id="msg" name="user_essay" value={this.state.essay} onChange={this.handleChangeEssay} ></textarea> {/* for uncontrolled state use  defaultValue="Default textarea" */}
        </div>

        <br/>
        {/* The <fieldset> tag draws a box around the related elements. */}
        <fieldset>
          <legend>Pick your favorite flavor:</legend> {/* The <legend> tag defines a caption for the <fieldset> element. */}
          {/* event target type will be select-multiple */}
          <select name="fruits" multiple={true} value={this.state.fruit} onChange={this.handleChangeFruit}>
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
          <input type="checkbox" id="carrots" name="carrots" value="option1" checked={this.state.checkOption.indexOf('option1') !== -1} 
          onChange={this.handleChangeCheckOption}/>
          </li>
          <li>
          <label htmlFor="carrots2">Carrots2</label>
          <input type="checkbox" id="carrots2" name="carrots2" value="option2" checked={this.state.checkOption.indexOf('option2') !== -1}
          onChange={this.handleChangeCheckOption}/>
          </li>
          <li>
          <label htmlFor="carrots3">Carrots3</label>
          <input type="checkbox" id="carrots3" name="carrots3" value="option3" checked={this.state.checkOption.indexOf('option3') !== -1}
          onChange={this.handleChangeCheckOption}/>
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
          <input type="radio" id="soup" name="meal" value="option1" checked={this.state.radioOption === 'option1'}
          onChange={this.handleChangeRadioOption}/>
          </li>
          <li>
          <label htmlFor="soup2">Soup2</label>
          <input type="radio" id="soup2" name="meal" value="option2" checked={this.state.radioOption === 'option2'}
          onChange={this.handleChangeRadioOption}/>
          </li>
          <li>
          <label htmlFor="soup3">Soup3</label>
          <input type="radio" id="soup3" name="meal" value="option3"checked={this.state.radioOption === 'option3'}
          onChange={this.handleChangeRadioOption}/>
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
}

export default NameForm