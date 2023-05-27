import { string, ref } from 'yup';

const confirmPasswordValidation = string()
  .oneOf([ref('password')], 'Passwords must match')
  .required('Please confirm your password');

const emailFieldValidation = string()
  .required('Please provide an email address')
  .email('Please provide a valid email address');

const nameFieldValidation = string().min(5, 'Error').required('Please provide a name');
const passwordFieldValidation = string().required('Please provide a password');

const validationRules = (isSignIn: boolean) => (
  {
    ...(!isSignIn && { name: nameFieldValidation }),
    email: emailFieldValidation,
    password: passwordFieldValidation,
    ...(!isSignIn && { confirmPassword: confirmPasswordValidation })
  }
);

export default validationRules;