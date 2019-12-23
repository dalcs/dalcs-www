import React from 'react';

import * as Styled from '../styles';

class Github extends React.Component {
    componentDidMount() {
        const height = this.component.clientHeight;
        this.props.reportHeight(height);
    }
  
    render() {
        return (
            <Styled.Step ref={(component) => { this.component = component }}>
                <Styled.Label>
                    Connect github
                    <button>Hi</button>
                </Styled.Label>
            </Styled.Step>
        )
    }
  }

export default Github