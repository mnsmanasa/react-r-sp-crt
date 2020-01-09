import React, { Component } from 'react';
import { render } from 'react-dom';
import Cart from './Cart';
import CartFilters from './CartFilters';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
       <Cart />
       <CartFilters />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
