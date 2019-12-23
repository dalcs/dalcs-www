import React from 'react';

import * as Styled from '../styles';

class Success extends React.Component {
    componentDidMount() {
        const height = this.component.clientHeight;
        this.props.reportHeight(height);
    }
  
    render() {
        return (
            <Styled.Step ref={(component) => { this.component = component }}>
                Success!
            </Styled.Step>
        )
    }
  }

export default Success