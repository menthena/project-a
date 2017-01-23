import React from 'react';
import { connect } from 'react-redux';
import Query from '../../components/query';
import Filter from '../../components/filter';
import Sorter from '../../components/sorter';
import './styles/product-list-container.css';
import { ProductList } from '../../components/generic-list';
import { selectProduct, filterProducts, sortProducts } from '../../actions/product-actions';
import { fetchCategories } from '../../actions/product-actions';
import LoadingIndicator from '../../components/common/loading-indicator';

class ProductListContainer extends React.Component {
  render() {
    return (
      <div className="product-list-content">
        { this.props.isFetching && <LoadingIndicator /> }
        { this.props.selectedCategory && (
          <div>
            <div className="flex">
              <Filter
                labelText="Filter:"
                placeholder="Filter products..."
                handleOnChange={query => {
                  this.props.filterProducts(this.props.selectedCategory.categoryId, query);
                }}
                />
              <Sorter handleOnChange={sortIndex => {
                console.log(arguments);
                this.props.sortProducts(this.props.selectedCategory.categoryId, sortIndex);
              }} />
            </div>
            <ProductList
              items={this.props.products}
              thumbnailURL={''}
              itemName={'productName'}
              dispatchEvent={this.props.selectProduct}
              selectedItem={this.props.selectedProduct}
            />
          </div>
        )}
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
    filterProducts: (categoryId, query) => dispatch(filterProducts(categoryId, query)),
    sortProducts: (categoryId, sortIndex) => dispatch(sortProducts(categoryId, sortIndex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
