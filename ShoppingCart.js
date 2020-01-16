import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getCartList, addToCart } from "./store/actions";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartTotal: this.props.cartList.reduce((acc, item) => {
        return acc + item.count;
      }, 0)
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.props.cartList.map(item => {
          if (item.count > 0) {
            return (
              <div className="shopping-cart-container">
                <NavLink exact activeClassName="active" to={`/Cart/${item.id}`}>
                  {item.itemName}
                </NavLink>
                <div>{item.count}</div>
              </div>
            );
          }
        })}
        {this.state.cartTotal > 0 ? (
          <div className="shopping-cart-container bold total">
            <div>Total</div>
            <div>
              {this.props.cartList.reduce((acc, item) => {
                return acc + item.count;
              }, 0)}
            </div>
          </div>
        ) : (
          <div>Sorry!! Your shopping cart is empty.</div>
        )}
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
