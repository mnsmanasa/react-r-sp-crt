import React from 'react';
import {
  NavLink
} from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super()
    this.state={

    }
  }

  render() {
    return (
      <ul>
          <li>
            <NavLink exact activeClassName="active" to="/Cart">
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/cart-filters">
              Filter
            </NavLink>
          </li>
        </ul>
    )
  }
}

export default Home