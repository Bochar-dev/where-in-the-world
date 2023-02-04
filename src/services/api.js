import axios from 'axios';

const BACKEND_URL = 'https://restcountries.com/v2/';
const TIMEOUT = 1000;

export const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: TIMEOUT,
});