import styled from 'styled-components';

export const ButtonBackElement = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    border: none;
    border-radius: var(--radius);
    font-family: var(--family);
    font-weight: var(--fw-normal);
    font-size: var(--fs-md);
    color: var(--color-text);
    background-color: var(--color-ui);
    box-shadow: var(--shadow);
    cursor: pointer;
`;