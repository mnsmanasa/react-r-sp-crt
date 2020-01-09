import React, { Component } from 'react';
import { render } from 'react-dom';
import Cart from './Cart';
import CartFilters from './CartFilters';
import Navigation from './Navigation';
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
      <Navigation />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
