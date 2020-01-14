import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getCartList, addToCart } from "./store/actions";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ul>
        {this.props.cartList.map(item => {
          return (
            <li className="list-item" key={item.id}>
              <NavLink exact activeClassName="active" to={`/Cart/${item.id}`}>
                {item.itemName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  cartList: state.cartList
});

export default connect(
  mapStateToProps,
  { getCartList, addToCart }
)(Cart);
