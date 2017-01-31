import React from 'react';
import { Link } from 'react-router';

const Description = ({ children }) => (
  <div>
    <header>Description</header>
    <article>
      {children}
    </article>
  </div>
);

Description.propTypes = {
  children: React.PropTypes.string.isRequired
};

export default Description;
