import { object, string } from 'yup';
import { signUpUser, signInUser } from '../../redux-toolkit/features/userSlice';

const initialValues = {
    name: '',
    email: '',
    password: '',
};

const validationSchema = (signIn) => object({
    name: signIn ? string() : string().required("Please provide a name"),
    email: string().required("Please provide an email address").email("Please provide a valid email address"),
    password: string().required("Please provide a password")
})
const signInSuccess = (dispatch, values, navigate) => {
    const signInParams = {endpoint: '/users/signin', postBody: values, extract: 'user', navigate}
    dispatch(signInUser(signInParams))
}
const signUpSuccess = (dispatch, values, navigate) => {
    const signUpParams = {endpoint: '/users/signup', postBody: values, extract: 'user', navigate}
    dispatch(signUpUser(signUpParams))
}
const submitHandler = (dispatch, isSignIn, navigate) => (values, onSubmitParams) => {
    isSignIn ? signInSuccess(dispatch, values, navigate) : signUpSuccess(dispatch, values, navigate)
    onSubmitParams.setIsSubmitting(true);
    onSubmitParams.resetForm();
}

const formParams = (isSignIn, dispatch, navigate) => ({
    initialValues,
    validationSchema: validationSchema(isSignIn),
    onSubmit: submitHandler(dispatch, isSignIn, navigate)
});

export default formParams;