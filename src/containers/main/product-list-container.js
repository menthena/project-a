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
    const { isFetching, sortProducts, filterProducts, selectedCategory,
        products, selectedProduct, selectProduct, sortBy, displaySortOptions }
        = this.props;
    return (
      <div className="product-list-content">
        { isFetching && <LoadingIndicator /> }
        { selectedCategory && (
          <div>
            <div className="flex">
              <Filter
                labelText="Filter:"
                placeholder="Filter products..."
                handleOnChange={query => {
                  filterProducts(selectedCategory.categoryId, query);
                }}
                />
              <Sorter
                handleOnChange={sortIndex => {
                  sortProducts(selectedCategory.categoryId, sortIndex);
                }}
                sortBy={sortBy}
                displayOptions={displaySortOptions} />
            </div>
            <ProductList
              items={products}
              thumbnailURL={''}
              itemName={'productName'}
              dispatchEvent={selectProduct}
              selectedItem={selectedProduct}
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
    isFetching: state.productReducer.isFetching,
    sortBy: state.productReducer.sortBy,
    displaySortOptions: state.productReducer.displaySortOptions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectProduct: (item) => dispatch(selectProduct(item)),
    filterProducts: (categoryId, query) => dispatch(filterProducts(categoryId, query)),
    sortProducts: (categoryId, sortBy) => dispatch(sortProducts(categoryId, sortBy))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
