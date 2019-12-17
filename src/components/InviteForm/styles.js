import styled from 'styled-components';

export const Title = styled.div`
    background-color: #2B2B2B;
    padding: 1rem 0;
    color: white;
`;

export const Form = styled.div`
    width: 470px;
    background-color: white;
    min-height: 300px;
    border-radius: 8px;
    overflow: hidden;
`;

export const Content = styled.div`
    box-sizing: border-box;
    padding: 2rem 3rem;
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