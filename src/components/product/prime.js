import React from 'react';
import { Link } from 'react-router';

const Prime = ({ primeClass }) => (
    <span className={primeClass} />
);

Prime.propTypes = {
  primeClass: React.PropTypes.string
};

export default Prime;
