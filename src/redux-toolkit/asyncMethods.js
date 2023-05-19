// ASYNCHRONOUS REDUCERS
import { axiosGetRequestHandler, axiosPostRequestHandler } from '../api'
import { createAsyncThunk } from '@reduxjs/toolkit'

//USER ASYNC METHODS
export const signInUser = createAsyncThunk('user/signIn', axiosPostRequestHandler);
export const signUpUser = createAsyncThunk('user/signUp', axiosPostRequestHandler);
export const getUserHistory = createAsyncThunk('user/getHistory', axiosGetRequestHandler);

//QUESTIONS ASYNC METTHODS
export const getAllSubjects = createAsyncThunk('questions/allSubjects', axiosGetRequestHandler);
export const getQuestions = createAsyncThunk('questions/getQuestions', axiosGetRequestHandler);
export const getYearsForSubject = createAsyncThunk('questions/getYears', axiosGetRequestHandler);
export const saveUserScore = createAsyncThunk('questions/saveScore', axiosPostRequestHandler);