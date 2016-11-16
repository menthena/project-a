import React from 'react';
import {connect} from 'react-redux';
import styles from './categoryContainer.css';
import {ProductList, CategoryList} from '../../components/genericList';
import {selectCategory, fetchCategories} from '../../actions/categoryActions';

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="category-content">
        <CategoryList
          items={this.props.categories}
          itemName={'categoryName'}
          dispatchEvent={this.props.selectCategory}
          selectedItem={this.props.selectedCategory}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categoryReducer.categories,
    selectedCategory: state.categoryReducer.selectedCategory,
    isFetching: state.categoryReducer.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    selectCategory: (item) => dispatch(selectCategory(item)),
    fetchProductsByCategoryId: (item) => dispatch(fetchProductsByCategoryId(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
