import React from 'react';
import PropTypes from 'prop-types';

const SubCategoryList = ({ subCategories, onSubCategorySelect }) => {
  const handleSubCategoryClick = ({ id }) => onSubCategorySelect(id);

  return (
    <div className={ 'sub-category-list'}>
      {
        subCategories.map(subCategory => (
          <div key={ subCategory.id } className={ 'subcategory-list-item'} onClick={ () => handleSubCategoryClick(subCategory) }>{ subCategory.nombre }</div>
        ))
      }
    </div>
  );
};

SubCategoryList.propTypes = {
  subCategories: PropTypes.array,
  onSubCategorySelect: PropTypes.func,
};

SubCategoryList.defaultProps = {
  subCategories: [],
  onSubCategorySelect: () => null
};

export default SubCategoryList;
