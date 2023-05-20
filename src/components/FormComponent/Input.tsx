import React from 'react'
import { Form } from 'react-bootstrap';

interface InputProps {
  formik: {
    handleChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur: (_event: React.FocusEvent<HTMLInputElement>) => void;
    values: {
      [key: string]: string | number | string[] | undefined;
    };
  };
  type?: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ formik, type, name }) => {
  return (
    <Form.Group className="mb-3 w-70" controlId="formBasicEmail">
      <Form.Label>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
      <Form.Control
        type={type ? type : 'text'}
        name={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
        onBlur={formik.handleBlur}
      />
    </Form.Group>
  );
};

export default Input;
