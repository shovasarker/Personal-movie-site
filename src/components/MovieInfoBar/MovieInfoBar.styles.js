import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    min-height: 100px;
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    .column {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--medGrey);
        padding: 10px;
        border-radius: 20px;
        flex: 1;

        :not(:last-child) {
            margin-right: 40px;
        }
        @media screen and (max-width: 768px) {
            margin-top: 20px;
            :not(:last-child) {
                margin-right: 0;
            }
            :last-child {
                margin-bottom: 20px;
            }
        }

    }


    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

`;