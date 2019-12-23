import React from 'react';
import ReactDOM from 'react-dom';


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
            component: <Email reportHeight={this.reportHeight} />
        },
        {
            title: "Enter the code sent to mack@dal.ca",
            component: <Code reportHeight={this.reportHeight} />
        },
        {
          title: "Connect your Github",
          component: <Github reportHeight={this.reportHeight} />
        },
        {
          title: "Invitation sent to @mack",
          component: <Success reportHeight={this.reportHeight} />
        }
    ]

    render() {
        return (
            <Styled.Form page={this.state.page}>
                <Styled.Title>{this.pages[this.state.page].title}</Styled.Title>
                <Styled.DynamicHeight height={this.state.innerHeight}>
                    <Styled.Pages page={this.state.page}>
                        {this.pages[this.state.page].component}
                    </Styled.Pages>
                </Styled.DynamicHeight>
                <Styled.Controls>
                    <Styled.Button onClick={this.decrement} hidden={this.state.page === 0}>Prev</Styled.Button>
                    <Styled.Button onClick={this.increment}>Next</Styled.Button>
                </Styled.Controls>
            </Styled.Form>
        )
    }
}

export default InviteForm