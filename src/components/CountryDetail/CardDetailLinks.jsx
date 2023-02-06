import styled from 'styled-components';

export const CardDetailLinks = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;

    @media screen and (min-width: 767px) {
        margin: 0 0 0 10px;
        width: calc(100% - 150px);
    }
`;
