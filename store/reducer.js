import { GET_CARTLIST, ADD_TO_CART } from "./actionTypes";

export const initialState = {
  cartList: [
    {
      id: "1",
      itemName: "A",
      description: "Description of 1",
      thumbnail: "https://via.placeholder.com/150/602b9e",
      count: 0
    },
    {
      id: "2",
      itemName: "B",
      description: "Description of 2",
      thumbnail: "https://via.placeholder.com/150/602b9e",
      count: 0
    },
    {
      id: "3",
      itemName: "C",
      description: "Description of 3",
      thumbnail: "https://via.placeholder.com/150/602b9e",
      count: 0
    },
    {
      id: "4",
      itemName: "D",
      description: "Description of 4",
      thumbnail: "https://via.placeholder.com/150/602b9e",
      count: 0
    },
    {
      id: "5",
      itemName: "E",
      description: "Description of 5",
      thumbnail: "https://via.placeholder.com/150/602b9e",
      count: 0
    },
    {
      id: "6",
      itemName: "F",
      description: "Description of 6",
      thumbnail: "https://via.placeholder.com/150/602b9e",
      count: 0
    }
  ],
  addedToCart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CARTLIST:
      return state.cartList;
    case ADD_TO_CART:
      state.cartList
        .filter(item => {
          return item.id === action.payload;
        })
        .map(item => (item.count = action.count));
      return state.cartList;
    default:
      return state;
  }
}
