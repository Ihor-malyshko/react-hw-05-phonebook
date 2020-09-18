import React, { Component, lazy } from 'react';
import { CSSTransition } from 'react-transition-group';
import style from '../Logo/Logo.module.css';

const withTransition = WrappedComponent => {
  return class withTransition extends Component {
    componentDidMount() {
      // console.log(this.props.name);
    }

    getStyles = () => {
      const s = lazy(() => import(`./${this.props.name}.module.css`));
      console.log(`../${this.props.name}/${this.props.name}.module.css`);
      return s;
    };

    render() {
      console.log('style', style);
      console.log(
        'else',
        lazy(() => import(`../Logo/Logo.module.css`)),
      );
      return (
        <CSSTransition
          appear={true}
          in={true}
          timeout={500}
          // classNames={this.getStyles()}
          unmountOnExit
        >
          <WrappedComponent {...this.props} s={this.getStyles()} />
        </CSSTransition>
      );
    }
  };
};

export default withTransition;
