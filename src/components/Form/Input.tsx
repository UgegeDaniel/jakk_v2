import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';
import { InputProps } from '../../types/propTypes';

const Input: React.FC<InputProps> = ({ formik, type, name }) => {
  const [revealPassword, setRevealPassword] = useState(false);
  const [fieldType, setFieldType] = useState(type);
  const hasBeenTouched = formik?.touched ? formik?.touched[name] : {};
  const hasErrors = formik?.errors ? formik?.errors[name] : {};
  const errorMsg = formik?.errors ? formik?.errors[name] : '';
  const value = formik?.values ? formik?.values[name] : '';

  const toggleShowPassword = () => {
    setRevealPassword(!revealPassword);
    if (!revealPassword && type === 'password') {
      setFieldType('text');
    }
    if (revealPassword && type === 'password') {
      setFieldType('password');
    }
  };

  return (
    <Form.Group className='mr-2 mb-2 w-70 flex-fill' controlId={name}>
      <Form.Label className='text-primary'>{name.charAt(0).toUpperCase() + name.slice(1)}</Form.Label>
      <InputGroup>
        <Form.Control
          required
          isValid={hasBeenTouched && !hasErrors}
          type={fieldType}
          name={name}
          style={{ fontSize: '14px', padding: '8px' }}
          onChange={formik?.handleChange}
          value={value}
          onBlur={formik?.handleBlur}
        />
        {type === 'password' &&
          <InputGroup.Text onClick={toggleShowPassword} style={{ cursor: 'pointer' }}>
            {revealPassword ? <MdOutlineVisibilityOff /> : <MdOutlineVisibility />}
          </InputGroup.Text>
        }
        <Form.Control.Feedback type="invalid">{errorMsg}</Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
};

export default Input;
