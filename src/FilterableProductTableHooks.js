// Filterable Product Table using Hooks 7
import React, { useState, useEffect } from 'react'; // React Hooks used.
//import { Component } from 'react'; // React class component not used anymore.

// React function component.
function ProductCategoryRow(props) {
  const category = props.category;
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
} // end of function ProductCategoryRow.

// React function component.
function ProductRow(props) {
  const product = props.product;
  const name = product.stocked ?
    product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );

} // end of function ProductRow.

// React function component.
function ProductTable(props) {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  const rows = [];
  let lastCategory = null;

  props.products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name}
      />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );

} // end of function ProductTable.

// React function component.
function SearchBar(props) {
  function handleFilterTextChange(e) {
    props.onFilterTextChange(e.target.value);
  }
  
  function handleInStockChange(e) {
    props.onInStockChange(e.target.checked);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={handleFilterTextChange}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={handleInStockChange}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  );

} // end of function SearchBar.

// React function component.
function FilterableProductTable(props) {
  // State Hook using:
  // Declare a new state variable, "filterText" using destructuring assignment syntax
  // Two constants will be created filterText as string and setfilterText(args) as modifying function.
  const [filterText, setfilterText] = useState('');
  const [inStockOnly, setinStockOnly] = useState(false);
  // Effect Hook using:
  // It serves same as componentDidMount, componentDidUpdate, and componentWillUnmount combined in React classes.
  // Similar to componentDidMount and componentDidUpdate.
  // By using Effect Hook, we tell React that our component needs to do something after render.
  // React will remember the arrow function we passed (we’ll refer to it as our “effect”),
  // and call it later after performing the DOM updates.
  // React will apply every effect used by the component, in the order they were specified.
  // If you want to run an effect and clean it up only once (on mount and unmount), pass an empty array [] as a second argument. 
  // Update the document title using the browser API:
  useEffect(() => {document.title = `Using Hooks sample`;},[]);
  //
  function handleFilterTextChange(filterText) {
    setfilterText(filterText);
    //console.log('filterText: ' + filterText);
  }
  //
  function handleInStockChange(inStockOnly) {
    setinStockOnly(inStockOnly);
    //console.log('inStockOnly: ' + inStockOnly);
  }
  // NB! Only one child can be returned!
  return (
    <div id="FPT">
      <h4>Filterable Product Table using Hooks</h4>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
} // end of function FilterableProductTable

export default FilterableProductTable

// <==================== React class component not used   ==========================================>

/*
class ProductCategoryRowClass extends Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
} // end of class ProductCategoryRow.

class ProductRowClass extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
} // end of class ProductRow.

class ProductTableClass extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
} // end of class ProductTable.

class SearchBarClass extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
} // end of class SearchBar.

class FilterableProductTableClass extends React.Component {
  constructor(props) {
    console.log('FilterableProductTable constructor initial props before super(props)')
    console.log(props)
    super(props) // call the super class constructor and pass to it the props parameter
    console.log('FilterableProductTable constructor initial props after super(props)')
    console.log(props)
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
    console.log(filterText);
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
    console.log(inStockOnly);
  }

  render() {
    return (
      <div id="FPT">
        <h4>Filterable Product Table</h4>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
} // end of class FilterableProductTable.
// <==================== React class component not used   ==========================================>
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
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);
*/