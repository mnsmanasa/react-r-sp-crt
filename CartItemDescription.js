import React from "react";
import { connect } from "react-redux";
import { getCartList, addToCart } from "./store/actions";

class CartItemDescription extends React.Component {
  constructor() {
    super();
    this.state = {
      noOfItems: 1
    };
  }

  UNSAFE_componentWillMount() {
    let cartItem = this.props.cartList.find(item => {
      return this.props.match.params.id === item.id;
    });
    this.setState({
      item: cartItem,
      noOfItems: cartItem.count != 0 ? cartItem.count : 1
    });
  }

  addNoOfItems = () => {
    this.setState({ noOfItems: Number(this.state.noOfItems) + 1 });
  };

  removeNoOfItems = () => {
    if (this.state.noOfItems > 0) {
      this.setState({ noOfItems: Number(this.state.noOfItems) - 1 });
    }
  };

  handleInputChange = event => {
    this.setState({ noOfItems: event.target.value });
  };

  addToCart = id => {
    if (this.state.noOfItems > 0) {
      this.props.addToCart(id, this.state.noOfItems);
    }
  };

  render() {
    return (
      <div className="text-center item-description">
        <div>
          <i>Product </i>: {this.state.item.itemName}
        </div>
        <div>
          <img src={this.state.item.thumbnail} height="100" width="100" />
        </div>
        <div>
          <i>{this.state.item.description}</i>
        </div>
        <div>
          <button onClick={this.addNoOfItems}>+</button>
          <input
            type="number"
            value={this.state.noOfItems}
            onChange={this.handleInputChange}
          />
          <button onClick={this.removeNoOfItems}>-</button>
        </div>
        <div>
          <button
            className="add-btn"
            onClick={() => this.addToCart(this.state.item.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartList: state.cartList
});

export default connect(
  mapStateToProps,
  { getCartList, addToCart }
)(CartItemDescription);
