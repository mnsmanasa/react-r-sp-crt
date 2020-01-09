import React from "react";
import {
  NavLink
} from "react-router-dom";
import { connect } from "react-redux";
import { getCartList } from "./store/actions";


class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
    
    };
  }

  render() {
    return (
      <div>
        Cart
        <ul>
          {this.props.cartList.map(item => {
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

// export default Cart;
const mapStateToProps = state => ({
  cartList: state.cartList
});

export default connect(
  mapStateToProps,
  { getCartList }
)(Cart);