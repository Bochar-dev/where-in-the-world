import styled from 'styled-components';

export const List = styled.ul`
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(4, 1fr);
    margin: 0;
    padding: 0;
    list-style-type: none;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 575px) {
        grid-template-columns: 1fr;
    }
`;
