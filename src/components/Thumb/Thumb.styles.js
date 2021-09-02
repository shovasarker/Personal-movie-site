import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: ${({clickable}) => clickable ? `20px` : `20px 0 0 20px`};
    cursor: ${({clickable}) => clickable ? `pointer` : `initial`};
    box-shadow: 5px 12px 12px 0 rgba(0, 0, 0, 0.25);
    animation: animateThumb 0.5s;

    :hover {
        transform: ${({clickable}) => clickable ? `scale(1.05)` : `none`};
        opacity: ${({clickable}) => clickable ? `0.8` : `1`};
    }

    @keyframes animateThumb{
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @media screen and (max-width: 768px) {
        border-radius: ${({clickable}) => clickable ? `20px` : `20px 20px 0 0`};
    }
`;