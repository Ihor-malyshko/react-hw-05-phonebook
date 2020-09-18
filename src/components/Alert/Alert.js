import React, { Component } from 'react';
import withTransition from '../hoc/withTransition';
import s from './Alert.module.css';

class Alert extends Component {
  render() {
    return <div className={s.alert}>This name, already exist in contacts.</div>;
  }
}

export default withTransition(s)(Alert);
