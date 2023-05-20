/* eslint-disable @typescript-eslint/no-non-null-assertion */
import StateType from '../types/stateTypes';

const initialState: StateType = {
  user: JSON.parse(localStorage.getItem('user')!),
  userHistory: [],
  
  allSubjects: [],
  years: [],
  questions: [],
  
  formData: {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  },
  isSignIn: false,
  
  notifications: [],
  showNotification: false,
  isLoading: false,
  
  showError: false,
  
  testParams: {
    subjectId: '',
    chosenYear: '',
    chosenSubject: ''
  },
  testStarted: false,
  testSubmitted: false,
  
  currentIndex: 0,
  timer: false,
  result: {
    attempted: 0,
    correct: 0,
    score: 0
  },
  answeredQuestions: [],
  
  isModal: false
};
  

export default initialState;