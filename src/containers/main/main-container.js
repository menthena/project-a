import React from 'react';
import { connect } from 'react-redux';
import CategoryContainer from './category-container';
import ProductListContainer from './product-list-container';
import ProductContainer from './product-container';
import './main-container.css';

const MainContainer = ({ params }) => {
  return (
    <div className="grid">
      <CategoryContainer />
      <ProductListContainer />
      <ProductContainer />
    </div>
  );
}

export default MainContainer;
