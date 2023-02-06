import styled from 'styled-components';

export const CardDetailImage = styled.img`
    display: block;
    border-radius: var(--radius);
    aspect-ratio: 16/9;
    width: 100%;
    object-fit: cover;

    @media screen and (min-width: 1024px) {
        width: 45%;
    }
`;
