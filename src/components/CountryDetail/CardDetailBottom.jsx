import styled from 'styled-components';

export const CardDetailBottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (min-width: 767px) {
        flex-direction: row;
        align-items: center;
        gap: 0;
    }
`;
