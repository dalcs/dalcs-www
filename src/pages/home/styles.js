import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 400;
  font-size: 27px;
  color: white;
  text-align: center;
  margin-bottom: 0;
`;

export const Tagline = styled.p`
  font-size: 16px;
  color: white;
  opacity: 0.6;
  max-width: 300px;
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
`;

export const Logo = styled.img`
  width: 240px;
  font-size: 16px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Homepage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;