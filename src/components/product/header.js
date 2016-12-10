import React from 'react';
import { Link } from 'react-router';

const ProductHeader = ({ productName, price, stars }) => (
  <div>
    <h1>{productName}</h1>
    <div className="price">£{price}</div>
    <div className="review">{stars} stars</div>
  </div>
);

ProductHeader.propTypes = {
  productName: React.PropTypes.string.isRequired,
  price: React.PropTypes.string.isRequired,
  stars: React.PropTypes.number.isRequired
};

export default ProductHeader;
