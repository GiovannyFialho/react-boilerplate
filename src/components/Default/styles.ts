import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 2rem;
`;

export const Title = styled.h2`
    font-size: 7rem;
    text-align: center;
    margin-bottom: 5rem;
    background: linear-gradient(to right, #51af57 1%, #68e170 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${media.lessThan("small")`
        font-size: 5rem;
    `}
    ${media.greaterThan("medium")`
        font-size: 15rem;
        margin-bottom: 10rem;
    `}
`;

export const Techs = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Icon = styled.div`
    width: 6rem;
    margin: 3rem;
    &::last-child {
        margin-right: 0;
    }
    ${media.lessThan("small")`
        width: 4rem;
        margin: 1rem;
    `}
    ${media.greaterThan("medium")`
        width: 7rem;
    `}
    svg {
        color: #68e170;
    }
`;
