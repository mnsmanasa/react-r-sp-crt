import React from "react";
import { connect } from "react-redux";
import { getCartList, addToCart } from "./store/actions";

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {this.props.cartList.map(item => {
          if (item.count > 0) {
            return (
              <div className="shopping-cart-container">
                <div>{item.itemName}</div>
                <div>{item.count}</div>
              </div>
            );
          }          
        })}
        <div className="shopping-cart-container bold">
            <div>Total</div>
            <div>
              {this.props.cartList.reduce((acc, item) => {
                return acc + item.count;
              }, 0)}
            </div>
          </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cartList: state.cartList
});

export default connect(
  mapStateToProps,
  { getCartList, addToCart }
)(ShoppingCart);
