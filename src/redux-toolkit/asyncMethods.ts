import { RequestParams, SuccessResponse, FailureResponse, axiosGetRequestHandler, axiosPostRequestHandler } from '../api';
import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import StateType from '../types/stateTypes';

// Define the AsyncThunkAction type
type AsyncThunkAction<R, S = StateType> = AsyncThunk<R, RequestParams, { state: S }>;
type AsyncMethodType = AsyncThunkAction<SuccessResponse<unknown> | FailureResponse>
// USER ASYNC METHODS
export const signInUser:  AsyncMethodType= createAsyncThunk('user/signIn', axiosPostRequestHandler);
export const signUpUser: AsyncMethodType= createAsyncThunk('user/signUp', axiosPostRequestHandler);
export const getUserHistory: AsyncMethodType = createAsyncThunk('user/getHistory', axiosGetRequestHandler);
export const verifyEmail: AsyncMethodType = createAsyncThunk('user/verifyMail', axiosPostRequestHandler);

// QUESTIONS ASYNC METHODS
export const getAllSubjects: AsyncMethodType = createAsyncThunk('questions/allSubjects', axiosGetRequestHandler);
export const getQuestions: AsyncMethodType = createAsyncThunk('questions/getQuestions', axiosGetRequestHandler);
export const getYearsForSubject: AsyncMethodType = createAsyncThunk('questions/getYears', axiosGetRequestHandler);
export const saveUserScore: AsyncMethodType = createAsyncThunk('questions/saveScore', axiosPostRequestHandler);
