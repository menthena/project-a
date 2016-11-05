import React from 'react';
import {Link} from 'react-router';
import ListItem from './ListItem';
import ProductListItem from './ProductListItem';

const GenericList = ComposedItem => class extends React.Component {
  constructor() {
    super();
  }

  renderItems() {
    const { items, itemName, dispatchEvent, selectedItem } = this.props;
    if (items) {
      return items.map((item, index) => {
          return <li key={index}>
            <ComposedItem
              {...this.props}
              {...item}
              handleOnClick={() => dispatchEvent && dispatchEvent(item) }
              itemName={item[itemName]}
              isSelected={selectedItem && item[itemName] === selectedItem[itemName]}
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

export const CategoryList = GenericList(ListItem);
export const ProductList = GenericList(ProductListItem);

GenericList.propTypes = {
  items: React.PropTypes.array.isRequired,
  itemName: React.PropTypes.string.isRequired,
  dispatchEvent: React.PropTypes.func,
  selectedItem: React.PropTypes.obj
};
