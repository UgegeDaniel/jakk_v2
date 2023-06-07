/* eslint-disable @typescript-eslint/no-explicit-any */
import StateType from '../types/stateTypes';
import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';
import { FulfilledAction } from '../types/utilityTypes';
import {
  handleDataSuccess,
  handleUserSuccess,
  onError,
} from './extraReducers/extraReducers';

export const createExtraReducer = (
  builder: ActionReducerMapBuilder<StateType>,
  asyncMethod: AsyncThunk<unknown, void, any>,
  stateToUpdate: string,
  extraActions?: string,
) => {
  builder.addCase(asyncMethod.pending, (state: { isLoading: boolean }) => {
    state.isLoading = true;
  });

  builder.addCase(
    asyncMethod.fulfilled,
    (state: StateType, action: FulfilledAction<any, any>) => {
      const { responseData, responseError } = action.payload;
      state.isLoading = false;
      if (!responseError) {
        handleDataSuccess(state, responseData, stateToUpdate, extraActions);
      }
      if (responseData) {
        if (stateToUpdate === 'user') handleUserSuccess(state, responseData);
        state[stateToUpdate as keyof StateType] = responseData as never;
      }
      if (responseError) onError(state, responseError);
    },
  );

  builder.addCase(
    asyncMethod.rejected,
    (state: StateType, action: { payload: any }) => {
      state.isLoading = false;
      state.notifications = [
        ...state.notifications,
        { style: 'danger', msg: action.payload },
      ];
      state.showNotification = true;
    },
  );
};
