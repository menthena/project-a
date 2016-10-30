import React from 'react';
import {Link} from 'react-router';

const ListItem = ({ handleOnClick, itemName }) => {
  return (
    <Link onClick={ handleOnClick }>
      {itemName}
    </Link>
  );
};

ListItem.propTypes = {
  handleOnClick: React.PropTypes.func.isRequired,
  itemName: React.PropTypes.string.isRequired
};

export default ListItem;
