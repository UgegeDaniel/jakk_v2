/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunk, createReducer } from '@reduxjs/toolkit';
import { createExtraReducer } from './createExtraReducer';

//ASYNC REDUCERS
import {
  signInUser,
  signUpUser,
  getUserHistory,
  getAllSubjects,
  getQuestions,
  getYearsForSubject,
  saveUserScore,
  verifyEmail,
  resendEmail,
} from './asyncMethods';

//SLICES
import initialState from './initialState';
import { userSlice } from './features/userSlice';
import { questionSlice } from './features/questionSlice';

export default createReducer(initialState, (builder) => {
  const userSliceActions = userSlice.actions as object;
  Object.keys(userSliceActions).forEach((action) => {
    builder.addCase(
      userSliceActions[action as keyof object],
      userSlice.reducer,
    );
  });
  const questionSliceActions = questionSlice.actions as object;
  Object.keys(questionSliceActions).forEach((action) => {
    builder.addCase(
      questionSliceActions[action as keyof object],
      questionSlice.reducer,
    );
  });

  createExtraReducer(
    builder,
    signInUser as unknown as AsyncThunk<unknown, void, any>,
    'user',
  );

  createExtraReducer(
    builder,
    signUpUser as unknown as AsyncThunk<unknown, void, any>,
    'user',
    'verifyEmail',
  );

  createExtraReducer(
    builder,
    verifyEmail as unknown as AsyncThunk<unknown, void, any>,
    'user',
  );

  createExtraReducer(
    builder,
    resendEmail as unknown as AsyncThunk<unknown, void, any>,
    'user',
    'verifyEmail',
  );

  createExtraReducer(
    builder,
    getUserHistory as unknown as AsyncThunk<unknown, void, any>,
    'userHistory',
  );
  createExtraReducer(
    builder,
    getAllSubjects as unknown as AsyncThunk<unknown, void, any>,
    'allSubjects',
  );
  createExtraReducer(
    builder,
    getQuestions as unknown as AsyncThunk<unknown, void, any>,
    'questions',
  );
  createExtraReducer(
    builder,
    getYearsForSubject as unknown as AsyncThunk<unknown, void, any>,
    'years',
  );
  createExtraReducer(
    builder,
    saveUserScore as unknown as AsyncThunk<unknown, void, any>,
    'newScore',
  );
});
