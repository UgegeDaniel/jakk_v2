import { NavigateFunction } from 'react-router-dom';
import { Dispatch } from 'redux';
import { AnyAction } from '@reduxjs/toolkit';
import { FormikValues, FormikHelpers } from 'formik';
import { object, Schema } from 'yup';
import { signUpUser, signInUser } from '../../redux-toolkit/asyncMethods';
import { urls } from '../../utils/urls';
import validationRules from '../../utils/validation';
import { formParamsType, submitCallbackType } from '../../types/utilityTypes';

const getValidationSchema = (isSignIn: boolean): Schema<FormikValues> =>
  object(validationRules(isSignIn));

const signInSuccess: submitCallbackType = (dispatch, values, navigate) => {
  const signInParams = { ...urls.signin(navigate), postBody: values };
  dispatch(signInUser(signInParams) as unknown as AnyAction);
};

const signUpSuccess: submitCallbackType = (dispatch, values, navigate) => {
  const signUpParams = { ...urls.signup(navigate), postBody: values };
  dispatch(signUpUser(signUpParams) as unknown as AnyAction);
};

const submitHandler =
  (dispatch: Dispatch, isSignIn: boolean, navigate: NavigateFunction) =>
    (values: FormikValues, onSubmitParams: FormikHelpers<FormikValues>) => {
      if (isSignIn) {
        signInSuccess(dispatch, values, navigate);
      }
      if (!isSignIn) {
        signUpSuccess(dispatch, values, navigate);
      }
      onSubmitParams.setSubmitting(true);
      onSubmitParams.resetForm();
    };

const formParams: formParamsType = (isSignIn, dispatch, navigate, formData) => {
  const validationSchema = getValidationSchema(isSignIn);
  const onSubmit = submitHandler(dispatch, isSignIn, navigate);
  return {
    initialValues: formData,
    validationSchema,
    onSubmit,
  };
};

export default formParams;
