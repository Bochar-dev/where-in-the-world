import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardDetailLinksItem = styled(Link)`
    border-radius: var(--radius);
    padding: 5px 20px;
    color: var(--color-text);
    text-decoration: none;
    background-color: var(--color-ui);
    box-shadow: var(--shadow);
`;
