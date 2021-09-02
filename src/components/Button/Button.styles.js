import styled from "styled-components";


export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 999px;
    border: none;
    color: var(--white);
    font-size: var(--fontBig);
    margin: 20px auto;
    transition: all 0.3s ease-in-out;
    outline: none;
    cursor: pointer;

    :hover,
    :focus {
        opacity: 0.8;
    }
`;