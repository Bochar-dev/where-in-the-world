import styled from 'styled-components';

export const ControllsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 20px;

    @media screen and (min-width: 767px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
    }
`;
