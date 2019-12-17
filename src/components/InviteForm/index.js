import React from 'react';

import * as Styled from './styles';

export default () => (
    <Styled.Form>
        <Styled.Title>Join @dalcs on github</Styled.Title>
        <Styled.Content>
            <Styled.Label>
                Enter your email:
                <Styled.Input type="text" placeholder="sarah@dal.ca" />
            </Styled.Label>
        </Styled.Content>
    </Styled.Form>
)