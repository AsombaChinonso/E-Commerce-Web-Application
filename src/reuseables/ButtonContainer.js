import styled from "styled-components"

const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.2rem;
    background: transparent;
    border: 0.1rem solid var(--lightBlue);
    border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border-radius: 0.5rem;
    padding:0.2rem, 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover{
        background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color: ${props => props.cart ? "var(--mainDark)" : "var(--mainBlue)"};
    }
    &:focus{
        outline:none;
    }
`;

 export default ButtonContainer;