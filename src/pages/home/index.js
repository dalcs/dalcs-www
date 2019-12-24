import React from 'react';

import InviteForm from 'components/InviteForm';

import * as Styled from './styles';

export default () => (
    <Styled.Homepage>
      <div>
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
      </div>
    </Styled.Homepage>
)