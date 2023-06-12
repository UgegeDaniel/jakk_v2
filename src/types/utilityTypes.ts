import { ChartData } from 'chart.js';
import StateType, { QuestionType, UserHistory } from './stateTypes';
import { Dispatch } from 'redux';
import React, { MouseEventHandler } from 'react';
import { NavigateFunction } from 'react-router-dom';
import { FormikHelpers, FormikValues } from 'formik';
import { Schema } from 'yup';

export type chartDataFxnType = (userHistory: UserHistory[]) => ChartData;

export type formDataType = {
  formik: any;
  toggleIsSignIn: MouseEventHandler<HTMLSpanElement> | undefined;
  isSignIn: boolean;
  validated: boolean;
  isLoading: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export type formEventType = React.FormEvent<HTMLFormElement>;

export type handleSubmitFxnType = (
  event: React.FormEvent<HTMLFormElement>,
) => void;

export type submitCallbackType = (
  dispatch: Dispatch,
  values: FormikValues,
  navigate: NavigateFunction,
) => void;

export type formParamsType = (
  isSignIn: boolean,
  dispatch: Dispatch,
  navigate: NavigateFunction,
  formData: FormikValues,
) => {
  initialValues: FormikValues;
  validationSchema: Schema<FormikValues, any, any, ''>;
  onSubmit: (
    values: FormikValues,
    onSubmitParams: FormikHelpers<FormikValues>,
  ) => void;
};

export type sunmitHandlerType = (
  dispatch: Dispatch,
  isSignIn: boolean,
  navigate: NavigateFunction,
) => (
  values: FormikValues,
  onSubmitParams: FormikHelpers<FormikValues>,
) => void;

export type mockStateType = Partial<StateType>;

export interface ScoreResponse {
  questions: QuestionType[];
  answered: number;
  correct: number;
  score: number;
}

export interface FulfilledAction<ThunkArg, PromiseResult> {
  type: string;
  payload: PromiseResult;
  meta: {
    requestId: string;
    arg: ThunkArg;
  };
}
