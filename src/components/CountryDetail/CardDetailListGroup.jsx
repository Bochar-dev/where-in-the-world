import styled from 'styled-components';

export const CardDetailListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0 0 30px 0;

    @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (min-width: 767px) {
        margin: 0 0 50px 0;
    }
`;
