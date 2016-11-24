import React from 'react';
import { connect } from 'react-redux';

class ProductContainer extends React.Component {
  render() {
    if (!this.props.selectedProduct) {
      return (<div></div>);
    }
    return (
      <div className="product-content">
        <header>
          {this.props.selectedProduct.productName}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedProduct: state.productReducer.selectedProduct
  };
};


export default connect(mapStateToProps)(ProductContainer);
