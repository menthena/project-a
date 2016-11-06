import React from 'react';

const Filter = ({ labelText, placeholder, handleOnChange, value }) => {
  return (
    <div>
      <label>{labelText}</label>
      <input
        type="text"
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Filter;
