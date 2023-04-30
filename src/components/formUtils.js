import { object, string } from 'yup';
import { signUpUser, signInUser } from '../redux-toolkit/features';

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

const submitHandler = (dispatch, isSignIn) => (values, onSubmitParams) => {
    isSignIn
        ? dispatch(signInUser({endpoint: '/users/signin', postBody: values}))
        : dispatch(signUpUser({endpoint: '/users/signup', postBody: values}));
    onSubmitParams.setIsSubmitting(true);
    onSubmitParams.resetForm();
}

const formParams = (isSignIn, dispatch) => ({
    initialValues,
    validationSchema: validationSchema(isSignIn),
    onSubmit: submitHandler(dispatch, isSignIn)
});

export default formParams;