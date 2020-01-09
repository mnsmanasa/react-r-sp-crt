import { GET_CARTLIST, ADD_TO_CART } from "./actionTypes";

export const getCartList = () => ({
  type: GET_CARTLIST
});

export const addToCart = (item,noOfItems) => ({
  type: ADD_TO_CART,
  payload: item,
  noOfItems: noOfItems
})