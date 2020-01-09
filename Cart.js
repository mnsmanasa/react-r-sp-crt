import React from "react";
import {
  NavLink
} from "react-router-dom";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartList: [
        {
          cartItem: "1",
          description: "first"
        },
        {
          cartItem: "2",
          description: "second"
        },
        {
          cartItem: "3",
          description: "third"
        },
        {
          cartItem: "4",
          description: "fourth"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        Cart
        <ul>
          {this.state.cartList.map(item => {
            return (
              <li key={item.cartItem}>
                <NavLink exact activeClassName="active" to={`/Cart/${item.cartItem}`}>{item.cartItem}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Cart;
