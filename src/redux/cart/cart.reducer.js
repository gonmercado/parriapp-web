import { ADD_CART_ITEM } from './cart.constants';

const initialState = {
  cartItems: [],
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return({
        ...state,
        cartItems: [ ...state.cartItems, action.cartItem ],
        total: state.total + action.cartItem.precio
      });
    default:
      return state;
  }
};

export default cartReducer;
