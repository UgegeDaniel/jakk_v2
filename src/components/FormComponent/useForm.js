import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import formParams from "./formUtils";
import { useEffect } from "react";
import { setIsSignIn, updateFormErrors } from "../../redux-toolkit/features/userSlice";

const useForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isSignIn, formData } = useSelector((state) => state)
    const formik = useFormik({ ...formParams(isSignIn, dispatch, navigate, formData) });
    const { name, email, password, confirmPassword } = formik.errors;

    useEffect(() => {
        dispatch(updateFormErrors([name, email, password, confirmPassword]))
    }, [dispatch, name, email, password, confirmPassword])

    const handleBtnClick = () => dispatch(
        updateFormErrors([name, email, password, confirmPassword])
    );
    
    const toggleIsSignIn = () => dispatch(setIsSignIn())
    return {
        formik,
        isSignIn,
        toggleIsSignIn,
        handleBtnClick
    }
}
export default useForm;