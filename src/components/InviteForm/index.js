import React from 'react';

import Code from './Code';
import Email from './Email';
import Github from './Github';
import Success from './Success';
import * as Styled from './styles';

class InviteForm extends React.Component {
    state = {
        page: 0
    }

    increment = () => {
        if (this.state.page >= this.pages.length-1) return
        this.setState((state) => ({page: state.page+1}))
    }

    decrement = () => {
        if (this.state.page === 0) return
        this.setState((state) => ({page: state.page-1}))
    }

    // This is used for the children to report their height to us
    reportHeight = (height) => {
        this.setState({innerHeight: height});
    }

    pages = [
        {
            title: "Join @dalcs on github",
            component: Email,
        },
        {
            title: "Enter the code sent to mack@dal.ca",
            component: Code,
        },
        {
          title: "Connect your Github",
          component: Github,
        },
        {
          title: "Invitation sent to @mack",
          component: Success,
        }
    ]

    renderStep = props => {
      const ComponentType = this.pages[this.state.page].component
      return <ComponentType reportHeight={this.reportHeight} {...props} />
    }

    render() {
        return (
            <Styled.Form>
                <Styled.Title>{this.pages[this.state.page].title}</Styled.Title>
                <Styled.DynamicHeight height={this.state.innerHeight}>
                    <Styled.Pages>
                      {this.renderStep()}
                    </Styled.Pages>
                </Styled.DynamicHeight>
                <Styled.Controls>
                    <Styled.Button onClick={this.decrement} hide={this.state.page === 0}>Back</Styled.Button>
                    <Styled.Button cta onClick={this.increment}>Next</Styled.Button>
                </Styled.Controls>
            </Styled.Form>
        )
    }
}

export default InviteForm