import styled from 'styled-components';

export const Wrapper = styled.li`
    overflow: hidden;
    border-radius: var(--radius);
    background-color: var(--color-ui);
    box-shadow: var(--shadow);
`;

export const Imgage = styled.img`
    display: block;
    aspect-ratio: 16 / 9;
    width: 100%;
    object-fit: cover;
    object-position: center center;
`;

export const Content = styled.div`
    padding: 20px 15px;
`;

export const Title = styled.h2`
    margin: 0 0 20px 0;
    font-size: var(--fs-lg);
`;

export const ContentList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

export const ContentItem = styled.li`
    margin: 0 0 15px 0;

    &:last-child {
        margin: 0;
    }
`;
