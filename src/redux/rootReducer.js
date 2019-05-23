import { combineReducers } from 'redux';
import cart from './cart/cart.reducer';
import subCategories from './subCategories/subCategories.reducer';

export default combineReducers({
  cart,
  subCategories
});
