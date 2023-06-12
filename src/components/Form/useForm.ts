import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { setIsSignIn } from '../../redux-toolkit/features/userSlice';
import StateType from '../../types/stateTypes';
import formParams from './formUtils';
import { UseFormProps } from '../../types/propTypes';

const useForm = (): UseFormProps => {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    isSignIn,
    formData,
    loading: { user },
  } = useSelector((state: StateType) => state);
  const formik = useFormik({
    ...formParams(isSignIn, dispatch, navigate, formData),
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }
    formik.handleSubmit();
    setValidated(true);
  };

  const toggleIsSignIn = (): { payload: undefined; type: 'user/setIsSignIn' } =>
    dispatch(setIsSignIn());

  return {
    formik,
    isSignIn,
    toggleIsSignIn,
    validated,
    handleSubmit,
    isLoading: user,
  };
};

export default useForm;
