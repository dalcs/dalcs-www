import React from 'react';

import Code from './Code';
import Email from './Email';
import Github from './Github';
import Success from './Success';
import * as Styled from './styles';

class InviteForm extends React.Component {
    state = {
      page: 0,
      content: {
        email: "",
        code: {
          value: "",
          isValid: false,
        },
        github: ""
      },
      // validate() returns null if no errors found, otherwise an error message
      validate: () => null,
      showError: false,
      title: "",
    }

    componentDidMount() {
      // Deep copy of object with json
      this.initialState = JSON.parse(JSON.stringify(this.state));
      document.addEventListener("keydown", this.shortcuts);
    }

    componentWillUnmount() {
      document.removeEventListener("keydown", this.shortcuts);
    }

    next = () => {
      if (this.state.page >= this.pages.length - 1) {
        return
      } else if (this.validate()) { 
        return
      }
      this.setState((state) => ({ page: state.page + 1 }))
    }

    cancel = () => {
      // Deep copy of object with json
      const initialState = JSON.parse(JSON.stringify(this.initialState));
      this.setState(initialState);
    }

    validate = () => {
      const v = this.state.validate();
      if (v) {
        this.setState({ showError: true })
      } else {
        this.setState({ showError: false })
      }
      return v;
    }

    // This is used for the children to report their height to us
    reportHeight = (height) => {
        this.setState({innerHeight: height});
    }

    pages = [Email, Code, Github, Success]

    renderStep = props => {
      // Read that this was important to leave as a capital
      const ComponentType = this.pages[this.state.page]

      const componentName = ComponentType.getName()
      return (
        <ComponentType
          reportHeight={this.reportHeight}
          content={this.state.content}
          updateContent={this.updateContent(componentName)}
          setTitle={this.setTitle}
          setValidateFn={this.setValidateFn}
          {...props}
        />
      );
    }

    setValidateFn = (fn) => {
      this.setState({validate: fn});
    }

    setTitle = (title) => {
      this.setState({title})
    }

    updateContent = step => content => {
      this.setState(state => state.content[step] = content)
    }

    shortcuts = (e) => {
      // Shortcut so people don't have to click button
      if (e.key === 'Enter') {
        this.next();
      }
    }

    render() {
      const errorMsg = this.state.showError ? this.state.validate() : null;

      return (
          <Styled.Form>
              <Styled.Title>{this.state.title}</Styled.Title>
              <Styled.DynamicHeight height={this.state.innerHeight}>
                  <Styled.Pages>
                    {this.renderStep()}
                  </Styled.Pages>
              </Styled.DynamicHeight>
              {errorMsg && <Styled.Error>{errorMsg}</Styled.Error>}
              {this.state.page < this.pages.length - 1 && (
                <Styled.Controls>
                  <Styled.Button onClick={this.cancel} hide={this.state.page === 0}>Cancel</Styled.Button>
                  <Styled.Button
                    invalid={this.state.validate()}
                    cta
                    onClick={this.next}
                  >
                    Next
                  </Styled.Button>
                </Styled.Controls>
              )}
              <Styled.Indicator>
                {this.pages.map((_, idx) => (
                  <Styled.Dot selected={idx === this.state.page} />
                ))}
              </Styled.Indicator>
          </Styled.Form>
      )
  }
}

export default InviteForm