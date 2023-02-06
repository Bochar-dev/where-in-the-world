import styled from 'styled-components';

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      justify-content: space-between;
    }
`;
