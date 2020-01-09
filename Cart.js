import React from "react";

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
            return <li key={item.cartItem}>{item.cartItem}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Cart;
