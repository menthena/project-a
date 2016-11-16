import React from 'react';
import {connect} from 'react-redux';
import styles from './productContainer.css';
import appStyles from '../../app.css';
import Query from '../../components/query';
import Filter from '../../components/filter';
import { ProductList } from '../../components/genericList';
import { selectProduct, filterProducts } from '../../actions/productActions';
import { fetchCategories } from '../../actions/productActions';

class ProductContainer extends React.Component {
  render() {
    if (!this.props.selectedCategory) {
      return (<div></div>);
    }
    return (
      <div className="product-content">
        <Filter
          labelText="Filter:"
          placeholder="Filter products..."
          handleOnChange={(query) => {
            this.props.filterProducts(this.props.selectedCategory.categoryId, query);
          }}
        />
        <ProductList
          items={this.props.products}
          itemName={'productName'}
          dispatchEvent={this.props.selectProduct}
          selectedItem={this.props.selectedProduct}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedProduct: state.productReducer.selectedProduct,
    selectedCategory: state.categoryReducer.selectedCategory,
    products: state.productReducer.products,
    isFetching: state.productReducer.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectProduct: (item) => dispatch(selectProduct(item)),
    filterProducts: (categoryId, query) => dispatch(filterProducts(categoryId, query))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
