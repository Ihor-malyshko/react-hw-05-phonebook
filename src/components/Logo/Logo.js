import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

// const st = lazy(() => import(`./Logo.module.css`));
import s from './Logo.module.css';

class Logo extends Component {
  render() {
    // console.log('s in logo', this.props.s);
    // console.log('st', st);
    return (
      <CSSTransition
        appear={true}
        in={true}
        timeout={500}
        classNames={s}
        unmountOnExit
      >
        <h2 className={s.logo}>Phonebook</h2>
      </CSSTransition>
    );
  }
}

export default Logo;
