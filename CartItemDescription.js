import React from "react";

class CartItemDescription extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props.match.params.id)
    return <div>description: {this.props.match.params.id}</div>;
  }
}

export default CartItemDescription;