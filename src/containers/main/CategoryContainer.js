import React from 'react';
import {connect} from 'react-redux';
import styles from './categoryContainer.css';
import Query from '../../components/query';
import {ProductList, CategoryList} from '../../components/genericList';
import {selectCategory, fetchCategories} from '../../actions/categoryActions';
import {selectProduct} from '../../actions/productActions';

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className={styles.content}>
        <CategoryList
          items={this.props.categories}
          itemName={'categoryName'}
          dispatchEvent={this.props.selectCategory}
          selectedItem={this.props.selectedCategory}
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
    categories: state.categoryReducer.categories,
    selectedCategory: state.categoryReducer.selectedCategory,
    selectedProduct: state.productReducer.selectedProduct,
    products: state.productReducer.products,
    isFetching: state.categoryReducer.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    selectCategory: (item) => dispatch(selectCategory(item)),
    selectProduct: (item) => dispatch(selectProduct(item)),
    fetchProductsByCategoryId: (item) => dispatch(fetchProductsByCategoryId(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
