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

const Sorter = ({ handleOnChange, sortBy }) => {
  const selectedIndex = sorterOptions.findIndex(o => o.id === sortBy);
  return (
    <div className="sorter">
      <div>{sorterOptions[selectedIndex].text}</div>
      <ul>
      {
        sorterOptions.map((option, index) => {
          return (
            <li key={option.id}>
              <a onClick={(() =>
                handleOnChange(option.id))}>
                  {option.text}
              </a>
            </li>
          );
        })
      }
      </ul>
    </div>
  );
};

Sorter.propTypes = {
  handleOnChange: React.PropTypes.func.isRequired,
  sortBy: React.PropTypes.string.isRequired
};

export default Sorter;
