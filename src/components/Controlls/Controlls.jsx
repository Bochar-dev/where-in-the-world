import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Search from '../Search/Search';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import { setFilteredCountries } from '../../store/countries/countriesSlice';
import { ControllsWrapper } from './ControllsWrapper';

const options = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
];

const Controlls = () => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        const searchVal = search;
        const regionVal = region ? region.value : '';

        dispatch(setFilteredCountries({searchVal, regionVal}));
    }, [search, region, dispatch]);

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