import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFilteredCountries } from '../../../../store/countries/countriesSlice';
import { useDebounce } from '../../../../hooks/useDebounce';
import { DEBOUNCE_TIMEOUT_MS } from '../../../../const';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';
import Search from '../../../../components/Search/Search';
import { Wrapper } from './styles';
import { options } from './constants/options';

const Controls = () => {
    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    const dispatch = useDispatch();
    const debouncedSearchValue = useDebounce(search, DEBOUNCE_TIMEOUT_MS);

    useEffect(() => {
        const searchVal = debouncedSearchValue;
        const regionVal = region ? region.value : '';

        dispatch(setFilteredCountries({searchVal, regionVal}));
    }, [debouncedSearchValue, search, region, dispatch]);

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect
                options={options}
                placeholder="Filter by Region"
                isClearable
                isSearchable={false}
                value={region}
                onChange={setRegion}
            />
        </Wrapper>
    );
};

export default Controls;
