import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;
`;


export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);

    img {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
    }

    input {
        font-size: var(--fontBig);
        position: absolute;
        left: 0;
        padding-left: 60px;
        background: transparent;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        border: none;
        outline: none;
        color: var(--white);
        :focus {
            outline: none;
            border: 2px solid var(--lightGrey);
        }

        @media screen and (max-width: 768px){
            font-size: var(--fontMed);
        }

    }

`;