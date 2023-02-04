import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../const';
import { fetchCountriesAction, fetchCountryDetailAction } from '../apiActions';

const initialState = {
    countries: [],
    filteredCountries: [],
    countryDetail: null,
    status: null,
};

export const countriesSlice = createSlice({
    name: NameSpace.Countries,
    initialState,
    reducers: {
        setFilteredCountries: (state, { payload: { searchVal, regionVal } }) => {
            state.filteredCountries = state.countries;

            if (regionVal) {
                state.filteredCountries = state.filteredCountries.filter((country) => country.region.includes(regionVal));
            }

            if (searchVal) {
                state.filteredCountries = state.filteredCountries.filter((country) => country.name.toLowerCase().includes(searchVal.toLowerCase()));
            }
        }
    },
    extraReducers: {
        [fetchCountriesAction.pending]: (state) => {
            state.status = Status.Pending;
        },
        [fetchCountriesAction.fulfilled]: (state, action) => {
            state.status = Status.Fulfilled;
            state.countries = action.payload;
            state.filteredCountries = action.payload;
        },
        [fetchCountriesAction.rejected]: (state) => {
            state.status = Status.Rejected;
        },
        // [fetchCountryDetailAction.pending]: (state) => {
        //     state.status = Status.Pending;
        // },
        // [fetchCountryDetailAction.fulfilled]: (state, action) => {
        //     state.status = Status.Fulfilled;
        //     state.countryDetail = action.payload;
        // },
        // [fetchCountryDetailAction.rejected]: (state) => {
        //     state.status = Status.Rejected;
        // },
    }
});

export const { setFilteredCountries } = countriesSlice.actions;