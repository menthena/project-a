import React from 'react';
import {connect} from 'react-redux';
import CategoryContainer from './CategoryContainer';
import ProductContainer from './ProductContainer';

const MainContainer = ({ params }) => {
  return (
    <div>
      <CategoryContainer />
    </div>
  );
}

export default MainContainer;
