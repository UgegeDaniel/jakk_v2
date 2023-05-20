import React from 'react';
import { Form } from 'react-bootstrap';
import Btn from '../Btn/Btn';
import Input from './Input';
import useForm from './useForm';

const FormComponent: React.FC = () => {
    const formData = useForm();

    return (
        <Form onSubmit={formData.formik.handleSubmit} className="p-3">
            <p>
                {formData.isSignIn ? "Don't" : "Already"} have an account?
                <span
                    className='text-primary d-inline'
                    onClick={formData.toggleIsSignIn}
                >
                    {formData.isSignIn ? 'Sign Up' : 'Sign In'}
                </span>
            </p>
            {!formData.isSignIn && <Input name="name" formik={formData.formik} />}
            <Input type="email" name="email" formik={formData.formik} />
            <Input type="password" name="password" formik={formData.formik} />
            {!formData.isSignIn && (
                <Input
                    type="password"
                    name="confirmPassword"
                    formik={formData.formik}
                />
            )}
            <Btn
                txt={formData.isSignIn ? 'Sign In' : 'Sign Up'}
                onClick={formData.handleBtnClick}
            />
        </Form>
    );
};

export default FormComponent;
