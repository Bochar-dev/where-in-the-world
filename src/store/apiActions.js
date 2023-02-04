import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../services/api';

export const fetchCountriesAction = createAsyncThunk(
    'countries/fetchCountries',
    async (_arg) => {
        const { data } = await api.get('all?fields=name,capital,flags,population,region,alpha3Code');
        return data;
    }
);

export const fetchCountryDetailAction = createAsyncThunk(
    'countries/fetchCountryDetail',
    async (name) => {
        const { data } = await api.get('name/' + name.toLowerCase());

        return data;
    }
);