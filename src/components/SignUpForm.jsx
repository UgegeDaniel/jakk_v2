import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import formParams from './formUtils';
import { Button, Form } from 'react-bootstrap';
import ErrorToast from './ErrorToast';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormErrors } from '../redux-toolkit/features';

const SignUpForm = () => {
    const [isSignIn, setIsSignIn] = useState(false);
    const dispatch = useDispatch();
    const formik = useFormik({...formParams(isSignIn, dispatch)});
    const { name: nameError, email: emailError, password: passwordError } = formik.errors;
    useEffect(() => {
        dispatch(updateFormErrors([nameError, emailError, passwordError]))
    }, [dispatch, emailError, nameError, passwordError])
    return (
        <Form onSubmit={formik.handleSubmit} className='d-flex flex-column justify-content-center align-content-center'>
            <p>{isSignIn ? "Don't" : "Already"} have an account ? <span className='text-primary d-inline' onClick={() => setIsSignIn(!isSignIn)}> {isSignIn ? 'Sign Up' : "Sign In"}</span></p>
            {!isSignIn && <Input name="name" ctx={formik} />}
            <Input type="email" name="email" ctx={formik} />
            <Input type="password" name="password" ctx={formik} />
            <Button variant="primary" type="submit" className="btn btn-primary btn-sm" disabled={formik.isSubmitting}
            onClick={() => dispatch(updateFormErrors([nameError, emailError, passwordError]))}
            >
                {isSignIn ? 'Sign In' : 'Sign Up'}
            </Button>
            <ErrorToast />
        </Form >
    )
}
export default SignUpForm;