import React from 'react';
import {Link} from 'react-router';
import ListItem from './ListItem';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    const { items, itemName, handleOnClick, itemIndex } = this.props;
    if (items) {
      return items.map((item, index) => {
          return <li key={index}>
            <ListItem
              handleOnClick={() => handleOnClick(item[itemIndex])}
              itemName={item[itemName]}
            />
          </li>;
        });
    }
  }

  render() {
    const { isFetching } = this.props;

    return (
      <ul>
        { this.renderItems() }
      </ul>
    );
  }
}

List.propTypes = {
  items: React.PropTypes.array.isRequired
};
