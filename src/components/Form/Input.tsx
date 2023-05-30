import React from 'react';
import { Form } from 'react-bootstrap';
import { InputProps } from '../../types/propTypes';

const Input: React.FC<InputProps> = ({ formik, type, name }) => {
  const hasBeenTouched = formik?.touched ? formik?.touched[name] : {};
  const hasErrors = formik?.errors ? formik?.errors[name] : {};
  const errorMsg = formik?.errors ? formik?.errors[name] : '';
  const value = formik?.values ? formik?.values[name] : '';
  return (
    <Form.Group className='mr-2 mb-2 w-70 flex-fill' controlId={name}>
      <Form.Label className='text-primary'>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
      <Form.Control
        required
        isValid={hasBeenTouched && !hasErrors}
        type={type ? type : 'text'}
        name={name}
        style={{ fontSize: '14px', padding: '8px' }}
        onChange={formik?.handleChange}
        value={value}
        onBlur={formik?.handleBlur}
      />
      <Form.Control.Feedback type="invalid">{errorMsg}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default Input;
