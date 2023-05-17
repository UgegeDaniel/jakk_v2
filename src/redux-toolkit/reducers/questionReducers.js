const questionReducers = {
    setSubjectId: (state, action) => {
        state.testParams.chosenSubject = action.payload.chosenSubject;
        state.testParams.subjectId = action.payload.chosenId;
    },
    selectYear: (state, action) => {
        state.testParams.chosenYear = action.payload;
    },
    setShowNotification: (state, action) => {
        state.showNotification = false;
    },
} 
export default questionReducers;