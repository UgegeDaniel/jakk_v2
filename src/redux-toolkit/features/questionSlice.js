import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosRequestHandler from '../../api'
import initialState from '../initialState'
import { createExtraReducer } from '../createExtraReducer';
import questionReducers from '../reducers/questionReducers';

export const getAllSubjects = createAsyncThunk('questions/allSubjects', axiosRequestHandler);
export const getQuestions = createAsyncThunk('questions/getQuestions', axiosRequestHandler);
export const getYearsForSubject = createAsyncThunk('questions/getYears', axiosRequestHandler);
export const saveUserScore = createAsyncThunk('questions/saveScore', axiosRequestHandler);

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        setSubjectId: questionReducers.setSubjectId,
        selectYear: questionReducers.selectYear,
        setShowNotification: questionReducers.setShowNotification,
        showModal: (state, action) => {
            state.modal = action.payload;
        },
        selectOption: (state, action) => {
            const { id, option } = action.payload
            state.questions = state.questions.map((question) => {
                if (question.questions_uid === id) {
                    return {
                        ...question,
                        userChoice: option
                    }
                }
                return question
            })
            const answered = state.questions.filter((question) => question.userChoice)
            const correct = answered.filter((question) => question.userChoice === question.answer)
            state.result = {
                attempted: answered.length,
                correct: correct.length,
                score: Number(((100 * correct.length) / state.questions.length)).toFixed(2)
            }
            state.questions.forEach((question, index) => {
                if (question.questions_uid === id) {
                   state.answeredQuestions.push(index)
                }
                return
            })
        },

        prevQuestion: (state, action) => {
            state.currentIndex = state.currentIndex === 0
                ? state.currentIndex
                : state.currentIndex - 1
        },
        nextQuestion: (state, action) => {
            state.currentIndex = state.currentIndex === state.questions.length - 1
                ? state.currentIndex
                : state.currentIndex + 1
        },

        jumpToIndex: (state, action) => {
            state.currentIndex = action.payload;
        },
    },
    extraReducers: (builder) => {
        createExtraReducer(builder, getAllSubjects, 'allSubjects');
        createExtraReducer(builder, getQuestions, 'questions');
        createExtraReducer(builder, getYearsForSubject, 'years');
        createExtraReducer(builder, saveUserScore, 'newScore');
    },
});

export const {
    setSubjectId,
    selectYear,
    setShowNotification,
    selectOption,
    prevQuestion,
    nextQuestion,
    jumpToIndex,
    showModal
} = questionSlice.actions;

export default questionSlice.reducer