import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BorderLink = styled(Link)`
    border-radius: var(--radius);
    padding: 5px 10px;
    color: var(--color-text);
    text-decoration: none;
    background-color: var(--color-ui);
`;
