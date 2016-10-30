import React from 'react';
import {connect} from 'react-redux';
import styles from './style.css';
import Query from '../../components/query';
import GenericList from '../../components/GenericList';
import {fetchCategories} from '../../actions/categoryActions';

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  handleCategoryOnClick(e, b) {
    console.log('aa', e, b);
  }

  render() {
    return (
      <div className={styles.content}>
        <GenericList
          items={this.props.categories}
          itemName={'categoryName'}
          itemIndex={'categoryId'}
          handleOnClick={this.handleCategoryOnClick}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categoryReducer.categories,
    isFetching: state.categoryReducer.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
