import { ChartData } from 'chart.js';
import { UserHistory } from './stateTypes';
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
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

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
  onSubmit: (values: FormikValues, onSubmitParams: FormikHelpers<FormikValues>) => void;
};
