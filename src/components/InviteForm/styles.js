import styled from 'styled-components';

import { TransitionGroup } from 'react-transition-group';

export const Controls = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    bottom: 2rem;
    box-sizing: border-box;
    padding: 0 3rem;
    width: 100%;
`;
export const Button = styled.button`
  opacity: ${props => props.hide ? '0' : '1'};
  transition: 0.1s ease;

  background-color: ${props => props.cta ? '#5E71FB' : 'inherit'};
  color: ${props => props.cta ? 'white' : '#2B2B2B'};
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
  padding-left: ${props => props.cta ? '1rem' : '0'};
  cursor: pointer;
  border: none;
  outline: none;
`;

export const Title = styled.div`
    background-color: #2B2B2B;
    padding: 1rem 0;
    color: white;
`;

export const Form = styled.div`
    width: 400px;
    background-color: white;
    border-radius: 8px;
    padding-bottom: 3.5rem;
    overflow: hidden;
    transition: 1.4s ease;
    position: relative;
`;

export const Step = styled.div`
    box-sizing: border-box;
    padding: 2rem 3rem;
    min-width: 100%;
`;

export const DynamicHeight = styled.div`
    height: ${props => props.height}px;
    transition: 0.4s ease;
`;

export const Pages = styled(TransitionGroup)`
    display: flex;

    & > div {
      width: 100%;
    }

    .step-enter {
      opacity: 0;
    }
    .step-enter-active {
      opacity: 1;
      transition: opacity 200ms;
    }
    .step-exit {
      opacity: 1;
    }
    .step-exit-active {
      opacity: 0;
      transition: opacity 200ms;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    font-size: 13px;
    font-weight: 500;
    width: 100%;
`;

export const Input = styled.input`
    padding: 0.875rem;
    border: 1px solid #CCCCCC;
    font-size: 18px;
    border-radius: 5px;
    margin-top: 5px;

    &:focus {
        outline: none;
        border: 1px solid #AEAEAE;
        box-shadow: 0 0 0 2px rgba(0,0,0,0.05);
    }
`;