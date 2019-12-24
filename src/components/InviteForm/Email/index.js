import React from 'react';

import { CSSTransition } from 'react-transition-group';

import * as Styled from '../styles';

class Email extends React.Component {
    componentDidMount() {
        const height = this.component.clientHeight;
        this.props.reportHeight(height);
    }
  
    render() {
        return (
          <CSSTransition in={true} timeout={500} classNames="step">
            <Styled.Step ref={(component) => { this.component = component }}>
                <Styled.Label>
                    Enter your dal email:
                    <Styled.Input type="text" placeholder="sarah@dal.ca" />
                </Styled.Label>
            </Styled.Step>
          </CSSTransition>
        )
    }
  }

export default Email