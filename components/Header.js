import React from "react";
import { connect } from "react-redux";
import { getCartList, addToCart } from "../store/actions";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(){
    super()
  }
  componentDidMount(){
  }
  render() {
    return (
      <header>
        <NavLink exact activeClassName="active" to="/Cart">
          Cart
        </NavLink>
        <div>
          <span>Cart </span>
          <span className="badge">
           0
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  addedToCart: state.addedToCart,
  cartList: state.cartList
});

export default connect(
  mapStateToProps,
  { getCartList, addToCart }
)(Header);
