
export interface User {
    token: string;
    success: boolean;
    user: {
        email: string,
        name: string,
    }
  }
  
  interface FormData {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  }
  
  interface TestParams {
    subjectId: string,
    chosenYear: string,
    chosenSubject: string
  }
  
  interface Result {
    attempted: number,
    correct: number,
    score: number | string,
  }
  
  interface QuestionType {
    examtype: string;
    questions_uid: string;
    examYear: number;
    question: string;
    section: string;
    optiona: string;
    optionb: string;
    optionc: string;
    optiond: string;
    optione: string;
    answer: string;
    image: string;
    subjectId: string;
    contributor_id: string;
    examType: string;
    userChoice?: string
  }

  type StateType = {
    // Properties for the overall state
    user: User | null;
    userHistory: {name: string, year: string, time_of_test: string, score: string}[];
  
    allSubjects: {name: string, subjects_uid: string}[];
    years: string[];
    questions: QuestionType[];
  
    formData: FormData;
    isSignIn: boolean;
  
    notifications: {msg: string | undefined, style: string}[];
    showNotification: boolean;
    isLoading: boolean;
  
    showError: boolean;
  
    testParams: TestParams;
    testStarted: boolean;
    testSubmitted: boolean;
  
    currentIndex: number;
    timer: boolean;
    result: Result;
    answeredQuestions: number[];
  
    isModal: boolean;
  }

export default StateType;