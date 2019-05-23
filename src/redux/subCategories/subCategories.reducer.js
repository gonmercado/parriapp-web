
const initialState = {
  subCategories: []
};

const subCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SUBCATEGORIES':
      return { ...state, subCategories: action.subCategories };
    case 'CLEAN_SUBCATEGORIES':
      return { ...state, subCategories: [] };
    default:
      return state;
  }
  return state;
};

export default subCategoriesReducer;
