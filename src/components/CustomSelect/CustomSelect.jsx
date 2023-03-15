import styled from 'styled-components';
import Select from 'react-select';

const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            padding: '9px 9px',
            border: 'none',
            borderRadius: 'var(--radius)',
            height: '50px',
            color: 'var(--color-text)',
            backgroundColor: 'var(--color-ui)',
            boxShadow: 'var(--shadow)',
            cursor: 'pointer',
        }),
        option: (provided, state) => ({
            ...provided,
            color: 'var(--color-text)',
            backgroundColor: state.isSelected || state.isFocused ? 'var(--color-bg)' : 'var(--color-ui)',
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

export default CustomSelect;
