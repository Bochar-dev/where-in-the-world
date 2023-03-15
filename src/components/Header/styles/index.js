import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
    padding: 20px 0;
    background-color: var(--color-ui);
    box-shadow: var(--shadow);
`;

export const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled(Link)`
    font-weight: var(--fw-bold);
    font-size: var(--fs-lg);
    color: var(--color-text);
    text-decoration: none;
`;

export const ThemeSwitcher = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: capitalize;
    cursor: pointer;
`;

