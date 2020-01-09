import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from "react-router-dom";
import Cart from './Cart';
import Home from './Home';
import CartFilters from './CartFilters'


class Navigation extends React.Component {
  render() {
    return (
      <Router>    
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/cart-filters" component={CartFilters} />
        </Switch>
      </Router>
    );
  }
}

export default Navigation