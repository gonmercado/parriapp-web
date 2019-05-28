import React, { useState } from 'react';
import Proptypes from 'prop-types';
import SubCategoryList from './subCategoryList/SubCategoryList';
import ItemList from './itemsList/ItemsList.connector';

const Category = ({ category }) => {
  // const [ subCategories, setSubCategories ] = useState([]);
  const [ selectedItems, setSelectedItems ] = useState([]);

  const handleSubCategorySelect = items => {
    setSelectedItems(items.map(articulo => ({ ...articulo })))
  };

  return (
    <div className={ 'category__main-container'}>
      <SubCategoryList categoryId={ category } onSubCategorySelect={ handleSubCategorySelect } />
      <ItemList items={ selectedItems } />
    </div>
  );
};

Category.propTypes = {
  category: Proptypes.string.isRequired
};

export default Category;
