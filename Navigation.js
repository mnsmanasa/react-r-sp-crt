import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from "react-router-dom";
import Cart from './Cart';
import CartFilters from './CartFilters'


class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/cart-filters">
              Filter
            </NavLink>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Cart} />
          <Route path="/cart-filters" component={CartFilters} />
        </Switch>
      </Router>
    );
  }
}

export default Navigation