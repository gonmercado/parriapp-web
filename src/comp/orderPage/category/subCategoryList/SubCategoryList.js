import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useSubCategories from './useSubCategories';

const SubCategoryList = ({ categoryId, onSubCategorySelect}) => {

  const subCategories = useSubCategories(categoryId);

  const handleSubCategoryClick = ({ articulos }) => onSubCategorySelect(articulos);

  return (
    <div className={ 'sub-category-list'}>
      {
        subCategories.map(subCategory => (
          <div
            key={ subCategory.id }
            className={ 'subcategory-list-item'}
            onClick={ () => handleSubCategoryClick(subCategory) }
          >{ subCategory.nombre }
          </div>
        ))
      }
    </div>
  )
};


// class SubCategoryList extends React.Component {
//   handleSubCategoryClick = ({ articulos }) => this.props.onSubCategorySelect(articulos);
//   constructor(props) {
//     super(props);
//     this.state = {
//       subCategories: [],
//       cosas: []
//     };
//     this.fetchSubCategories();
//   }
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     if(prevProps.categoryId !== this.props.categoryId) {
//       this.fetchSubCategories();
//     }
//   }
//
//
//   fetchSubCategories() {
//     getAxiosInstance().get(`/subcategories?category_id=1`)
//       .then(subCategoriesResult => {
//         this.setState({ subCategories: subCategoryHC });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }
//
//   render() {
//     const { subCategories } = this.state;
//     return (
//       <div className={ 'sub-category-list'}>
//         {
//           subCategories.map(subCategory => (
//             <div
//               key={ subCategory.id }
//               className={ 'subcategory-list-item'}
//               onClick={ () => this.handleSubCategoryClick(subCategory) }
//             >{ subCategory.nombre }
//             </div>
//           ))
//         }
//       </div>
//     );
//   };
// }

SubCategoryList.propTypes = {
  categoryId: PropTypes.string,
  onSubCategorySelect: PropTypes.func,
};

SubCategoryList.defaultProps = {
  categoryId: null,
  onSubCategorySelect: () => null
};

export default SubCategoryList;
