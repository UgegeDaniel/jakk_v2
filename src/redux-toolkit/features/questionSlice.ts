import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'
import questionReducers from '../reducers/questionReducers';

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        setSubjectId: questionReducers.setSubjectId,
        selectYear: questionReducers.selectYear,
        setShowNotification: questionReducers.setShowNotification,
        showModal: questionReducers.showModal,
        selectOption: questionReducers.selectOption,
        prevQuestion: questionReducers.prevQuestion,
        nextQuestion: questionReducers.nextQuestion,
        jumpToIndex: questionReducers.jumpToIndex,
    },
});

export const {
    setSubjectId, selectYear,
    setShowNotification, selectOption,
    prevQuestion, nextQuestion,
    jumpToIndex, showModal
} = questionSlice.actions;

export default questionSlice.reducer