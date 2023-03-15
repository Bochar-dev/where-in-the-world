import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCountries } from '../../../../store/countries/selectors';
import CountriesItem from '../CountriesItem/CountriesItem';
import { fetchCountriesAction } from '../../../../store/apiActions';
import { List } from './styles';

const CountriesList = () => {
    const countries = useSelector(getCountries);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountriesAction());
    }, [dispatch]);

    return (
        <List>
            {countries.map((country) => (
                <CountriesItem key={country.name} country={country} />
            ))}
        </List>
    );
};

export default CountriesList;
