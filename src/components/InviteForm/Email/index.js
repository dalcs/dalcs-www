import React from 'react';

import * as Styled from '../styles';

class Email extends React.Component {
    componentDidMount() {
        const height = this.component.clientHeight;
        this.props.reportHeight(height);
    }
  
    render() {
        return (
            <Styled.Step ref={(component) => { this.component = component }}>
                <Styled.Label>
                    Enter your email:
                    <Styled.Input type="text" placeholder="sarah@dal.ca" />
                </Styled.Label>
            </Styled.Step>
        )
    }
  }

export default Email