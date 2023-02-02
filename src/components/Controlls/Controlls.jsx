import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Search from '../Search/Search';
import { CustomSelect } from '../CustomSelect/CustomSelect';

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

const ControllsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (min-width: 767px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
`;

const Controlls = () => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    return (
        <ControllsWrapper>
            <Search search={search} setSearch={setSearch}/>
            <CustomSelect
                options={options}
                placeholder="Filter by Region"
                isClearable
                isSearchable={false}
                value={region}
                onChange={setRegion}
            />
        </ControllsWrapper>
    );
};

export default Controlls;