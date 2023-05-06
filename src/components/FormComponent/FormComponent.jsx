import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { updateFormErrors, setIsSignIn } from '../../redux-toolkit/features/userSlice';
import formParams from './formUtils';
import Btn from '../Btn/Btn'
import Input from './Input';

const FormComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSignIn = useSelector((state) => state.userState.isSignIn)
    const formik = useFormik({ ...formParams(isSignIn, dispatch, navigate) });
    const {
        name: nameError,
        email: emailError,
        password: passwordError,
    } = formik.errors;
    useEffect(() => {
        dispatch(updateFormErrors([nameError, emailError, passwordError]))
    }, [dispatch, emailError, nameError, passwordError])

    return (
        <Form
            onSubmit={formik.handleSubmit}
            className='d-flex flex-column justify-content-center align-content-center'
        >
            <p>{isSignIn ? "Don't" : "Already"} have an account ?
                <span className='text-primary d-inline'
                    onClick={() => dispatch(setIsSignIn())}> {isSignIn ? 'Sign Up' : "Sign In"}
                </span>
            </p>
            {!isSignIn && <Input name="name" formik={formik} />}
            <Input type="email" name="email" formik={formik} />
            <Input type="password" name="password" formik={formik} />
            <Btn
                txt={isSignIn ? 'Sign In' : 'Sign Up'}
                disabled={formik.isSubmitting}
                onClick={() => dispatch(updateFormErrors([nameError, emailError, passwordError]))}
            />
        </Form >
    )
}
export default FormComponent;