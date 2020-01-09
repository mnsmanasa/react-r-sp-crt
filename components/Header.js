import React from "react";
import { connect } from "react-redux";
import { getCartList, addToCart } from "../store/actions";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    console.log(
      this.props.addedToCart.reduce(function(acc, item) {
        return acc + item.noOfItems;
      }, 0)
    );
    return (
      <header>
        <NavLink exact activeClassName="active" to="/Cart">
          Cart
        </NavLink>
        <div>
          Cart{" "}
          <span className="badge">
            {this.props.addedToCart
              ? this.props.addedToCart.reduce(function(acc, item) {                
                  return acc + item.noOfItems;
                }, 0)
              : 0}
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  addedToCart: state.addedToCart
});

export default connect(
  mapStateToProps,
  { getCartList, addToCart }
)(Header);
