import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

//API, UTILS (CREATE EXTRA REDUCERS) FEATURES (INITIAL STATE, SLICES)

const existingUser = JSON.parse(localStorage.getItem('user'));
const token = `Bearer ${existingUser.token}`;
const config = {
    headers: {
        "Content-Type": "application/json",
        Authorization: token
    }
};
const baseUrl = 'http://localhost:5000/api'

const initialState = {
    allSubjects: [],
    user: existingUser ? existingUser : null,
    questions: [],
    userHistory: [],
    formData: {
        name: "Test User",
        email: "test62@gmail.com",
        password: "ABCabc1"
    },
    userScore: {
        subject: "chemistry",
        score: 75.75
    },
    errors: [],
    isLoading: false,
    showError: false
}

const axiosRequestHandler = async ({ endpoint, postBody }) => {
    const url = `${baseUrl}${endpoint}`;
    let responseData = null;
    let responseError = null;
    try {
        const { data } = postBody
            ? await axios.post(url, postBody, config)
            : await axios.get(url, config);
        responseData = await data
    } catch (err) {
        responseError = err.response.data
    }
    return { responseData, responseError }
};

export const signInUser = createAsyncThunk('user/signIn', axiosRequestHandler);
export const signUpUser = createAsyncThunk('user/signUp', axiosRequestHandler);
export const getAllSubjects = createAsyncThunk('questions/allSubjects', axiosRequestHandler);
export const getQuestions = createAsyncThunk('questions/getQuestions', axiosRequestHandler);
export const saveUserHistory = createAsyncThunk('questions/saveHistory', axiosRequestHandler);
export const getUserHistory = createAsyncThunk('questions/getHistory', axiosRequestHandler);

const createExtraReducer = (builder, asyncMethod, stateToUpdate) => {
    builder.addCase(asyncMethod.pending, (state) => {
        state.isLoading = true
    })
    builder.addCase(asyncMethod.fulfilled, (state, action) => {
        const { responseData, responseError } = action.payload;
        state.isLoading = false
        state[stateToUpdate] = responseData && responseData;
        if (stateToUpdate === 'user' && responseData) {
            localStorage.setItem("user", JSON.stringify(responseData));
        }
        state.errors = responseError && state.errors.push(responseError);
    })
    builder.addCase(asyncMethod.rejected, (state, action) => {
        state.isLoading = false
    })
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // localStorage.removeItem(key); LOGOUT 
        updateFormErrors: (state, action) => {
            console.log(state.errors)
            state.errors = action.payload.filter(error => error !== undefined);
            console.log(state.errors)
        },
        showErrors: (state, action) => {

        }
    },
    extraReducers: (builder) => {
        createExtraReducer(builder, signInUser, 'user');
        createExtraReducer(builder, signUpUser, 'user');
        createExtraReducer(builder, getAllSubjects, 'allSubjects');
        createExtraReducer(builder, getQuestions, 'questions');
        createExtraReducer(builder, saveUserHistory, 'userHistory');
        createExtraReducer(builder, getUserHistory, 'userHistory');
    },
})

// export const questionSlice = createSlice({
//     name: 'question',
//     initialState,
//     reducers: {

//     }
// })

export const { updateFormErrors } = userSlice.actions;
export default userSlice.reducer