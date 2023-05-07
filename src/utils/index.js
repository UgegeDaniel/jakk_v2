import moment from 'moment';

export const existingUser = JSON.parse(localStorage.getItem('user'));
export const aboutTxt = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of"
export const capitalizeFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1);
export const milliSecsToMoment = (ms) => moment(new Date(Number(ms)).toISOString('en-GB')).format('llll');

export const chartColors = [
    '#FFEAD2', '#ACB1D6', '#ACB1D6', '#DBDFEA',
    '#BFCCB5', '#7C96AB', '#B7B7B7', '#EDC6B1',
    '#E8A0BF', '#BA90C6', '#C0DBEA', '#B3C99C',
    '#FFD966', '#F4B183', '#DFA67B', '#804674',
    '#B9F3E4',
];

const existingPath = localStorage.getItem('path');
export const urls = {
    getUserHistory: { endpoint: '/users/history', extract: 'userHistory' },
    signin: (navFunc) => ({ 
        endpoint: '/users/signin', 
        extract: 'user', 
        navParams: { navPath: existingPath, navFunc: navFunc },
    }),
    signup: (navFunc) => ( { 
        endpoint: '/users/signup', 
        extract: 'user',
        navParams: { navPath: existingPath, navFunc: navFunc },
    }),
    getAllSubjects: { endpoint: "/subjects", extract: "allSubjects" },
    getYearsForSubject: (chosenId) => ({
        endpoint: `/questions/availableyears?subjectId=${chosenId}`,
        extract: "years"
    }),
    getQuestions: (testParams, navFunc) => ({
        endpoint: `/questions?subjectId=${testParams.subjectId}&year=${testParams.chosenYear}`,
        navParams: { navPath: '/test', navFunc: navFunc },
        extract: "questions"
    }),
}