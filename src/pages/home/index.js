import React from 'react';

import InviteForm from 'components/InviteForm';
import Page from 'components/Page';

import * as Styled from './styles';

export default () => (
    <Page>
      <Styled.HeaderContainer>
        <Styled.Header>
            <Styled.Logo src="logo.svg" />
            <Styled.Title>Dalhousie Computer Science</Styled.Title>
            <Styled.Tagline>
                Become a part of the unofficial dalhousie computer science
                github organization
            </Styled.Tagline>
        </Styled.Header>
      </Styled.HeaderContainer>
      <InviteForm />
    </Page>
)