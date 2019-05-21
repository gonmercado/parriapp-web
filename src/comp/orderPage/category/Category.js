import React, { useState, useEffect } from 'react';
import Proptypes from 'prop-types';

const Category = ({ category }) => {
  const [ subCategories, setSubCategories ] = useState([]);

  useEffect(() => {
    //TODO: LLamar a backend
    setSubCategories([])
  }, [category]);

  return (
    <div className={ 'category__main-container'}>
      { category }
    </div>
  );
}

Category.propTypes = {
  category: Proptypes.string.isRequired
};

export default Category;
