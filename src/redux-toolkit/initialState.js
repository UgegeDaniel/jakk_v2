import { existingUser } from '../utils';

const initialState = {
    allSubjects: [],
    years: [],
    user: existingUser ? existingUser.user : null,
    questions: [],
    userHistory: [],
    formData: {
        name: "",
        email: "",
        password: ""
    },
    userScore: {
        subject: "chemistry",
        score: 75.75
    },
    notifications: [],
    showNotification: false,
    isLoading: false,
    showError: false,
    testParams: {
        subject: '',
        year: ''
    },
    isSignIn: false,
    testStarted: false
}

export default initialState;