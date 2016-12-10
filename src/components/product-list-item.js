import React from 'react';
import { Link } from 'react-router';
import Thumbnail from './thumbnail';

const ProductListItem = ({
  handleOnClick,
  itemName,
  price,
  isSelected,
  thumbnailURL,
  stars
}) => {
  const styles = {fontWeight: (isSelected) ? 'bold': 'normal'};
  return (
    <Link onClick={ handleOnClick } style={styles}>
      <Thumbnail thumbnailURL={thumbnailURL} />
      <div className="product-info">
        <div className="product-name">{itemName}</div>
        <div className="product-price">£{price}</div>
      </div>
      <div className="product-stars">{stars} stars</div>
    </Link>
  );
};

ProductListItem.propTypes = {
  handleOnClick: React.PropTypes.func.isRequired,
  itemName: React.PropTypes.string.isRequired,
  thumbnailURL: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
  stars: React.PropTypes.number.isRequired
};

export default ProductListItem;
