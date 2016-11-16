import React from 'react';
import {connect} from 'react-redux';
import CategoryContainer from './categoryContainer';
import ProductContainer from './productContainer';
import styles from './mainContainer.css';

const MainContainer = ({ params }) => {
  return (
    <div className="grid">
      <CategoryContainer />
      <ProductContainer />
    </div>
  );
}

export default MainContainer;
