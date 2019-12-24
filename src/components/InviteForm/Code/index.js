import React from 'react';

import { CSSTransition } from 'react-transition-group';

import * as Styled from '../styles';

const CODE_LENGTH = 6;

class Code extends React.Component {
  state = { successBadge: false }

  componentDidMount() {
    const height = this.component.clientHeight;
    this.props.reportHeight(height);
    this.props.validateStep(false);

    this.props.setTitle(`Enter the code sent to ${this.props.content["email"]}`)
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
    this.props.validateStep(value.length === 7);
    return isValid;
  }

  updateContent = (e) => {
    const { value } = e.target;
    if (!this.validate(value)) return;
    this.props.updateContent(value);
  }

  render() {
      return (
        <CSSTransition in={true} timeout={500} classNames="step">
          <Styled.Step ref={(component) => { this.component = component }}>
              <Styled.Label>
                  Verification code:
                  <Styled.Input
                    type="text"
                    value={this.props.content[this.constructor.getName()] || ""}
                    onChange={this.updateContent}
                    placeholder="123456"
                  />
              </Styled.Label>
          </Styled.Step>
        </CSSTransition>
      )
  }
}

export default Code