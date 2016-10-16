import React from 'react';

export default class Query extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, handleOnChange } = this.props;
    return (
      <div>
        <label htmlFor="query">{title}</label>
        <input id="query" type="text" onChange={handleOnChange} />
      </div>
    )
  }
}

Query.propTypes = {
  title: React.PropTypes.string.isRequired,
  handleOnChange: React.PropTypes.func.isRequired
};
