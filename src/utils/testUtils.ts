import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export default (stateNeeded: {}) => configureStore({
    reducer: createSlice({
        name: 'counter',
        initialState: stateNeeded,
        reducers: {},
    }).reducer,
});