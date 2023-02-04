import styled from 'styled-components';

export const InputWrapper = styled.label`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 40px;
    padding: 15px 25px;
    border-radius: var(--radius);
    width: 100%;
    height: 50px;
    background-color: var(--color-ui);
    box-shadow: var(--shadow);

    @media screen and (min-width: 767px) {
        margin: 0;
        max-width: 400px;
    }
`;