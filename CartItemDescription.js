import React from "react";
import { connect } from "react-redux";
import { getCartList } from "./store/actions";

class CartItemDescription extends React.Component {
  constructor() {
    super();
    this.state = {
      noOfItems: 1
    };
  }

  addNoOfItems = () => {
    this.setState({ noOfItems: Number(this.state.noOfItems) + 1 });
    console.log(this.state.noOfItems);
  };

  removeNoOfItems = () => {
    if (this.state.noOfItems > 0) {
      this.setState({ noOfItems: Number(this.state.noOfItems) - 1 });
      console.log(this.state.noOfItems);
    }
  };

  handleInputChange = event => {
    this.setState({ noOfItems: event.target.value });
    console.log(this.state.noOfItems);
  };

  addToCart = () => {
    
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
        <div>
          <img src={cartItem.thumbnail} height="100" width="100" />
        </div>
        <div>
          <i>{cartItem.description}</i>
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
          <button className="add-btn" onClick={this.addToCart}>
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
  { getCartList }
)(CartItemDescription);
