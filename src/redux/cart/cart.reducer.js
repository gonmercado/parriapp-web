
const initialState = {
  items: [],
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        items: [ ...state.items, action.item ],
        total: state.total + action.item.price
      };
    default:
      return state
  }
}

export default cartReducer;
