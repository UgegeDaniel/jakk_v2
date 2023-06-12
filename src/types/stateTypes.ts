export interface User {
  success: boolean;
  user: {
    user: any;
    email: string;
    name: string;
    verified: boolean;
  };
}
export interface UserHistory {
  timeOfTtest: string;
  subject: string;
  timeOfTest: string;
  score: number;
  year: string;
}

export interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface Loading {
  user: boolean,
  userHistory: boolean,
  allSubjects: boolean,
  questions: boolean,
  years: boolean,
  newScore: boolean,
}

export interface TestParams {
  subjectId: string;
  chosenYear: string;
  chosenSubject: string;
}

export interface Result {
  attempted: number;
  correct: number;
  score: number | string;
}

export interface QuestionType {
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
  userChoice?: string;
}

type StateType = {
  // Properties for the overall state
  user: User | null;
  userHistory: UserHistory[];

  allSubjects: { name: string; subjects_uid: string }[];
  years: string[];
  questions: QuestionType[];

  formData: FormData;
  isSignIn: boolean;

  notifications: { msg: string | undefined; style: string }[];
  showNotification: boolean;
  loading: Loading;

  showError: boolean;

  testParams: TestParams;
  testStarted: boolean;
  testSubmitted: boolean;

  currentIndex: number;
  timer: boolean;
  result: Result;
  answeredQuestions: number[];

  isModal: boolean;
};

export default StateType;
