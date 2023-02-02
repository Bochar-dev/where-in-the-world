import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided, state) => ({
            ...provided,
            padding: '9px 9px',
            border: 'none',
            borderRadius: 'var(--radius)',
            height: '50px',
            color: 'var(--color-text)',
            backgroundColor: 'var(--color-ui)',
            boxShadow: 'var(--shadow)',
        }),
        option: (provided, state) => ({
            ...provided,
            color: 'var(--color-text)',
            backgroundColor: state.isSelected ? 'var(--color-bg)' : 'var(--color-ui)',
            cursor: 'pointer',
        })
    },
})`
    border-radius: var(--radius);
    width: 100%;
    max-width: 250px;
    font-family: var(--family);

    & > * {
        box-shadow: var(--shadow);
    }

    & * {
        color: var(--text)!important;
    }

    & > div[id] {
        background-color: var(--color-ui);
    }
`;