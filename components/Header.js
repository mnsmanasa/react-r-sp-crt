import React from "react";
import { connect } from "react-redux";
import { getCartList, addToCart } from "../store/actions";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <header>
        <NavLink exact activeClassName="active" to="/Cart">
          Cart
        </NavLink>
        <NavLink exact activeClassName="active" to="/ShoppingCart">
          <span>Cart </span>
          <span className="badge">
            {this.props.cartList.reduce((acc, item) => {
              return acc + item.count;
            }, 0)}
          </span>
        </NavLink>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  cartList: state.cartList
});

export default connect(
  mapStateToProps,
  { getCartList, addToCart }
)(Header);
