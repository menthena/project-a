import React from 'react';
import {connect} from 'react-redux';
import styles from './style.css';
import Query from '../../components/query';
import List from '../../components/list';
import {fetchCategories} from '../../actions/categoryActions';

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className={styles.content}>
        <List {...this.props}></List>
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
