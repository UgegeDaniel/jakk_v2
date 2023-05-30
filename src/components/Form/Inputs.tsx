import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { formDataType } from '../../types/utilityTypes';
import Input from './Input';
import styles from '../../styles';

const Inputs: React.FC<{ formData: formDataType }> = ({ formData }) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 515px)' });
  const fieldContainerStyle = isSmallScreen ? 'flex-column' : styles.flex;
  return (
    <React.Fragment>
      <div className={fieldContainerStyle}>
        {!formData.isSignIn && <Input name='name' formik={formData.formik} />}
        <Input type='email' name='email' formik={formData.formik} />
      </div>
      <div className={fieldContainerStyle}>
        <Input type='password' name='password' formik={formData.formik} />
        {!formData.isSignIn &&
          <Input type='password' name='confirmPassword' formik={formData.formik} />
        }
      </div>
    </React.Fragment>
  );
};
export default Inputs;