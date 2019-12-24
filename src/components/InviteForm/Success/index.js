import React from 'react';

import { CSSTransition } from 'react-transition-group';

import * as Styled from '../styles';

class Success extends React.Component {
    componentDidMount() {
        const height = this.component.clientHeight;
        this.props.reportHeight(height);
    }
  
    render() {
        return (
          <CSSTransition in={true} timeout={500} classNames="step">
            <Styled.Step ref={(component) => { this.component = component }}>
                Success!
            </Styled.Step>
          </CSSTransition>
        )
    }
  }

export default Success