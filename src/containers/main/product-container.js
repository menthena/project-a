import React from 'react';
import { connect } from 'react-redux';
import LoadingIndicator from '../../components/common/loading-indicator';

const ProductContainer = ({ selectedProduct, isProductFetching }) => {
  return (
    <div className="product-content">
      { selectedProduct && (
        <header>
          {selectedProduct.productName}
        </header>
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
