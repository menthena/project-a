import React from 'react';
import { connect } from 'react-redux';
import Query from '../../components/query';
import Filter from '../../components/filter';
import './styles/product-list-container.css';
import { ProductList } from '../../components/generic-list';
import { selectProduct, filterProducts } from '../../actions/product-actions';
import { fetchCategories } from '../../actions/product-actions';

class ProductListContainer extends React.Component {
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
          thumbnailURL={''}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
