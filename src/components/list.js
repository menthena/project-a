import React from 'react';
import {Link} from 'react-router';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { nutritions } = this.props;
    var items;
    items = nutritions.map(item => {
        return <li key={item._id}><Link to={`/${item._id}`}>{item._id}</Link></li>;
      });
    return (<ul>
              { items }
            </ul>);
  }
}

List.propTypes = {
  nutritions: React.PropTypes.array.isRequired
};
