const questionReducers = {
    setSubjectId: (state, action) => {
        state.testParams.chosenSubject = action.payload.chosenSubject;
        state.testParams.subjectId = action.payload.chosenId;
    },
    selectYear: (state, action) => {
        console.log('called', action.payload, state.testParams.chosenYear)
        state.testParams.chosenYear = action.payload;
    },
    setShowNotification: (state, action) => {
        state.showNotification = false;
    },
    showModal: (state, action) => {
        state.isModal = action.payload;
    },
    selectOption: (state, action) => {
        const { id, option } = action.payload
        state.questions = state.questions.map((question) => {
            if (question.questions_uid === id) {
                return { ...question, userChoice: option }
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
}
export default questionReducers;