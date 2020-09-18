import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

const withTransition = style => visible => WrappedComponent => {
  return class withTransition extends Component {
    componentDidMount() {
      console.log('in hoc', visible);
    }

    render() {
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
