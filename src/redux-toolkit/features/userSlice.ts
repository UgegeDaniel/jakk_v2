import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'
import userReducers from '../reducers/userReducers';

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateFormErrors: userReducers.updateFormErrors,
        signOut: userReducers.signOut,
        setShowNotification: userReducers.setShowNotification,
        successMsg: userReducers.successMsg,
        setIsSignIn: userReducers.setIsSignIn
    }
})

export const {
    updateFormErrors, signOut,
    setShowNotification, successMsg,
    setIsSignIn
} = userSlice.actions;

export default userSlice.reducer