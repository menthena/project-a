import React from 'react';
import { connect } from 'react-redux';
import CategoryContainer from './category-container';
import ProductContainer from './product-container';

const MainContainer = ({ params }) => {
  return (
    <div className="grid">
      <CategoryContainer />
      <ProductContainer />
    </div>
  );
}

export default MainContainer;
