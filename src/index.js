//import React, { Component } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

// styles css files will be loaded from src dir as <style> inside <head>
//import './index.css'
//import './styleCards.css'
//import './styleCollege.css'
//import './styleBoxes.css'
//import './styleBoxesAdv.css'
//import './styleBoxesBackground.css'
//import './styleBoxesTable.css'
//import './styleBoxesAdv2.css'
//import './styleBoxesFilters.css'
//import './styleFancyLetter.css'
//import './styleCoolLoockingBox3D.css'
//import './styleLayoutGrid.css'
//import './styleLayoutFloat.css'
//import './styleLayoutPositioning.css'
//import './styleLayoutTable.css'
//import './styleLayoutMultiColumns.css'
//import './styleLayoutNormal2.css'
//import './styleLayoutFlex2.css'
//import './styleLayoutFlex2Align.css'
//import './styleLayoutFlex2Complex-flex.css'
//import './styleLayoutGrid2.css'
//import './styleLayoutGrid2LineBasedPlacement.css'
//import './styleLayoutGrid2GridTemplateArea.css'
//import './styleLayoutGrid2CssGrid.css'
//import './styleLayoutFloats2.css'
//import './styleLayoutPositioning2.css'
//import './styleLayoutMultiCol.css'
//import './styleLayoutLegacy.css'
//import './styleMyWeb-flexbox_website2.css'
/* NB! document.getElementsByTagName("STYLE")[n].innerHTML works!!!!!!
//import './StyleSheetsDemo1.css'
import './StyleSheetsDemo2.css'
import './StyleSheetsDemo3.css'
import './StyleSheetsDemo4.css'
*/
//import './styleMyWeb-make-a-website.css' // float+flex
//import './styleMyWeb-flexbox_website2a.css'
//import './w3.css' // use external link in <head>
//import './paceThemeMinimal.css'
//import './styleRespImg.css' // <--------
//import './styleHWT.css' // <--------
//import './styleARIA.css' // <--------
import './styleNoMatchAside.css' // <--------

// application js files will be loaded from src dir
//import App from './AppInitial'
//import App from './App'
//import App from './Api'
//import App from './ApiXhr'
//import App from './ApiCardsFetch'
//import App from './ApiCardsXhr'
//import App from './AppCollege'
//import App from './AppBoxes'
//import App from './AppBoxesAdv'
//import App from './AppBoxesBackground'
//import App from './AppBoxesTable'
//import App from './AppBoxesFilters'
//import App from './AppHooks'
//import App from './AppFancyLetter'
//import App from './AppCoolLoockingBox3D'
//import App from './AppLayoutGrid'
//import App from './AppLayoutFloat'
//import App from './AppLayoutPositioning'
//import App from './AppLayoutTable'
//import App from './AppLayoutMultiColumns'
//import App from './AppLayoutNormal2'
//import App from './AppLayoutFlex2'
//import App from './AppLayoutFlex2Align'
//import App from './AppLayoutFlex2Complex-flex'
//import App from './AppLayoutGrid2' // BasedPlacement
//import App from './AppLayoutGrid2LineBasedPlacement'
//import App from './AppLayoutGrid2GridTemplateArea'
//import App from './AppLayoutGrid2CssGrid'
//import App from './AppLayoutFloats2'
//import App from './AppLayoutPositioning2'
//import App from './AppLayoutMultiCol'
//import App from './AppLayoutLegacy'
//import App from './AppMyWeb-flexbox_website2'
//import App from './AppStylesheetsDemo' // StylesheetsDemo
//import App from './AppMyWeb-make-a-website' // float+flex
//import App from './AppMyWeb-flexbox_website2a'
//import App from './AppW3css'
//import App from './AppHWT' // <-------------------------
//import App from './AppFetchXML'
//import App from './AppXhrXml'
//import App from './AppXhrFormDataOld'
//import App from './App'
//import App from './BasicExample'
//import App from './UrlParamsExample'
//import App from './AuthExample'
//import App from './CustomLink'
//import App from './NoMatch404'
//import App from './StateHookSample'
//import App from './FilterableProductTable'
//import App from './FilterableProductTableHooks'
import App from './NoMatch404aside'
//import App from './AriaUnl'

/*
// A class component must include render(), and the return statement can only return ONE parent element:
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}
*/
console.log('index.js document.domain:');
console.log(document.domain);

const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
console.log('index.js created element:');
console.log(element);

///*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
//*/

/*
ReactDOM.render(
  <App age={67} dattime={`${Date()}`} />,
  document.getElementById('root')
);
*/

/*
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <App products={PRODUCTS} />,
  document.getElementById('root')
);
*/

/* Timing sample.
function tick() {
  ReactDOM.render(<App />, document.getElementById('root'))
}
*/
//tick();
// Executes a function, after waiting a specified number of milliseconds and repeats the execution of the function continuously.
//setInterval(tick, 1000);
//console.log('setInterval issued')
// Executes a function, after waiting a specified number of milliseconds.
//setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000);
//console.log('setTimeout issued')
