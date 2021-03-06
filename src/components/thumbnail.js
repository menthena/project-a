import React from 'react';
import { Link } from 'react-router';

const Thumbnail = ({ thumbnailURL }) => (
  <div className="thumbnail">
    <img src={thumbnailURL} />
  </div>
);

Thumbnail.propTypes = {
  thumbnailURL: React.PropTypes.string.isRequired
};

export default Thumbnail;
