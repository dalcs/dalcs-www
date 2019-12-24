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
        code: "",
        githubToken: ""
      },
      currentStepValid: false,
      title: "",
    }

    increment = () => {
      if (this.state.page >= this.pages.length-1) return
      this.setState((state) => ({ page: state.page+1 }))
    }

    cancel = () => {
      this.setState({
        page: 0,
        content: {
          email: "",
          code: "",
          githubToken: ""
        },
        currentStepValid: false,
        title: "",
      })
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
          validateStep={this.validateStep}
          setTitle={this.setTitle}
          {...props}
        />
      );
    }

    validateStep = (isValid) => {
      this.setState({currentStepValid: isValid})
    }

    setTitle = (title) => {
      this.setState({title})
    }

    updateContent = step => content => {
      this.setState(state => state.content[step] = content)
    }

    render() {
        return (
            <Styled.Form>
                <Styled.Title>{this.state.title}</Styled.Title>
                <Styled.DynamicHeight height={this.state.innerHeight}>
                    <Styled.Pages>
                      {this.renderStep()}
                    </Styled.Pages>
                </Styled.DynamicHeight>
                {this.state.page < this.pages.length - 1 && (
                  <Styled.Controls>
                    <Styled.Button onClick={this.cancel} hide={this.state.page === 0}>Cancel</Styled.Button>
                    <Styled.Button
                      disabled={!this.state.currentStepValid}
                      cta
                      onClick={this.increment}
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