import StateType, { User } from '../../types/stateTypes';
import { ScoreResponse } from '../../types/utilityTypes';

export const handleUserSuccess = (state: StateType, responseData: User) => {
  localStorage.setItem('user', JSON.stringify(responseData));
  state.notifications.push({ style: 'success', msg: 'Sign in successfully' });
};

export const handleQuestionsSuccess = (state: StateType) => {
  state.timer = true;
  state.isModal = false;
  state.testSubmitted = false;
};

export const handleSaveScoreSuccess = (
  state: StateType,
  responseData: ScoreResponse,
) => {
  state.testSubmitted = true;
  state.timer = false;
  state.isModal = true;
  state.questions = responseData.questions;
  state.result = {
    attempted: responseData.answered,
    correct: responseData.correct,
    score: responseData.score,
  };
};

export const handleVerificationNotification = (state: StateType) => {
  state.showNotification = true;
  state.notifications = [
    { msg: 'Verification Email Sent Successfuly', style: 'success' },
  ];
};

export const onError = (
  state: StateType,
  responseError: string[] | string | undefined,
) => {
  const hasErrorMsg = state.notifications.find(
    (notification) => notification.msg === responseError,
  );
  const errorIsArray = Array.isArray(responseError);
  if (errorIsArray) {
    state.notifications = responseError.map((msg) => ({
      style: 'danger',
      msg,
    }));
  }

  if (!errorIsArray && !hasErrorMsg) {
    state.notifications = [{ style: 'danger', msg: responseError }];
  }
  state.showNotification = true;
};

export const handleDataSuccess = (
  state: StateType,
  responseData: ScoreResponse,
  stateToUpdate: string,
  extraActions?: string,
) => {
  if (extraActions === 'verifyEmail') handleVerificationNotification(state);
  if (stateToUpdate === 'questions') handleQuestionsSuccess(state);
  if (stateToUpdate === 'newScore') handleSaveScoreSuccess(state, responseData);
};
