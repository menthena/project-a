import React from 'react';
import {Link} from 'react-router';

const ProductListItem = ({ handleOnClick, itemName, price, isSelected }) => {
  const styles = {fontWeight: (isSelected) ? 'bold': 'normal'};
  return (
    <Link onClick={ handleOnClick } style={styles}>
      {itemName}
      <span>{price}</span>
    </Link>
  );
};

ProductListItem.propTypes = {
  handleOnClick: React.PropTypes.func.isRequired,
  itemName: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired
};

export default ProductListItem;
