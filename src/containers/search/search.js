import React from 'react';
import {connect} from 'react-redux';
import styles from './style.css';
import Query from '../../components/query';
import List from '../../components/list';
import {fetchNutrition} from '../../actions/nutritionActions';

class SearchContainer extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <Query title='Title' {...this.props}></Query>
        <List {...this.props}></List>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    nutritions: state.nutritionReducer.nutritions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnChange: () => dispatch(fetchNutrition())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
