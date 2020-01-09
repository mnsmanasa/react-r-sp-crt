import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import CartFilters from "./CartFilters";
import CartItemDescription from "./CartItemDescription";
import Header from "./components/Header";

class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Cart" component={Cart} />
          <Route path="/Cart-filters" component={CartFilters} />
          <Route path={`/Cart/:id`} component={CartItemDescription} />
        </Switch>
      </Router>
    );
  }
}

export default Navigation;
