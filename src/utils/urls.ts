/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NavigateFunction } from 'react-router-dom';
import StateType from '../types/stateTypes';

const existingPath = localStorage.getItem('path')
  ? localStorage.getItem('path')
  : '/';

export const urls = {
  getUserHistory: { endpoint: '/student/history', extract: 'userHistory' },
  signin: (navFunc: NavigateFunction) => ({
    endpoint: '/student/signin',
    extract: 'user',
    navParams: { navPath: '/dashboard', navFunc: navFunc },
  }),

  signup: (navFunc: NavigateFunction) => ({
    endpoint: '/student/signup',
    extract: 'user',
    navParams: { navPath: '/unverified', navFunc: navFunc },
  }),

  resendEmail: (navFunc: NavigateFunction) => ({
    endpoint: '/student/signup/resendEmail',
    extract: 'user',
    navParams: { navPath: '/unverified', navFunc: navFunc },
  }),

  getAllSubjects: { endpoint: '/subjects', extract: 'allSubjects' },
  getYearsForSubject: (chosenId: string) => ({
    endpoint: `/questions/availableyears?subjectId=${chosenId}`,
    extract: 'years',
  }),
  getQuestions: (
    testParams: {
      subjectId: string;
      chosenYear: string;
    },
    navFunc: NavigateFunction,
  ) => ({
    endpoint: `/questions?subjectId=${testParams.subjectId}&year=${testParams.chosenYear}`,
    navParams: { navPath: '/test', navFunc: navFunc },
    extract: 'questions',
  }),

  saveScore: (state: StateType) => {
    return {
      endpoint: '/student/score/save',
      extract: 'newScore',
      postBody: {
        subjectId: `${state.testParams.subjectId}`,
        score: `${state.result.score}`,
        year: `${state.testParams.chosenYear}`,
      },
    };
  },

  verifyEmail: (ref: string | null, navFunc: NavigateFunction) => {
    return {
      endpoint: '/student/signup/verifyEmail',
      extract: 'user',
      postBody: {
        ref,
      },
      navParams: { navPath: existingPath!, navFunc: navFunc },
    };
  },
};
