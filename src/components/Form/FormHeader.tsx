import React from 'react';
import { formDataType } from '../../types/utilityTypes';

const FormHeader: React.FC<{formData: formDataType}> = ({formData}) => (
  <p>
    {formData.isSignIn ? 'Don\'t' : 'Already'} have an account?
    <span
      className='text-primary d-inline mx-2'
      onClick={formData.toggleIsSignIn}
      style={{ cursor: 'pointer' }}
    >
      {formData.isSignIn ? 'Sign Up' : 'Sign In'}
    </span>
  </p>
);


export default FormHeader;