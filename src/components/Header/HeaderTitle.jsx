import styled from 'styled-components';

export const HeaderTitle = styled.a.attrs({
    href: '/',
})`
    font-weight: var(--fw-bold);
    font-size: var(--fs-lg);
    color: var(--color-text);
    text-decoration: none;
`;