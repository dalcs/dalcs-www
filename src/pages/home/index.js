import React from 'react';

import InviteForm from 'components/InviteForm';
import Sky from 'react-sky';

import * as Styled from './styles';

export default () => (
    <Styled.Homepage>
        <Sky
          images={{
            0: "background/bigblue.svg",
            1: "background/giantoutline.svg",
            2: "background/medoutline.svg",
            3: "background/smallblue.svg",
            4: "background/smalloutline.svg",
          }}
          how={6}
          time={40}
          size={'400px'}
        />
      <div>
        <Styled.HeaderContainer>
          <Styled.Header>
              <Styled.Logo src="logo.svg" />
              <Styled.Title>Dalhousie Computer Science</Styled.Title>
              <Styled.Tagline>
                  Become a part of the unofficial dalhousie computer science
                  Github organization
              </Styled.Tagline>
          </Styled.Header>
        </Styled.HeaderContainer>
        <InviteForm />
      </div>
    </Styled.Homepage>
)