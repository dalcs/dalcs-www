import styled from 'styled-components';

import { TransitionGroup } from 'react-transition-group';

export const Controls = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 3rem;
    width: 100%;
    margin-bottom: 0.1rem;
`;

export const Button = styled.button`
  position: relative;
  z-index: 1;
  opacity: ${props => props.hide ? '0' : '1'};
  overflow: hidden;
  transition: 0.1s ease;
  background-color: ${props => props.cta ? '#498AFF' : 'inherit'};
  color: ${props => props.cta ? 'white' : '#2B2B2B'};
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
  padding-left: ${props => props.cta ? '1rem' : '0'};
  transform: ${props => props.big ? 'scale(1.1)' : 'scale(1)'};
  cursor: pointer;
  border: none;
  outline: none;

  &:before {
    display: ${props => props.cta ? 'block' : 'none'};
    content: "";
    position: absolute;
    background: ${props => !props.disabled ? '#2B2B2B' : '#FF4949'};
    bottom: 0;
    left: 0;
    transition: 0.2s ease;
    right: 0;
    top: 100%;
    z-index: -1;
  }
  
  &:hover:before {
    top: 0;
  }
`;

export const Title = styled.div`
    background-color: #2B2B2B;
    padding: 1rem 0;
    color: white;
`;

export const Indicator = styled.div`
  margin-bottom: 0.85rem;
`;

export const Dot = styled.div`
  height: 6px;
  width: 6px;
  margin: 0 3px;
  background-color: ${props => props.selected ? '#498AFF' : '#ddd'};
  border-radius: 50%;
  display: inline-block;
`;

export const Form = styled.div`
    width: 400px;
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    transition: 1.4s ease;
    position: relative;

    &:hover {
      box-shadow: 0 6px 28px rgba(0,0,0,0.1);
    }
`;

export const Step = styled.div`
    box-sizing: border-box;
    padding-top: 2rem;
    padding-bottom: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
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
    margin-top: 8px;
    color: #2B2B2B;

    &:focus {
        outline: none;
        border: 1px solid #AEAEAE;
        box-shadow: 0 0 0 2px rgba(0,0,0,0.05);
    }
`;