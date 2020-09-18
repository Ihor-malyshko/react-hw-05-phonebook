import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

const withTransition = style => WrappedComponent => {
  return class withTransition extends Component {
    render() {
      const visible =
        this.props.isVisible === undefined ? true : this.props.isVisible;
      return (
        <CSSTransition
          appear={true}
          in={visible}
          timeout={500}
          classNames={style}
          unmountOnExit
        >
          <WrappedComponent {...this.props} {...this.state} />
        </CSSTransition>
      );
    }
  };
};

export default withTransition;
