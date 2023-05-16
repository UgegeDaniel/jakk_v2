import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import formParams from "./formUtils";
import { useEffect } from "react";
import { setIsSignIn, updateFormErrors } from "../../redux-toolkit/features/userSlice";

const useForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isSignIn = useSelector((state) => state.userState.isSignIn)
    const formData = useSelector((state) => state.userState.formData)
    const formik = useFormik({ ...formParams(isSignIn, dispatch, navigate, formData) });
    const { name: nameError, email: emailError, password: passwordError, } = formik.errors;

    useEffect(() => {
        dispatch(updateFormErrors([nameError, emailError, passwordError]))
    }, [dispatch, emailError, nameError, passwordError])

    const handleBtnClick = () => dispatch(updateFormErrors([nameError, emailError, passwordError]))
    const toggleIsSignIn = () => dispatch(setIsSignIn())
    return {
        formik,
        isSignIn,
        toggleIsSignIn,
        handleBtnClick
    }
}
export default useForm;