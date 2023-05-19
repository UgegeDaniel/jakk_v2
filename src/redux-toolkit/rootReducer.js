import { createReducer } from '@reduxjs/toolkit'
import { createExtraReducer } from './createExtraReducer';

//ASYNC REDUCERS
import {
    signInUser, signUpUser, getUserHistory,
    getAllSubjects, getQuestions, getYearsForSubject,
    saveUserScore
} from './asyncMethods';

//SLICES
import initialState from './initialState'
import { userSlice } from './features/userSlice'
import { questionSlice } from './features/questionSlice'

export default createReducer(
    initialState,
    (builder) => {
        Object.keys(userSlice.actions).forEach((action) => {
            builder.addCase(userSlice.actions[action], userSlice.reducer);
        });
        Object.keys(questionSlice.actions).forEach((action) => {
            builder.addCase(questionSlice.actions[action], questionSlice.reducer);
        });
        createExtraReducer(builder, signInUser, 'user');
        createExtraReducer(builder, signUpUser, 'user');
        createExtraReducer(builder, getUserHistory, 'userHistory');
        createExtraReducer(builder, getAllSubjects, 'allSubjects');
        createExtraReducer(builder, getQuestions, 'questions');
        createExtraReducer(builder, getYearsForSubject, 'years');
        createExtraReducer(builder, saveUserScore, 'newScore');
    }
)