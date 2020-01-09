import React, { Component } from "react";
import { render } from "react-dom";
import Cart from "./Cart";
import CartFilters from "./CartFilters";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";
import "./style.css";

const store = createStore(reducer);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Navigation />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById("root"));
