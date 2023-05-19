
const initialState = {
    //USER
    user: JSON.parse(localStorage.getItem('user')),
    userHistory: [],

    //QUESTIONS
    allSubjects: [],
    years: [],
    questions: [],

    //FORM
    formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    },
    isSignIn: false,

    //NOTIFICATIONS
    notifications: [],
    showNotification: false,
    isLoading: false,

    showError: false,

    //TEST PARAMETERS
    testParams: {
        subjectId: '',
        chosenYear: '',
        chosenSubject: ''
    },
    testStarted: false,
    testSubmitted: false,

    //ONGOING TEST STATE
    currentIndex: 0,
    timer: false,
    result: {
        attempted: 0,
        correct: 0,
        score: 0
    },
    answeredQuestions: [],

    isModal: false
}

export default initialState;