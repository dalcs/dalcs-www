import React from 'react';

import { CSSTransition } from 'react-transition-group';

import styled from 'styled-components';
import * as Styled from '../styles';

const Check = styled.img`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-15%);
`;

const Control = styled.div`
  position: relative;
  display: flex;

  & > input {
    flex: 1;
    padding-right: 2rem;
  }
`;

const CODE_LENGTH = 6;

class Code extends React.Component {
  state = { successBadge: false }

  componentDidMount() {
    const height = this.component.clientHeight;
    this.props.reportHeight(height);
    this.props.setValidateFn(this.validate);

    this.props.setTitle(<span>Enter the code sent to <b>{this.props.content["email"]}</b></span>)
    this.focalInput.focus(); 
  }

  static getName() {
    return "code";
  }

  validate = (v) => {
    const value = v || this.props.content[this.constructor.getName()].value
    const isLength = value.length !== 6;
    // TODO: Change this to actually verify code before proceeding
    // this.setState({successBadge: value.length >= 6});
    // this.props.validateStep(value.length >= 6);
    if (isLength) 
      return "Please enter the 6 digit code.";
    else
      return null
  }

  canInput = (v) => {
    const value = v;
    const re = new RegExp(`^[0-9]{1,${CODE_LENGTH}}$`);
    const isNumber = value.match(re);
    const isEmpty = value === ""
    const canInput = isNumber || isEmpty ? true : false;
    return canInput;
  }

  updateContent = (e) => {
    const { value } = e.target;
    if (!this.canInput(value)) return;
    this.props.updateContent({
      value: value,
      isValid: !this.validate(value),
    });
  }

  render() {
      return (
        <CSSTransition in={true} timeout={500} classNames="step">
          <Styled.Step ref={(component) => { this.component = component }}>
              <Styled.Label>
                  Verification code:
                  <Control>
                    <Styled.Input
                      ref={(input) => { this.focalInput = input; }} 
                      type="text"
                      value={this.props.content[this.constructor.getName()].value || ""}
                      onChange={this.updateContent}
                      placeholder="123456"
                    />
                    {this.props.content[this.constructor.getName()].isValid && <Check src="check.svg" />}
                  </Control>
              </Styled.Label>
          </Styled.Step>
        </CSSTransition>
      )
  }
}

export default Code