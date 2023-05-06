const questionReducers = {
    selectSubject: (state, action) => {
        state.testParams.subject = action.payload;
    },
    selectYear: (state, action) => {
        state.testParams.year = action.payload;
    },
} 
export default questionReducers;