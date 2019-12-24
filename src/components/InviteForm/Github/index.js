import React from 'react';
import styled from 'styled-components';

import { IoLogoGithub } from 'react-icons/io';

import { CSSTransition } from 'react-transition-group';

import * as Styled from '../styles';

const GithubBtn = styled.button`
  background-color: white;
  border: 1px solid #CACACA;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  color: #2B2B2B;
  padding: 0.85rem 0;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  transition: .1s ease;

  & > svg {
    margin-right: 0.3rem;
    transform: translateY(2px);
  }

  &:active {
    border: 1px solid #AEAEAE;
    box-shadow: 0 0 0 2px rgba(0,0,0,0.05);
  }
`;

class Github extends React.Component {
    componentDidMount() {
        const height = this.component.clientHeight;
        this.props.reportHeight(height);

        this.props.setTitle(`Connect your Github`)
    }
  
    static getName() {
      return "code";
    }

    render() {
        return (
          <CSSTransition in={true} timeout={500} classNames="step">
            <Styled.Step ref={(component) => { this.component = component }}>
                <Styled.Label>
                    <GithubBtn><IoLogoGithub />Sign in with Github</GithubBtn>
                </Styled.Label>
            </Styled.Step>
          </CSSTransition>
        )
    }
  }

export default Github