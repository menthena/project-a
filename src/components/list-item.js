import React from 'react';
import { Link } from 'react-router';

const ListItem = ({ handleOnClick, itemName, isSelected }) => {
  const styles = {fontWeight: (isSelected) ? 'bold': 'normal'};
  return (
    <Link onClick={ handleOnClick } style={styles}>
      {itemName}
    </Link>
  );
};

ListItem.propTypes = {
  handleOnClick: React.PropTypes.func.isRequired,
  itemName: React.PropTypes.string.isRequired
};

export default ListItem;
