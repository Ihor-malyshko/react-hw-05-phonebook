import React, { Component } from 'react';
import withTransition from '../hoc/withTransition';
import s from './Alert.module.css';

class Alert extends Component {
  render() {
    console.log('in Alert', this.props.in);
    return <div className={s.alert}>This name, already exist in contacts.</div>;
  }
}

export default withTransition(s)(true)(Alert);
