import StateType from '../../types/stateTypes';

const questionReducers = {
  setSubjectId: (state: StateType, action: { payload: { chosenSubject: string; chosenId: string; }; }) => {
    state.testParams.chosenSubject = action.payload.chosenSubject;
    state.testParams.subjectId = action.payload.chosenId;
    state.testParams.chosenYear = '';
  },
  selectYear: (state: StateType, action: { payload: string; }) => {
    state.testParams.chosenYear = action.payload;
  },
  setShowNotification: (state: StateType, action: {payload: boolean}) => {
    state.showNotification = action.payload;
  },
  showModal: (state: StateType, action: { payload: boolean; }) => {
    state.isModal = action.payload;
  },
  selectOption: (state: StateType, action: { payload: { id: string; option: string; }; }) => {
    const { id, option } = action.payload;
    state.questions = state.questions.map((question) => {
      if (question.questions_uid === id) {
        return { ...question, userChoice: option };
      }
      return question;
    });
    state.questions.forEach((question, index: number) => {
      if (question.questions_uid === id) {
        state.answeredQuestions.push(index);
      }
      return;
    });
  },
  prevQuestion: (state: { currentIndex: number; }) => {
    state.currentIndex = state.currentIndex === 0
      ? state.currentIndex
      : state.currentIndex - 1;
  },
  nextQuestion: (state: StateType) => {
    state.currentIndex = state.currentIndex === state.questions.length - 1
      ? state.currentIndex
      : state.currentIndex + 1;
  },
  jumpToIndex: (state: StateType, action: { payload: number; }) => {
    state.currentIndex = action.payload;
  },
  resetQuestionState: (state: StateType ) => {
    state.testSubmitted = false;
    state.testStarted = false;
    state.testSubmitted = false;
    state.currentIndex = 0;
    state.result = { attempted: 0, correct: 0, score: 0 };
    state.answeredQuestions = [];
  },
};
export default questionReducers;