import React, { PropTypes } from 'react';

const sorterOptions = [{
  id: 'review',
  text: 'Good reviews'
},
{
  id: 'reviewcount',
  text: 'Review count'
},
{
  id: 'lowprice',
  text: 'Low price'
},
{
  id: 'highprice',
  text: 'High price'
}];

const Sorter = ({ handleOnChange }) => (
  <select className="sorter" onChange={event => handleOnChange(event.target.value)}>
    { sorterOptions.map((option) => {
        return (
          <option key={option.id} value={option.id}>
            {option.text}
          </option>)
    }) }
  </select>
);

Sorter.propTypes = {

};

export default Sorter;
