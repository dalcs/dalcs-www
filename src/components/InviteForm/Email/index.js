import React from 'react';

import { CSSTransition } from 'react-transition-group';

import * as Styled from '../styles';

class Email extends React.Component {
  state = { isValid: false }

    componentDidMount() {
        const height = this.component.clientHeight;
        this.props.reportHeight(height);
        this.props.validateStep(false);

        this.props.setTitle(`Join @dalcs on Github`)
    }

    static getName() {
      return "email";
    }

    checkValidity = (value) => {
      const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@dal\.ca$/
      const isEmail = value.match(re) ? true : false;
      this.props.validateStep(isEmail);
    }

    updateContent = (e) => {
      const { value } = e.target;
      this.checkValidity(value);
      this.props.updateContent(value);
    }
  
    render() {
        return (
          <CSSTransition in={true} timeout={500} classNames="step">
            <Styled.Step ref={(component) => { this.component = component }}>
                <Styled.Label>
                    Enter your dal email:
                    <Styled.Input
                      type="text"
                      value={this.props.content[this.constructor.getName()] || ""}
                      onChange={this.updateContent}
                      placeholder="sarah@dal.ca"
                    />
                </Styled.Label>
            </Styled.Step>
          </CSSTransition>
        )
    }
  }

export default Email