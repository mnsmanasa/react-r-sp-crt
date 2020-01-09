import React from "react";
import { connect } from "react-redux";
import { getCartList } from "./store/actions";

class CartItemDescription extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let cartItem = this.props.cartList.find(item => {
      return this.props.match.params.id === item.id;
    });
    return (
      <div className="text-center item-description">
        <div>
          <i>Description of </i>: {cartItem.itemName}
        </div>
        <div><img src={cartItem.thumbnail} height="100" width="100" /></div>
        <div><i>{cartItem.description}</i></div>
        <div><button>+</button><input type="number"/><button>-</button></div>
        <div><button className="add-btn">Add to Cart</button></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartList: state.cartList
});

export default connect(
  mapStateToProps,
  { getCartList }
)(CartItemDescription);
