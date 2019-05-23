import { getAxiosInstance } from '../../config/axiosInstance';

const addSubCategories = (subCategories) => ({ type: 'ADD_SUBCATEGORIES', subCategories: subCategories });

export const removeItems = () => ({ type: 'REMOVE_ITEMS' });

export const fetchSubCategories = id => dispatch => {
  getAxiosInstance().get('/subcategories')
    .then(subCategoriesResult => {
      dispatch(addSubCategories(subCategoriesResult.data))
    })
    .catch(error => console.log(error));
};


