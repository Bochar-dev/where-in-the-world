import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { countriesSlice } from './countries/countriesSlice';

export const rootReducer = combineReducers({
    [NameSpace.Countries]: countriesSlice.reducer,
});