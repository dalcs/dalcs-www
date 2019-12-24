import React from 'react';

import { CSSTransition } from 'react-transition-group';

import * as Styled from '../styles';

class Github extends React.Component {
    componentDidMount() {
        const height = this.component.clientHeight;
        this.props.reportHeight(height);
    }
  
    render() {
        return (
          <CSSTransition in={true} timeout={500} classNames="step">
            <Styled.Step ref={(component) => { this.component = component }}>
                <Styled.Label>
                    Connect github
                    <button>Hi</button>
                </Styled.Label>
            </Styled.Step>
          </CSSTransition>
        )
    }
  }

export default Github