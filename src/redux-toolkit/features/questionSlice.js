import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosRequestHandler from '../../api'
import initialState from '../initialState'
import { createExtraReducer } from '../createExtraReducer';
import questionReducers from '../reducers/questionReducers';

export const getAllSubjects = createAsyncThunk('questions/allSubjects', axiosRequestHandler);
export const getQuestions = createAsyncThunk('questions/getQuestions', axiosRequestHandler);
export const getYearsForSubject = createAsyncThunk('questions/getYears', axiosRequestHandler);

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        selectSubject: questionReducers.selectSubject,
        selectYear: questionReducers.selectYear
    },
    extraReducers: (builder) => {
        createExtraReducer(builder, getAllSubjects, 'allSubjects');
        createExtraReducer(builder, getQuestions, 'questions');
        createExtraReducer(builder, getYearsForSubject, 'years');
    },
})

export const { selectSubject, selectYear } = questionSlice.actions;

export default questionSlice.reducer