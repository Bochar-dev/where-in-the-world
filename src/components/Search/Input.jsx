import styled from 'styled-components';

export const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...'
})`
    border: none;
    outline: none;
    padding: 0;
    width: 100%;
    background-color: transparent;
    color: inherit;
`;
