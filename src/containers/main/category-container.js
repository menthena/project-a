import React from 'react';
import { connect } from 'react-redux';
import './styles/category-container.css';
import { ProductList, CategoryList } from '../../components/generic-list';
import LoadingIndicator from '../../components/common/loading-indicator';
import { selectCategory, fetchCategories } from '../../actions/category-actions';

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    let result;
    if (this.props.isFetching) {
      result = <LoadingIndicator />;
    } else {
      result = (<CategoryList
        items={this.props.categories}
        itemName={'categoryName'}
        dispatchEvent={this.props.selectCategory}
        selectedItem={this.props.selectedCategory}
      />);
    }
    return (
      <div className="category-content">
        {result}
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
