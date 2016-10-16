import React from 'react';
import { browserHistory } from 'react-router';
import styles from './style.css';


export default class DetailContainer extends React.Component {
  render() {
    console.log(this.props.params);
    return (
      <div className={styles.content}>
        detail
      </div>
    );
  }
}
