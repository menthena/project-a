import React from 'react';
import { Link } from 'react-router';
import Thumbnail from './thumbnail';

const ProductListItem = ({
  handleOnClick,
  itemName,
  price,
  isSelected,
  thumbnailURL
}) => {
  const styles = {fontWeight: (isSelected) ? 'bold': 'normal'};
  return (
    <Link onClick={ handleOnClick } style={styles}>
      <Thumbnail thumbnailURL={thumbnailURL} />
      <div className="product-name">{itemName}</div>
      <div className="product-price">£{price}</div>
    </Link>
  );
};

ProductListItem.propTypes = {
  handleOnClick: React.PropTypes.func.isRequired,
  itemName: React.PropTypes.string.isRequired,
  thumbnailURL: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired
};

export default ProductListItem;
