import React from 'react';
import {connect} from 'react-redux';
import CategoryContainer from './categoryContainer';
import ProductContainer from './productContainer';

const MainContainer = ({ params }) => {
  return (
    <div>
      <CategoryContainer />
      <ProductContainer />
    </div>
  );
}

export default MainContainer;
