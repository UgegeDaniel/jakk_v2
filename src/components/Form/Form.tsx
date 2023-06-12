import React from 'react';
import { Form as BootstrapForm } from 'react-bootstrap';
import Button from '../Button/Button';
import FormHeader from './FormHeader';
import Inputs from './Inputs';
import useForm from './useForm';
import { formDataType, formEventType, handleSubmitFxnType } from '../../types/utilityTypes';

const Form: React.FC = () => {
  const formData: formDataType = useForm();
  const handleFormSubmit: handleSubmitFxnType = (event) => {
    formData.handleSubmit(event);
  };

  return (
    <BootstrapForm
      onSubmit={(event: formEventType) => handleFormSubmit(event)}
      className='p-3'
      noValidate validated={formData.validated}
    >
      <FormHeader formData={formData} />
      <Inputs formData={formData} />
      <Button
        txt={formData.isSignIn ? 'Sign In' : 'Sign Up'}
        style='mt-2'
        isLoading={formData.isLoading}
      />
    </BootstrapForm>
  );
};

export default Form;
