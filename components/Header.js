import React from "react";
import { connect } from "react-redux";
import { getCartList, addToCart } from "../store/actions";

class Header extends React.Component {

  render() {
    return (
      <header>
        <div className="logo">SC</div>
        <div>
          Cart <span className="badge">{this.props.addedToCart? this.props.addedToCart.length: 0}</span>
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
