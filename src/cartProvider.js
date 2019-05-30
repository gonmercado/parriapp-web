import { ADD_CART_ITEM } from './redux/cart/cart.constants';
import React, { useReducer } from 'react';

export const cartContext = React.createContext();

const initialState = {
  cartItems: [],
  total: 0
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART_ITEM:
      return({
        ...state,
        cartItems: [ ...state.cartItems, action.cartItem ],
        total: state.total + action.cartItem.precio
      });
    default:
      throw new Error();
  }

};
const CartProvider = ({ children }) => {

  const [ cartState, cartDispatch ] = useReducer(cartReducer, initialState);
  return (
    <cartContext.Provider value={ { cartState, cartDispatch } } >
      { children }
    </cartContext.Provider>
  )

};

export default CartProvider;
