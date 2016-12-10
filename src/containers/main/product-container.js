import React from 'react';
import { connect } from 'react-redux';
import ProductHeader from '../../components/product/header';

const ProductContainer = ({ selectedProduct, isProductFetching }) => {
  return (
    <div className="product-content">
      { selectedProduct && (
        <ProductHeader {...selectedProduct} />
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedProduct: state.productReducer.selectedProduct
  };
};


export default connect(mapStateToProps)(ProductContainer);
