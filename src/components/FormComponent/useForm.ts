import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
import { setIsSignIn, updateFormErrors } from '../../redux-toolkit/features/userSlice';
import StateType from '../../types/stateTypes';
import formParams from './formUtils';

interface UseFormProps {
  formik: ReturnType<typeof useFormik>;
  isSignIn: boolean;
  toggleIsSignIn: () => void;
  handleBtnClick: () => void;
}

const useForm = (): UseFormProps => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSignIn, formData } = useSelector((state: StateType) => state);
  const formik = useFormik({ ...formParams(isSignIn, dispatch, navigate, formData) });

  const { name, email, password, confirmPassword } = formik.errors;
  const errorValues = [name, email, password, confirmPassword]

  // useEffect(() => {
  //   dispatch(updateFormErrors(errorValues));
  // }, [dispatch, errorValues]);

  const handleBtnClick = () => dispatch(updateFormErrors(errorValues));

  const toggleIsSignIn = () => dispatch(setIsSignIn());

  return {
    formik,
    isSignIn,
    toggleIsSignIn,
    handleBtnClick,
  };
};

export default useForm;
