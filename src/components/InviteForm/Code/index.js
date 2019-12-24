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
    this.props.validateStep(false);

    this.props.setTitle(`Enter the code sent to ${this.props.content["email"]}`)
    this.focalInput.focus(); 
  }

  static getName() {
    return "code";
  }

  validate = (value) => {
    const re = new RegExp(`^[0-9]{1,${CODE_LENGTH}}$`);
    const isNumber = value.match(re);
    const isEmpty = value === ""
    const isValid = isNumber || isEmpty ? true : false;

    // TODO: Change this to actually verify code before proceeding
    this.setState({successBadge: value.length >= 6});
    this.props.validateStep(value.length >= 6);
    return isValid;
  }

  updateContent = (e) => {
    const { value } = e.target;
    if (!this.validate(value)) return;
    this.props.updateContent(value);
  }

  submit = (e) => {
    if (e.key === 'Enter') {
      this.props.submit();
    }
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
                      value={this.props.content[this.constructor.getName()] || ""}
                      onChange={this.updateContent}
                      onKeyDown={this.submit}
                      placeholder="123456"
                    />
                    {this.state.successBadge && <Check src="check.svg" />}
                  </Control>
              </Styled.Label>
          </Styled.Step>
        </CSSTransition>
      )
  }
}

export default Code