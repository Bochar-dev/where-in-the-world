import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, Status } from '../../const';
import { fetchCountriesAction, fetchCountryDetailAction, fetchCountriesCodeAction } from '../apiActions';

const initialState = {
    countries: [],
    filteredCountries: [],
    borderCountries: [],
    countryDetail: null,
    status: null,
    errorMessage: null,
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
            state.filteredCountries = action.payload.slice(0, state.countiesCount);

            console.log(state.countries);
        },
        [fetchCountriesAction.rejected]: (state, action) => {
            state.status = Status.Rejected;
            state.errorMessage = action.payload;
        },
        [fetchCountryDetailAction.pending]: (state) => {
            state.status = Status.Pending;
        },
        [fetchCountryDetailAction.fulfilled]: (state, action) => {
            state.status = Status.Fulfilled;
            state.countryDetail = action.payload;
        },
        [fetchCountryDetailAction.rejected]: (state, action) => {
            state.status = Status.Rejected;
            state.errorMessage = action.payload;
        },
        [fetchCountriesCodeAction.pending]: (state) => {
            state.status = Status.Pending;
        },
        [fetchCountriesCodeAction.fulfilled]: (state, action) => {
            state.status = Status.Fulfilled;
            state.borderCountries = action.payload;
        },
        [fetchCountriesCodeAction.rejected]: (state, action) => {
            state.status = Status.Rejected;
            state.errorMessage = action.payload;
        },
    }
});

export const { setFilteredCountries } = countriesSlice.actions;
