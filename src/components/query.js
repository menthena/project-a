import React from 'react';

const Query = ({ title, handleOnChange }) => (
  <div>
    <label htmlFor="query">{title}</label>
    <input id="query" type="text" onChange={handleOnChange} />
  </div>
);

Query.propTypes = {
  title: React.PropTypes.string.isRequired,
  handleOnChange: React.PropTypes.func.isRequired
};

export default Query;
