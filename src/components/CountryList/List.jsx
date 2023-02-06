import styled from 'styled-components';

export const List = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;

    @media screen and (min-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 30px;
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 40px;
    }
`;
