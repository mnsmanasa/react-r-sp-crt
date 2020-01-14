import React from "react";
import { connect } from "react-redux";
import { getCartList, addToCart } from "../store/actions";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  constructor(){
    super()
  }
  componentDidMount(){
    
  }
  render() {
    console.log(this.props.cartList)
    return (
      <header>
        <NavLink exact activeClassName="active" to="/Cart">
          Cart
        </NavLink>
        <div>
          <span>Cart </span>
          <span className="badge">
           {this.props.cartList.reduce((acc,item)=>{
             return acc + item.count
           }, 0)}
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  cartList: state.cartList
});

export default connect(
  mapStateToProps,
  { getCartList, addToCart }
)(Header);
