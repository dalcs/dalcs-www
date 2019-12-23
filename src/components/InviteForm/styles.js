import styled from 'styled-components';

const getPage = page => {
    if (!page || page < 0 || !Number.isInteger(page)) return "0"
    return `${page * -100}%`
}

const getHeight = page => {
    switch (page) {
        case 0:
            return "200px";
        case 1:
            return "350px";
        case 2:
            return "200px";
        default:
            return "300px";
    }
}

export const Controls = styled.div`
    position: absolute;
    bottom: 20px;
    width: 100%;
`;
export const Button = styled.button`
    opacity: ${props => props.hidden ? '0' : '1'};
    transition: 0.1s ease;
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
    padding-bottom: 1.5rem;
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

export const Pages = styled.div`
    display: flex;
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