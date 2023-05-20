/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikErrors } from "formik";
import StateType from "../../types/stateTypes";
type FormErrorsType = (string | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined)[]
const userReducers = {
    updateFormErrors: (state: StateType, action:{payload: FormErrorsType}) => {
        const errors = Array.isArray(action.payload) ? action.payload?.filter(error => error !== undefined) : []
        state.notifications = errors?.map((msg: any) => ({ style: 'danger', msg }));
        state.showNotification = true;
    },
    signOut: (state: StateType) => {
        localStorage.removeItem('user');
        state.user = null;
    },
    setShowNotification: (state: StateType) => {
        state.showNotification = false;
    },
    successMsg: (state: StateType, action: {payload: {msg: string, style: string}}) => {
        state.notifications = [action.payload];
    },
    setIsSignIn: (state: StateType) => {
        state.isSignIn = !state.isSignIn;
    }
}

export default userReducers