import React from "react";
import { connect } from "react-redux";
import { getCartList } from "./store/actions";

class CartItemDescription extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props.match.params.id, this.props.cartList);
    let cartItem = this.props.cartList.find(item => {
      return this.props.match.params.id === item.cartItem
    });
    return <div>description: {cartItem.description}</div>;
  }
}

const mapStateToProps = state => ({
  cartList: state.cartList
});

export default connect(
  mapStateToProps,
  { getCartList }
)(CartItemDescription);
