import { object, string, ref, Schema } from 'yup';
import { signUpUser, signInUser } from '../../redux-toolkit/asyncMethods';
import { Dispatch } from 'redux';
import { FormikValues, FormikHelpers } from 'formik';
import { NavigateFunction } from 'react-router-dom';
import { urls } from '../../utils/urls';
import { AnyAction } from '@reduxjs/toolkit';

const confirmPasswordValidation = string()
  .oneOf([ref('password')], 'Passwords must match')
  .required('Please confirm your password');

const emailFieldValidation = string()
  .required('Please provide an email address')
  .email('Please provide a valid email address');

const nameFieldValidation = string().required('Please provide a name');
const passwordFieldValidation = string().required('Please provide a password');

const validationSchema = (isSignIn: boolean): Schema<FormikValues> =>
  object({
    ...(!isSignIn && { name: nameFieldValidation }),
    email: emailFieldValidation,
    password: passwordFieldValidation,
    ...(!isSignIn && { confirmPassword: confirmPasswordValidation })
  });

const signInSuccess = (
  dispatch: Dispatch,
  values: FormikValues,
  navigate: NavigateFunction
) => {
  console.log('sign in form handler');
  const signInParams = { ...urls.signin(navigate), postBody: values };
  dispatch(signInUser(signInParams)as unknown as AnyAction);
};

const signUpSuccess = (
  dispatch: Dispatch,
  values: FormikValues,
  navigate: NavigateFunction
) => {
  const signUpParams = { ...urls.signup(navigate), postBody: values };
  dispatch(signUpUser(signUpParams)as unknown as AnyAction);
};

const submitHandler = (
  dispatch: Dispatch,
  isSignIn: boolean,
  navigate: NavigateFunction
) => (values: FormikValues, onSubmitParams: FormikHelpers<FormikValues>) => {
  console.log('submit handler');
  if (isSignIn) {
    signInSuccess(dispatch, values, navigate);
  }
  if (!isSignIn) {
    signUpSuccess(dispatch, values, navigate);
  }
  onSubmitParams.setSubmitting(true);
  onSubmitParams.resetForm();
};

const formParams = (
  isSignIn: boolean,
  dispatch: Dispatch,
  navigate: NavigateFunction,
  formData: FormikValues
) => ({
  initialValues: formData,
  validationSchema: validationSchema(isSignIn),
  onSubmit: submitHandler(dispatch, isSignIn, navigate)
});

export default formParams;
