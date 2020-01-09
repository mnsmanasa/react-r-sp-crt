import { GET_CARTLIST } from './actionTypes';

export const initialState = {
  cartList: [
    {
      id: '1',
      itemName: 'A',
      description: 'Description of 1',
      thumbnail:'https://via.placeholder.com/150/602b9e',
    },
    {
      id: '2',
      itemName: 'B',
      description: 'Description of 2',
      thumbnail:'https://via.placeholder.com/150/602b9e',
    },{
      id: '3',
      itemName: 'C',
      description: 'Description of 3',
      thumbnail:'https://via.placeholder.com/150/602b9e',
    },{
      id: '4',
      itemName: 'D',
      description: 'Description of 4',
      thumbnail:'https://via.placeholder.com/150/602b9e',
    },{
      id: '5',
      itemName: 'E',
      description: 'Description of 5',
      thumbnail:'https://via.placeholder.com/150/602b9e',
    },{
      id: '6',
      itemName: 'F',
      description: 'Description of 6',
      thumbnail:'https://via.placeholder.com/150/602b9e',
    },
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
