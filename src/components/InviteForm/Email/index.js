import React from 'react';

import { CSSTransition } from 'react-transition-group';

import * as Styled from '../styles';

class Email extends React.Component {
  state = { isValid: false }

    componentDidMount() {
        const height = this.component.clientHeight;
        this.props.reportHeight(height);
        this.props.setValidateFn(this.validate);

        this.props.setTitle(`Join @dalcs on Github`);
        this.focalInput.focus(); 
    }

    static getName() {
      return "email";
    }

    validate = (v) => {
      const value = v || this.props.content[this.constructor.getName()];
      const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@dal\.ca$/
      const isEmail = value.match(re) ? true : false;
      if (isEmail) 
        return null;
      else
        return "Please enter a valid @dal.ca email."
    }

    updateContent = (e) => {
      const { value } = e.target;
      this.validate(value);
      this.props.updateContent(value);
    }
  
    render() {
        return (
          <CSSTransition in={true} timeout={500} classNames="step">
            <Styled.Step ref={(component) => { this.component = component }}>
                <Styled.Label>
                    Enter your dal email:
                    <Styled.Input
                      ref={(input) => { this.focalInput = input; }} 
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