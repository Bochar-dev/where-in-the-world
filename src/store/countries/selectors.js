import { NameSpace } from '../../const';

export const getCountries = (state) => state[NameSpace.Countries].countries;
export const getFilteredCountries = (state) => state[NameSpace.Countries].filteredCountries;
export const getCountryDetail = (state) => state[NameSpace.Countries].countryDetail;
export const getStatus = (state) => state[NameSpace.Countries].status;