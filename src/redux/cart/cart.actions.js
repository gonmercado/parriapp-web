import { ADD_CART_ITEM } from './cart.constants';

export const addCartItem = cartItem => ({ type: ADD_CART_ITEM, cartItem });
