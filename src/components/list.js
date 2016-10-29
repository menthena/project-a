import React from 'react';
import {Link} from 'react-router';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCategories() {
    const { categories } = this.props;
    if (categories) {
      return categories.map(item => {
          return <li key={item.categoryId}><Link to={`/${item.categoryId}`}>{item.categoryName}</Link></li>;
        });
    }
  }

  render() {
    const { isFetching } = this.props;

    return (
      <ul>
        { this.renderCategories() }
      </ul>
    );
  }
}

List.propTypes = {
  categories: React.PropTypes.array.isRequired
};
