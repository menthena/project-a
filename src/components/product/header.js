import React from 'react';
import { Link } from 'react-router';

const ProductHeader = ({ productName, price, review }) => (
  <div>
    <h1>{productName}</h1>
    <div className="price">{price}</div>
    <div className="review">{review} stars</div>
  </div>
);

ProductHeader.propTypes = {
  productName: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
  review: React.PropTypes.number.isRequired
};

export default ProductHeader;
