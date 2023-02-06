import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../services/api';

const EndPoint = {
    AllCounties: 'all?fields=name,capital,flags,population,region,alpha3Code',
    CountryByName: 'name/',
    CountryByCode: '/alpha?codes='
};

export const fetchCountriesAction = createAsyncThunk(
    'countries/fetchCountries',
    async (_arg, { rejectWithValue }) => {
        try {
            const { data } = await api.get(EndPoint.AllCounties);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchCountryDetailAction = createAsyncThunk(
    'countries/fetchCountryDetail',
    async (name, { rejectWithValue }) => {
        try {
            const { data } = await api.get(EndPoint.CountryByName + name);
            return data[0];
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);

export const fetchCountriesCodeAction = createAsyncThunk(
    'countries/fetchCountryCode',
    async (codes, { rejectWithValue }) => {
        try {
            const { data } = await api.get(EndPoint.CountryByCode + codes);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
