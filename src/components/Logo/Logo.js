import React, { Component } from 'react';
import withTransition from '../hoc/withTransition';
import s from './Logo.module.css';

class Logo extends Component {
  render() {
    return <h2 className={s.logo}>Phonebook</h2>;
  }
}

export default withTransition(s)(Logo);
