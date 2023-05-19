import { object, string, ref } from 'yup';
import { signUpUser, signInUser } from '../../redux-toolkit/asyncMethods';
import { urls } from '../../utils';

const confirmPasswordValidation = string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required('Please confirm your password');

const emailFieldValidation = string()
    .required("Please provide an email address")
    .email("Please provide a valid email address");

const nameFieldValidation = string().required("Please provide a name");
const passwordFieldValidation = string().required("Please provide a password");

const validationSchema = (signIn) => object({
    ...(!signIn && { name: nameFieldValidation }),
    email: emailFieldValidation,
    password: passwordFieldValidation,
    ...(!signIn && { confirmPassword: confirmPasswordValidation })
})

const signInSuccess = (dispatch, values, navigate) => {
    console.log('sign in submit handler called');
    const signInParams = { ...urls.signin(navigate), postBody: values }
    dispatch(signInUser(signInParams))
}
const signUpSuccess = (dispatch, values, navigate) => {
    console.log('sign up submit handler called');
    const signUpParams = { ...urls.signup(navigate), postBody: values }
    dispatch(signUpUser(signUpParams))
}
const submitHandler = (dispatch, isSignIn, navigate) => (values, onSubmitParams) => {
    console.log('submit handler called');
    if (isSignIn) {
        console.log('submit handler called on sign in');
        signInSuccess(dispatch, values, navigate)
    }
    if (!isSignIn) {
        console.log('submit handler called on sign up');
        signUpSuccess(dispatch, values, navigate)
    }
    onSubmitParams.setIsSubmitting(true);
    onSubmitParams.resetForm();
}

const formParams = (isSignIn, dispatch, navigate, formData) => ({
    initialValues: formData,
    validationSchema: validationSchema(isSignIn),
    onSubmit: submitHandler(dispatch, isSignIn, navigate)
});

export default formParams;