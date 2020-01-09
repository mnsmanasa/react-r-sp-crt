import { GET_CARTLIST } from "./actionTypes";

export const initialState = {
  cartList: [
    {
      cartItem: "1",
      description: "first"
    },
    {
      cartItem: "2",
      description: "second"
    },
    {
      cartItem: "3",
      description: "third"
    },
    {
      cartItem: "4",
      description: "fourth"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARTLIST:
      return state;    
    default:
      return state;
  }
}
