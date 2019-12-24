import React from 'react';
import styled from 'styled-components';

import { CSSTransition } from 'react-transition-group';

import * as Styled from '../styles';

const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  color: #2B2B2B;
  margin-bottom: 0;
  margin-top: 0;
`;
const Instructions = styled.p`
  font-size: 14px;
  color: #2B2B2B;
  margin-top: 8px;
  margin-bottom: 1.5rem;
`;

class Success extends React.Component {
    componentDidMount() {
        const height = this.component.clientHeight;
        this.props.reportHeight(height);
    }
  
    render() {
        return (
          <CSSTransition in={true} timeout={500} classNames="step">
            <Styled.Step ref={(component) => { this.component = component }}>
              <Title>You’ve been invited to dalcs</Title>
              <Instructions>
                Check your email or follow the link below
                to accept your invitation
              </Instructions>
              <Styled.Button cta>Verify</Styled.Button>
            </Styled.Step>
          </CSSTransition>
        )
    }
  }

export default Success