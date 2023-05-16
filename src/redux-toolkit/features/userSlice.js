import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosRequestHandler from '../../api'
import initialState from '../initialState'
import { createExtraReducer } from '../createExtraReducer';
import userReducers from '../reducers/userReducers';

export const signInUser = createAsyncThunk('user/signIn', axiosRequestHandler);
export const signUpUser = createAsyncThunk('user/signUp', axiosRequestHandler);
export const getUserHistory = createAsyncThunk('user/getHistory', axiosRequestHandler);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateFormErrors: userReducers.updateFormErrors,
        signOut: userReducers.signOut,
        setShowNotification: userReducers.setShowNotification,
        successMsg: userReducers.successMsg,
        setIsSignIn: userReducers.setIsSignIn
    },
    extraReducers: (builder) => {
        createExtraReducer(builder, signInUser, 'user');
        createExtraReducer(builder, signUpUser, 'user');
        createExtraReducer(builder, getUserHistory, 'userHistory');
    },
})

export const {
    updateFormErrors,
    signOut,
    setShowNotification,
    successMsg,
    setIsSignIn
} = userSlice.actions;

export default userSlice.reducer