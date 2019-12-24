import React from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti'
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

        this.props.setTitle(`Invitation sent to @mack`)
    }

    static getName() {
      return "code";
    }

  
    render() {
      return (
        <CSSTransition in={true} timeout={500} classNames="step">
          <Styled.Step ref={(component) => { this.component = component }}>
            <Confetti numberOfPieces={300} recycle={false} />
            <Title><span role="img" aria-label="tada">🎉</span> You’ve been invited to dalcs</Title>
            <Instructions>
              Check your email or follow the link below
              to accept your invitation
            </Instructions>
            <a href="https://github.com/dalcs" target="_blank" rel="noopener noreferrer">
              <Styled.Button cta big valid>
                Accept Invite
              </Styled.Button>
            </a>
          </Styled.Step>
        </CSSTransition>
      )
    }
  }

export default Success