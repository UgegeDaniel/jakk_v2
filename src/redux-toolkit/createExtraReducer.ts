/* eslint-disable @typescript-eslint/no-explicit-any */
import StateType, {User} from '../types/stateTypes';
import { ActionReducerMapBuilder, AsyncThunk } from '@reduxjs/toolkit';

const handleUserSuccess = (state: StateType, responseData: User) => {
  localStorage.setItem('user', JSON.stringify(responseData));
  state.notifications.push({ style: 'success', msg: 'Sign in successfully' });
};

const handleQuestionsSuccess =(state: StateType) => {
  state.timer = true;
  state.testSubmitted = false;
};

const handleSaveScoreSuccess = (state: StateType) => {
  state.testSubmitted = true;
  state.timer = false;
  state.isModal = true;
};


const onError = (
  state: StateType, 
  responseError: string[] | string | undefined 
) => {
  const hasErrorMsg = state.notifications.find((notification) => notification.msg === responseError);
  const errorIsArray = Array.isArray(responseError);
  if (errorIsArray) {
    state.notifications = responseError.map((msg) => ({ style: 'danger', msg }));
  }

  if (!errorIsArray && !hasErrorMsg) {
    state.notifications = [{ style: 'danger', msg: responseError }];
  }
  state.showNotification = true;
};

interface FulfilledAction<ThunkArg, PromiseResult> {
    type: string
    payload: PromiseResult
    meta: {
      requestId: string
      arg: ThunkArg
    }
  }

export const createExtraReducer = (
  builder: ActionReducerMapBuilder<StateType>, 
  asyncMethod: AsyncThunk<unknown, void, any>, 
  stateToUpdate: string
) => {
  builder.addCase(asyncMethod.pending, (state: { isLoading: boolean; }) => {
    state.isLoading = true;
  });

  builder.addCase(asyncMethod.fulfilled, (state: StateType, action: FulfilledAction<any, any> ) => {
    const { responseData, responseError } = action.payload;
    state.isLoading = false;
    if(responseData){
      if(stateToUpdate === 'user') handleUserSuccess(state, responseData);
      if(stateToUpdate === 'questions') handleQuestionsSuccess(state);
      if(stateToUpdate === 'newScore') handleSaveScoreSuccess(state);
      state[stateToUpdate as keyof StateType] = responseData as never;
    }
    if (responseError) onError(state, responseError);
  });
    
  builder.addCase(asyncMethod.rejected, (state: StateType, action: { payload: any; }) => {
    state.isLoading = false;
    state.notifications = [...state.notifications, { style: 'danger', msg: action.payload }];
    state.showNotification = true;
  });
};