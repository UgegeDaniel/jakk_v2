/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NavigateFunction } from 'react-router-dom';
import StateType from '../types/stateTypes';

const existingPath = localStorage.getItem('path')
  ? localStorage.getItem('path')
  : '/';

export const urls = {
  getUserHistory: { endpoint: '/users/history', extract: 'userHistory' },
  signin: (navFunc: NavigateFunction) => ({
    endpoint: '/users/signin',
    extract: 'user',
    navParams: { navPath: existingPath!, navFunc: navFunc },
  }),

  signup: (navFunc: NavigateFunction) => ({
    endpoint: '/users/signup',
    extract: 'user',
    navParams: { navPath: '/verifyEmail', navFunc: navFunc },
  }),

  resendEmail: (email: string, name: string, navFunc: NavigateFunction) => ({
    endpoint: '/users/signup/resendEmail',
    extract: 'user',
    navParams: { navPath: '/verifyEmail', navFunc: navFunc },
    postBody: {
      email: email,
      name: name,
    },
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
      endpoint: '/users/score/save',
      extract: 'newScore',
      postBody: {
        subjectId: `${state.testParams.subjectId}`,
        score: `${state.result.score}`,
        year: `${state.testParams.chosenYear}`,
      },
    };
  },

  verifyEmail: (ref: string | undefined, navFunc: NavigateFunction) => {
    return {
      endpoint: '/users/signup/verifyEmail',
      extract: 'user',
      postBody: {
        ref,
      },
      navParams: { navPath: existingPath!, navFunc: navFunc },
    };
  },
};
