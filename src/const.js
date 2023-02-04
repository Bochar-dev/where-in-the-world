const BACKEND_URL = 'https://restcountries.com/v2/';

export const PREV_PAGE = -1;

export const ALL_COUNTRIES = BACKEND_URL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = (name) => BACKEND_URL + 'name/' + name;

export const filterByCode = (codes) => BACKEND_URL + 'alpha?codes=' + codes.join(',');

export const ThemeMode = {
    Light: 'light',
    Dark: 'dark'
};

export const AppRoute = {
    Home: '/',
    CardDetail: '/country/:name',
    NotFound: '*',
};

export const NameSpace = {
    Countries: 'countries'
};

export const Status = {
    Pending: 'pending',
    Fulfilled: 'fulfilled',
    Rejected: 'rejected'
};